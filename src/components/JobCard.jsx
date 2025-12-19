import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSaved(savedJobs.some((j) => j.id === job.id));
  }, [job.id]);

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
    <div
      style={{
        ...styles.card,
        boxShadow: hover
          ? "0 12px 25px rgba(0,0,0,0.12)"
          : "0 6px 15px rgba(0,0,0,0.08)",
        transform: hover ? "translateY(-3px)" : "translateY(0)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.header}>
        <h3 style={styles.title}>{job.title}</h3>
        <span
          style={{ ...styles.badge, backgroundColor: badgeColors[job.type] }}
        >
          {job.type}
        </span>
      </div>

      <p style={styles.company}>{job.company}</p>
      <p style={styles.location}>{job.location}</p>

      <div style={styles.actions}>
        <Link to={`/job/${job.id}`} style={styles.detailsBtn}>
          View Details
        </Link>
        <button onClick={handleSave} style={styles.saveBtn}>
          {saved ? "Saved ✓" : "Save Job"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "12px",
    padding: "18px",
    backgroundColor: "#ffffff",
    marginBottom: "20px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827"
  },
  badge: {
    color: "#fff",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500"
  },
  company: {
    fontSize: "14px",
    color: "#374151",
    marginTop: "6px"
  },
  location: {
    fontSize: "13px",
    color: "#6b7280"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px"
  },
  detailsBtn: {
    textDecoration: "none",
    color: "#4f46e5",
    fontWeight: "500"
  },
  saveBtn: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    transition: "background-color 0.2s"
  }
};

export default JobCard;
