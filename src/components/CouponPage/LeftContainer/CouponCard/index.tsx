import React from 'react';
import { CouponCardProps } from './types';

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  discount: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
  },
  details: {
    display: 'flex',
    flexDirection: 'column' as const,
    flexGrow: 1,
    marginLeft: '15px',
  },
  couponButton: {
    position: 'relative' as const,
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    overflow: 'hidden' as const,
    fontWeight: 'bold' as const,
    transition: 'box-shadow 0.3s',
  },
  couponButtonHover: {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
  hiddenCode: {
    position: 'absolute' as const,
    opacity: 0,
    fontSize: 0,
  },
};

const CouponCard: React.FC<CouponCardProps> = ({ discount, title, subtitle, code }) => (
  <div style={styles.card}>
    <div style={styles.discount}>{discount}% CUPOM</div>
    <div style={styles.details}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button style={styles.couponButton}>
        <span style={styles.hiddenCode}>{code}</span>
        Ver cupom
      </button>
    </div>
  </div>
);

export default CouponCard;
