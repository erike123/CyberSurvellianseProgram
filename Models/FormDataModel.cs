namespace Web3Auditor.Models
{
	public class FormDataModel
	{
        public string projectTitle { get; set; }
        public string projectType { get; set; }
        public string repositoryLink { get; set; }
        public string technologies { get; set; }
        public decimal budget { get; set; }  // Use decimal for monetary values
        public string deadline { get; set; } // You might want to use DateTime
        public string priorityLevel { get; set; }
        public string desiredFreelancerExperienceLevel { get; set; }
        public string projectDescription { get; set; }
        public string prompt { get; set; }
    }
}
