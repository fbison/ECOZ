import React from "react";
import { HeaderProps } from "./types";
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
  },
  lastUpdate: {
    fontSize: '0.9rem',
  },
};

const Header: React.FC<HeaderProps> = ({ logo, title, lastUpdate }) => {
  return (
    <div style={styles.header}>
      <img src={logo} alt={`${title} logo`} style={styles.logo} />
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.lastUpdate}>Atualizado em {lastUpdate}</p>
    </div>
  );
};

export default Header;
