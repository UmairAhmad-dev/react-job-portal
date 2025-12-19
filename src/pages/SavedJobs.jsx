import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  const handleRemove = (id) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p style={styles.empty}>You haven’t saved any jobs yet.</p>
      ) : (
        savedJobs.map((job) => (
          <div key={job.id} style={styles.jobWrapper}>
            <JobCard job={job} />
            <button
              style={styles.removeBtn}
              onClick={() => handleRemove(job.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#f9fafb",
    minHeight: "100vh"
  },
  heading: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827"
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "15px",
    marginTop: "30px"
  },
  jobWrapper: {
    position: "relative",
    marginBottom: "20px"
  },
  removeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default SavedJobs;
