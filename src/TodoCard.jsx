import React, { useState } from "react";

export default function ProfileCard() {
  // ✅ SAFE: initializer function runs once only
  const [now] = useState(() => Date.now());

  const profile = {
    name: "lyon Ephraim",
    bio: "Frontend developer passionate about building accessible and responsive user interfaces.",
    avatar:
      "https://i.ibb.co/pv9DQ4Z3/image-2.jpg",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    hobbies: ["Coding", "Design", "Reading", "Gaming"],
    dislikes: ["Slow websites", "Cluttered UI", "Spam emails"],
  };

  return (
    <article data-testid="test-profile-card" style={styles.card}>
      
      {/* AVATAR */}
      <figure style={styles.figure}>
        <img
          data-testid="test-user-avatar"
          src={profile.avatar}
          alt={`${profile.name} avatar`}
          style={styles.avatar}
        />
      </figure>

      {/* NAME + BIO */}
      <header style={styles.header}>
        <h2 data-testid="test-user-name" style={styles.name}>
          {profile.name}
        </h2>

        <p data-testid="test-user-bio" style={styles.bio}>
          {profile.bio}
        </p>

        {/* STATIC TIME (TEST SAFE) */}
        <div data-testid="test-user-time" style={styles.time}>
          {now}
        </div>
      </header>

      {/* SOCIAL LINKS */}
      <nav data-testid="test-user-social-links" style={styles.socials}>
        <a
          href={profile.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="test-user-social-twitter"
        >
          Twitter
        </a>

        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="test-user-social-github"
        >
          GitHub
        </a>

        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="test-user-social-linkedin"
        >
          LinkedIn
        </a>
      </nav>

      {/* HOBBIES */}
      <section>
        <h3>Hobbies</h3>
        <ul data-testid="test-user-hobbies" style={styles.list}>
          {profile.hobbies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* DISLIKES */}
      <section>
        <h3>Dislikes</h3>
        <ul data-testid="test-user-dislikes" style={styles.list}>
          {profile.dislikes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

// ---------------- STYLES ----------------
const styles = {
  card: {
    maxWidth: 520,
    margin: "30px auto",
    padding: 20,
    borderRadius: 18,
    background: "linear-gradient(135deg, #fdfbff, #eef2ff)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  figure: {
    display: "flex",
    justifyContent: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #6366f1",
  },

  header: {
    textAlign: "center",
  },

  name: {
    margin: 0,
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
  },

  bio: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 6,
  },

  time: {
    marginTop: 10,
    fontSize: 12,
    color: "#6366f1",
    fontWeight: 600,
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  list: {
    paddingLeft: 18,
    color: "#374151",
  },
};