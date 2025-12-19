import { NavLink } from "react-router-dom";
import jobsData from "../data/JobsData";

const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={{ color: "#4f46e5" }}>Job</span>Portal
      </div>

      <nav style={styles.navLinks}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Jobs
          <span style={styles.badge}>{jobsData.length}</span>
        </NavLink>

        <NavLink
          to="/saved"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Saved Jobs
        </NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    cursor: "pointer"
  },
  navLinks: {
    display: "flex",
    gap: "25px",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "#374151",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.2s",
  },
  activeLink: {
    textDecoration: "none",
    color: "#4f46e5",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    borderBottom: "2px solid #4f46e5",
    paddingBottom: "2px"
  },
  badge: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500"
  }
};

export default Navbar;
