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
