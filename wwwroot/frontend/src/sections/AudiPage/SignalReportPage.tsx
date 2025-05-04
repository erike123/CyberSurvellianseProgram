import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const SignalReportPage: React.FC = () => {
  const location = useLocation();
  const prefill = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    role: "",
    aiMisuse: prefill.title?.includes("AI") ? prefill.title : "",
    web3ScamType: prefill.title?.includes("Phishing") ? "Fake Airdrop / Phishing" : "",
    cyberThreatDescription: prefill.description || "",
    affectedEntities: "",
    additionalNotes: "",
    proposedAction: prefill.use || "",
    screenshot: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, screenshot: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Signal Report:", formData);
    alert("Thank you for submitting your signal. Our security team will review it promptly.");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Signal Submission Form</h1>
      <p style={styles.subtitle}>
        Please report any suspicious activities, emerging threats, or proposals to improve community security.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Name / Organization:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.field}>
          <label>Contact Info (Email or Telegram):</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.field}>
          <label>Your Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} style={styles.input} required>
            <option value="">Select</option>
            <option>Politician / Policy Maker</option>
            <option>Journalist / Analyst</option>
            <option>Concerned Citizen</option>
            <option>Developer / Researcher</option>
            <option>Cybersecurity Professional</option>
          </select>
        </div>

        <hr style={styles.separator} />

        <div style={styles.field}>
          <label>AI Misuse Observed:</label>
          <select name="aiMisuse" value={formData.aiMisuse} onChange={handleChange} style={styles.input}>
            <option value="">None / Not Applicable</option>
            <option>Deepfake (Video/Image)</option>
            <option>Voice Cloning</option>
            <option>Mass Disinformation Bot Activity</option>
            <option>Other</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Web3 Scam Type:</label>
          <select name="web3ScamType" value={formData.web3ScamType} onChange={handleChange} style={styles.input}>
            <option value="">None / Not Applicable</option>
            <option>Rug Pull or Exit Scam</option>
            <option>Fake Airdrop / Phishing</option>
            <option>MEV Exploit</option>
            <option>Malicious Token or DApp</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Cyber Threat Description:</label>
          <textarea
            name="cyberThreatDescription"
            value={formData.cyberThreatDescription}
            onChange={handleChange}
            placeholder="Describe the incident (e.g., DDoS, tampering, conflict zone breach)..."
            style={styles.textarea}
          />
        </div>

        <div style={styles.field}>
          <label>Affected Entities (optional):</label>
          <input
            name="affectedEntities"
            type="text"
            value={formData.affectedEntities}
            onChange={handleChange}
            style={styles.input}
            placeholder="Company, country, protocol, person, etc."
          />
        </div>

        <div style={styles.field}>
          <label>Suggested Action / Proposal:</label>
          <textarea
            name="proposedAction"
            value={formData.proposedAction}
            onChange={handleChange}
            placeholder="Propose a DAO vote, blacklist address, publish a warning, etc."
            style={styles.textarea}
          />
        </div>

        <div style={styles.field}>
          <label>Additional Notes:</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any links, logs, or further context..."
            style={styles.textarea}
          />
        </div>

        <div style={styles.field}>
          <label>Attach Screenshot (optional):</label>
          <input
            type="file"
            accept="image/*"
            name="screenshot"
            onChange={handleFileChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Submit Signal</button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    marginTop: "30px"
  } as const,

  title: {
    fontSize: "32px",
    textAlign: "center" as const,
    marginBottom: "10px"
  },

  subtitle: {
    textAlign: "center" as const,
    marginBottom: "30px",
    color: "#555"
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px"
  },

  field: {
    display: "flex",
    flexDirection: "column" as const
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },

  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "100px"
  },

  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  separator: {
    margin: "30px 0",
    borderTop: "1px solid #ccc"
  }
};

export default SignalReportPage;
