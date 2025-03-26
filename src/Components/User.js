import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get(`https://api.github.com/users/${id}`, {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     });
  //     setUser(res.data);
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  const fetchUser = async () => {
    const res = await axios.get(`https://api.github.com/users/${id}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    setUser(res.data);
    setLoading(false);
  };

  if (loading) {
    return <h2 style={styles.loadingText}>Loading...</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img src={user?.avatar_url} alt={user?.login} style={styles.avatar} />
        <div style={styles.userInfo}>
          <h2 style={styles.name}>{user?.name || "No Name"}</h2>
          <p style={styles.username}>@{user?.login}</p>
          <p style={styles.bio}>{user?.bio || "No bio available."}</p>
          <p style={styles.location}> {user?.location || "N/A"}</p>
      
        </div>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <p style={styles.statNumber}>{user?.followers}</p>
          <p>Followers</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statNumber}>{user?.following}</p>
          <p>Following</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statNumber}>{user?.public_repos}</p>
          <p>Public Repositories </p>
        </div>
      </div>

      
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#1e1e2e",
    color: "#f8f8f8",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    background: "#2a2a3a",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "700px",
    transition: "transform 0.3s",
  },
  avatar: {
    width: "140px",
    borderRadius: "50%",
    marginRight: "20px",
    border: "4px solid #ff9800",
  },
  userInfo: {
    textAlign: "left",
  },
  name: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#ff9800",
  },
  username: {
    color: "#bbb",
    fontSize: "16px",
    marginBottom: "10px",
  },
  bio: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  location: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  link: {
    color: "#ff9800",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    background: "#2a2a3a",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    width: "90%",
    maxWidth: "700px",
  },
  statBox: {
    textAlign: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#ff9800",
  },
  button: {
    marginTop: "25px",
    padding: "14px 24px",
    background: "#ff9800",
    borderRadius: "8px",
    color: "#1e1e2e",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },
  loadingText: {
    color: "#f8f8f8",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default UserProfile;
