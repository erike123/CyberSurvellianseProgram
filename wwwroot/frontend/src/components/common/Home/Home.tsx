import React from "react";
import { useNavigate } from "react-router-dom";
import Path from "../../../Paths";

const Home = () => {
  const navigate = useNavigate();

  const aiThreats = [
    {
      title: "Deepfake / AI-Generated Deceptive Content",
      subtitle: "High-impact, manipulative emerging threats",
      description:
        "Hard to detect automatically. Requires human validation. DAO can shine here.",
      use: "Used for building ethical analysis datasets and AI detection models.",
      image: "/images/deepfake.png",
    },
    {
      title: "AI Sycophancy",
      subtitle: "Excessive flattery or emotional manipulation by AI",
      description:
        "AI systems echoing beliefs to manipulate. Politically and socially impactful.",
      use: "Used to monitor narrative shaping and coordinated disinformation.",
      image: "/images/sycophancy.png",
    },
    {
      title: "General AI Threats",
      subtitle: "AI-assisted impersonation, spam, manipulation",
      description:
        "Broad threats that include social engineering and misinformation.",
      use: "Helps develop AI safety policies and detection algorithms.",
      image: "/images/ai-threats.png",
    },
  ];

  const socialThreats = [
    {
      title: "Online Repression & Censorship",
      subtitle: "Government abuse, surveillance, VPN blocking",
      description:
        "Critical in conflict zones. Hard to detect automatically — human signal is key.",
      use: "Used in humanitarian monitoring feeds and collaborations.",
      image: "/images/repression.png",
    },
    {
      title: "Phishing / Malicious Sites",
      subtitle: "Fake login portals, malicious URLs, impersonation",
      description:
        "Easy for users to recognize and report. Can be automated with threat lists.",
      use: "Feeds blacklists, protects users in real time.",
      image: "CyberSurvellianseProgram-master/public/images/repression.png",
    },
    {
      title: "Abuse of Personal Data / Biometrics",
      subtitle: "Unethical tracking, leaks, or misuse",
      description:
        "Reported by whistleblowers, insiders, or affected users.",
      use: "Supports compliance alerts, ethical reviews, and DLP strategies.",
      image: "/images/privacy.png",
    },
    {
      title: "Bank Theft & Malicious Transactions",
      subtitle: "Fraudulent transfers, wallet drains, and laundering",
      description:
        "Users can report suspicious crypto or fiat transactions involving known actors.",
      use: "Enables blacklist proposals, exchange alerts, and risk modeling.",
      image: "/images/bank-fraud.png",
    },
  ];

  const renderCategory = (cat: any) => (
    <div
      key={cat.title}
      style={{
        backgroundColor: "#1e1e2f",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      <img
        src={cat.image}
        alt={cat.title}
        style={{ width: "120px", height: "120px", borderRadius: "8px", objectFit: "cover" }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 10px", color: "#66ccff" }}>{cat.title}</h3>
        <p style={{ margin: "0", fontWeight: "bold", color: "#aaa" }}>{cat.subtitle}</p>
        <p style={{ margin: "5px 0", color: "#ccc" }}>{cat.description}</p>
        <p style={{ margin: "5px 0", fontStyle: "italic", color: "#888" }}>{cat.use}</p>
        <button
          onClick={() => navigate(Path.SignalReportPage)}
          style={{
            marginTop: "10px",
            padding: "10px 16px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit Signal
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "2rem", backgroundColor: "#0b0c10", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>CyberSurveillance Dashboard</h1>

      <h2 style={{ fontSize: "1.5rem", color: "#61dafb" }}>AI Threat Intelligence</h2>
      {aiThreats.map(renderCategory)}

      <h2 style={{ fontSize: "1.5rem", color: "#61dafb", marginTop: "2rem" }}>Social & Privacy Threats</h2>
      {socialThreats.map(renderCategory)}
    </div>
  );
};

export default Home;
