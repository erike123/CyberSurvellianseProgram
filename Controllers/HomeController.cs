using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using System.Diagnostics;
using System.Text.Json;
using System.Xml;
using Web3Auditor.Models;

namespace Web3Auditor.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IMongoCollection<Vulnerability> _vulnerabilityCollection;

        public HomeController(ILogger<HomeController> logger)
        {
            var connectionString = "mongodb+srv://web3user:HackathonKLE@cluster0.ret8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("Web3AuditorDB");  // MongoDB database name
            _vulnerabilityCollection = database.GetCollection<Vulnerability>("Vulnerabilities");
            _logger = logger;
        }

        public IActionResult Index()
        {
            // Use projection to only include the 'Content' field in the results, exclude 'Id'
            var projection = Builders<Vulnerability>.Projection
                .Include(v => v.Content)
                .Exclude(v => v.Id);  // Explicitly exclude 'Id'

            var contentOnly = _vulnerabilityCollection.Find(new BsonDocument())
                .Project(projection)
                .ToList();

            // Convert the projection result (BsonDocument) into JSON
            var json = contentOnly.ToJson(new JsonWriterSettings { Indent = true });

            // Return the prettified JSON as the response
            return Content(json, "application/json");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
