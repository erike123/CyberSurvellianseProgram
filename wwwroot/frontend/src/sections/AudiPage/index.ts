interface additionalInformationInterface {
    "projectType": string;
    "technologies": string;
    "budget": number;
    "deadline": string;
    "priorityLevel": string;
    "communicationPreferences": string;
    "desiredFreelancerExperienceLevel": string;
}

interface clientInformationInterface {
    "clientName": string;
    "clientEmail": string;
    "company": string;
    "contactNumber": string;
}


interface userData {
    "projectTitle": string;
    "projectDescription": string;
    "repositoryLink": string;
    "additionalInformation": additionalInformationInterface,
    "clientInformation": clientInformationInterface,
  }
  