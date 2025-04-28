<<<<<<< HEAD
import React, { useState } from "react";

const CommunityLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    aiDeceptionType: "",
    blockchainThreatType: "",
    crossChainScamReport: "",
    blacklistSubmission: "",
    mevAttackMonitoring: "",
    disinformationCampaign: "",
    conflictZoneCyberThreats: "",
    newAttackVectorSuggestion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
    alert("Threat report submitted successfully!");
    // Here you can send the formData to your backend if needed
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Community Firewall Threat Reporting</h1>

      <form onSubmit={handleSubmit} style={styles.form}>

        <div style={styles.field}>
          <label>AI Deception Type:</label>
          <select name="aiDeceptionType" value={formData.aiDeceptionType} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="Deepfake">Deepfake</option>
            <option value="Voice Cloning">Voice Cloning</option>
            <option value="Fake Image">Fake Image</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Identity teft:</label>
          <select name="aiDeceptionType" value={formData.aiDeceptionType} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="Deepfake">Deepfake</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Blockchain Threat Type:</label>
          <select name="blockchainThreatType" value={formData.blockchainThreatType} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="Rug Pull">Rug Pull</option>
            <option value="Scam Token">Scam Token</option>
            <option value="Exploit">Exploit</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Cross-Chain Scam Report:</label>
          <textarea name="crossChainScamReport" value={formData.crossChainScamReport} onChange={handleChange} style={styles.textarea} placeholder="Describe cross-chain scam..."></textarea>
        </div>

        <div style={styles.field}>
          <label>Blacklist Submission (Address/URL):</label>
          <textarea name="blacklistSubmission" value={formData.blacklistSubmission} onChange={handleChange} style={styles.textarea} placeholder="Enter address or URL to blacklist..."></textarea>
        </div>

        <div style={styles.field}>
          <label>MEV Attack Monitoring:</label>
          <textarea name="mevAttackMonitoring" value={formData.mevAttackMonitoring} onChange={handleChange} style={styles.textarea} placeholder="Describe MEV attack activity..."></textarea>
        </div>

        <div style={styles.field}>
          <label>Disinformation Campaign Detection:</label>
          <textarea name="disinformationCampaign" value={formData.disinformationCampaign} onChange={handleChange} style={styles.textarea} placeholder="Report disinformation attempts..."></textarea>
        </div>

        <div style={styles.field}>
          <label>Conflict Zone Cyber Threats:</label>
          <textarea name="conflictZoneCyberThreats" value={formData.conflictZoneCyberThreats} onChange={handleChange} style={styles.textarea} placeholder="Report cyber threats in conflict zones..."></textarea>
        </div>

        <div style={styles.field}>
          <label>New Attack Vector Suggestion (DAO Proposal):</label>
          <textarea name="newAttackVectorSuggestion" value={formData.newAttackVectorSuggestion} onChange={handleChange} style={styles.textarea} placeholder="Suggest new attack vectors to monitor..."></textarea>
        </div>

        <button type="submit" style={styles.button}>Submit Threat Report</button>

      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    marginTop: "40px"
  } as const,

  title: {
    textAlign: "center" as const,
    fontSize: "32px",
    marginBottom: "30px"
  } as const,

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px"
  } as const,

  field: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px"
  } as const,

  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  } as const,

  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px"
  } as const,

  button: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px"
  } as const
};

export default CommunityLanding;
=======
import { useState } from "react";
import useForm from "../../../hooks/useForm";
import Button from "../Button/Button";

import { projectTypes, priorityLevel, experienceLevel, technologies } from ".";
import Dropdown from "../Form/Dropdown";
import InputField from "../Form/InputField";
import { testApi } from "../../../services/api";
import baseUrl from "../../../services/baseUrl";
import Cards from "../Cards/Cards";
import { Card } from "@mui/material";
import MyContractComponent from "../MyContractComponent/MyContractComponent";



const initialFormValues = {
  "projectTitle": "",
  "projectType": "",
  "repositoryLink": "",
  "technologies": "",
  "budget": "",
  "deadline": "",
  "priorityLevel": "",
  "desiredFreelancerExperienceLevel": "",
  "projectDescription": "",
  "prompt": "This works",
}

const ConsoleInput = () => {

  const handleFormSubmit = async () => {
    const data = {...values}
    try {
      const response = await fetch(`${baseUrl}/testApi`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('DEBUG', response)
  
      if (!response.ok) {
        // Check for network or server errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
  
      const result = await response.json();

      setCompanies(result.response);
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  

  const { values, onChange, onSubmit } = useForm(handleFormSubmit, initialFormValues)
  const [ companies, setCompanies ] = useState([]);



  return (
    <div className="rounded-md max-w-full mt-14">
      <MyContractComponent />

      {companies.length > 0 ? (<Cards companies={companies} />) :
      (
        <>
          <form className=" mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <InputField inputName="projectTitle" inputType="text" labelText="Title of Project" defaultValue={values.projectTitle} onChangeHandler={onChange}/>
                </div>
          

                <div className="relative z-0 w-full mb-5 group">
                  <div className="mb-4">
                    <Dropdown collection={projectTypes} valueEl={values.projectType} handleChange={onChange} name={"projectType"} />
                  </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="repositoryLink" inputType="text" labelText="Repository Link" defaultValue={values.repositoryLink}  onChangeHandler={onChange}/>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name={"priorityLevel"} collection={priorityLevel} valueEl={values.priorityLevel} handleChange={onChange}/>
                <label
                  htmlFor="priorityLevel"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Priority Level
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="budget" inputType="number" labelText="Budget" defaultValue={values.budget}  onChangeHandler={onChange} />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="deadline" inputType="date" labelText="Deadline" defaultValue={values.deadline} onChangeHandler={onChange}/>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name={"technologies"} collection={technologies} valueEl={values.technologies} handleChange={onChange}/>
                <label
                  htmlFor="technologies"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Technologies
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name={"desiredFreelancerExperienceLevel"} collection={experienceLevel} valueEl={values.desiredFreelancerExperienceLevel} handleChange={onChange} />
                <label
                  htmlFor="desiredFreelancerExperienceLevel"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Experience Level
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-10 mt-5 group">
              <textarea
                    id="projectDescription"
                    name="projectDescription" 
                    rows="10"
                    value={values.projectDescription}
                    onChange={onChange}
                    className="w-full resize-none bg-gray-800 text-green-500 font-mono p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Explain you smart contract code..."
                ></textarea>
              
              </div>
          </form>
          
          <div className="flex justify-center" onClick={onSubmit}>
              <Button label={"Find your Auditor"} />
          </div>

        </>
      )}
      

    </div>
  );
}
  
export default ConsoleInput;
  
>>>>>>> 40c7dfb047049537d13840c31c1d7f071d587d5c
