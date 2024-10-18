namespace Web3Auditor.Models
{
	public class FormDataModel
	{
        public string? ProjectTitle { get; set; }
        public string? ProjectType { get; set; }
        public string? RepositoryLink { get; set; }
        public string? Technologies { get; set; }
        public string? Budget { get; set; }  // Use decimal for monetary values
        public string? Deadline { get; set; } // You might want to use DateTime
        public string? PriorityLevel { get; set; }
        public string? DesiredFreelancerExperienceLevel { get; set; }
        public string? ProjectDescription { get; set; }
        public string? Prompt { get; set; }
    }
}
