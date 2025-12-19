import { useParams, useNavigate } from "react-router-dom";
import jobsData from "../data/JobsData";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.id === Number(id));

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSaved(savedJobs.some((j) => j.id === Number(id)));
  }, [id]);

  if (!job) return <h2 style={styles.notFound}>Job not found</h2>;

  const handleSave = () => {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    if (saved) {
      savedJobs = savedJobs.filter((j) => j.id !== job.id);
    } else {
      savedJobs.push(job);
    }
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    setSaved(!saved);
  };

  const badgeColors = {
    "Full-time": "#4f46e5",
    "Part-time": "#10b981",
    Internship: "#8b5cf6",
    Contract: "#f97316"
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div style={styles.header}>
        <h2 style={styles.title}>{job.title}</h2>
        <span style={{ ...styles.badge, backgroundColor: badgeColors[job.type] }}>
          {job.type}
        </span>
      </div>

      <p style={styles.company}>{job.company}</p>
      <p style={styles.location}>{job.location}</p>

      <div style={styles.description}>
        <h3 style={{ marginBottom: "10px" }}>Job Description:</h3>
        <p>{job.description}</p>
      </div>

      <div style={styles.actions}>
        <button style={styles.applyBtn}>Apply Now</button>
        <button style={styles.saveBtn} onClick={handleSave}>
          {saved ? "Saved ✓" : "Save Job"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9fafb",
    minHeight: "100vh"
  },
  backBtn: {
    backgroundColor: "#e5e7eb",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111827"
  },
  badge: {
    color: "#fff",
    padding: "5px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "500"
  },
  company: {
    fontSize: "16px",
    color: "#374151",
    marginBottom: "2px"
  },
  location: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px"
  },
  description: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.06)"
  },
  actions: {
    display: "flex",
    gap: "15px"
  },
  applyBtn: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: "10px 24px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "500"
  },
  saveBtn: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    padding: "10px 24px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "500"
  },
  notFound: {
    textAlign: "center",
    marginTop: "50px",
    color: "#ef4444"
  }
};

export default JobDetails;
