import { useState } from "react";
import jobsData from "../data/JobsData";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(lowerQuery) ||
        job.company.toLowerCase().includes(lowerQuery) ||
        job.location.toLowerCase().includes(lowerQuery)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Jobs</h2>
      <SearchBar onSearch={handleSearch} />

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p style={styles.empty}>No jobs found matching your search.</p>
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
    marginTop: "20px"
  }
};

export default Home;
