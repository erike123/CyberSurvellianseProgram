using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Diagnostics;
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
            // Insert some test data into the collection for demonstration
            var testVulnerability1 = new Vulnerability
            {
                Content = "Sample vulnerability content #1"
            };

            _vulnerabilityCollection.InsertOne(testVulnerability1);

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
