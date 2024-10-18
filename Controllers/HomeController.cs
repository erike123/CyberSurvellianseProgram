using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using System.Diagnostics;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Xml;
using Web3Auditor.Models;

namespace Web3Auditor.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private static readonly HttpClient _httpClient = new HttpClient();

        private readonly IMongoCollection<Vulnerability> _vulnerabilityCollection;

        public async Task<string> PutPrompt(IMongoCollection<Vulnerability> _vulnerabilityCollection, string prompt)
        {
            // Replace with your OpenAI API key
            string apiKey = Environment.GetEnvironmentVariable("API");

            // Set up the HTTP client
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            // Create the request body
            var requestBody = new
            {
                model = "gpt-3.5-turbo", // or "gpt-4" if you have access
                messages = new[]
                {
                    new { role = "user", content = prompt }
                },
                max_tokens = 4096
            };

            // Serialize the request body to JSON
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(requestBody);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            // Send the request
            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);

            // Check if the response was successful
            if (response.IsSuccessStatusCode)
            {
                // Read the response content
                var jsonResponse = await response.Content.ReadAsStringAsync();
                dynamic result = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonResponse);
                var responseText = result.choices[0].message.content;

                // Return the responseText
                return responseText;
            }
            else
            {
                // Handle the error case, maybe throw an exception or return an error message
                return "Error: Failed to get a response from OpenAI.";
            }
        }

        public HomeController(ILogger<HomeController> logger)
        {
            var connectionString = "mongodb+srv://web3user:HackathonKLE@cluster0.ret8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("Web3AuditorDB");  // MongoDB database name
            _vulnerabilityCollection = database.GetCollection<Vulnerability>("Vulnerabilities");
            _logger = logger;
        }

        public async Task<IActionResult> GetJsonData()
        {
            StringBuilder sb = new StringBuilder();
            string companiesPrompt = $"Give me top 20 companies that made reports for smart contracts last months and can u give me exactly the names and only names of companies -> i want only the names (no other words or characters) - comma separated without space";
            string companiesResponse = await PutPrompt(_vulnerabilityCollection, companiesPrompt);
            List<string> compainies = companiesResponse.Split(",").ToList();

            string responseText = String.Empty;

            foreach (var company in compainies)
            {
                string mainPrompt =
                    $"Pashov audited\r\n\r\nAzuro (4 audits):\r\n\r\n    Access Control Vulnerabilities: Found 3 times across different Azuro audits.\r\n    Gas Optimization Issues: Identified in 2 reports.\r\n    Logic Errors: Discovered in 2 reports.\r\n\r\nMetalabel (2 audits):\r\n\r\n    Access Control Vulnerabilities: Reported in 1 audit.\r\n    Gas Optimization Issues: Found in 1 report.\r\n\r\nVarious others (1 audit each for Punk Bid, GMD, Florence Finance, etc.):\r\n\r\n    Reentrancy Bugs: Detected in 1 audit (GMD).\r\n    Integer Overflow/Underflow: Found in 1 audit (Punk Bid).\r\n    Logic Errors: Reported once (Florence Finance).\r\n\"\r\n\r\nCan u represent the findings in case of the above format for each comapny in case of {company} for the latest Q -> i want only json for output and nothing else";
                responseText = await PutPrompt(_vulnerabilityCollection, mainPrompt);
                sb.AppendLine(responseText);
                
                // Insert the prompt and response into the MongoDB collection
                _vulnerabilityCollection.InsertOne(
                    new Vulnerability()
                    {
                        Content = $"Prompt = {mainPrompt}\n\n Response = {responseText}"
                    }
                );
            }

            return Json(responseText);
        }

        [HttpPost]
        public async Task<IActionResult> TestApi([FromBody] PromptClass prompt)
        {
                var responseText = PutPrompt(_vulnerabilityCollection,prompt.Prompt);
                // Insert the prompt and response into the MongoDB collection
                _vulnerabilityCollection.InsertOne(
                    new Vulnerability()
                    {
                        Content = $"Prompt = {prompt.Prompt}\n\n Response = {responseText}"
                    }
                );
            return new ContentResult
                {
                    Content = "Response: " + responseText,
                    ContentType = "text/html", // You can change this to "application/json" if returning JSON
                    StatusCode = 200
                };
            
        }
        [HttpPost]
        public async Task<IActionResult> DeleteMany([FromBody] List<string> ids)
        {
            if (ids == null || ids.Count == 0)
            {
                return BadRequest("No vulnerabilities selected for deletion.");
            }

            try
            {

                var objectIds = ids.Select(id => new ObjectId(id)).ToList();
                // Build a filter to find documents with the specified ids
                var filter = Builders<Vulnerability>.Filter.In(v => v.Id, objectIds);

                // Perform the deletion operation
                var result = await _vulnerabilityCollection.DeleteManyAsync(filter);
              
                return Ok(); // Success
                
            }
            catch (Exception ex)
            {
                // Log the exception and return a server error
                // Log(ex);
                return StatusCode(500, "An error occurred while deleting vulnerabilities.");
            }
        }

        public async Task<IActionResult> Index()
        {
            var model = await _vulnerabilityCollection.Find(FilterDefinition<Vulnerability>.Empty).ToListAsync();
            return View(model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
