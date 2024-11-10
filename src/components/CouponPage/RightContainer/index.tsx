import React from 'react';
import { RightContainerProps } from './types';
const styles = {
  rightContainer: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  cashbackContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  cashbackButton: {
    backgroundColor: '#d32f2f',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
  },
  cashbackMessage: {
    padding: '10px',
    fontSize: '0.9rem',
  },
  companyInfo: {
    padding: '10px',
    fontSize: '0.9rem',
  },
};

const RightContainer: React.FC<RightContainerProps> = ({ cashbackInfo, companyInfo }) => (
  <div style={styles.rightContainer}>
    <div style={styles.cashbackContainer}>
      <button style={styles.cashbackButton}>Ativar {cashbackInfo.percentage}% de cashback</button>
      <p style={styles.cashbackMessage}>{cashbackInfo.message}</p>
    </div>
    <div style={styles.companyInfo}>
      <p>{companyInfo.totalDiscount}</p>
    </div>
  </div>
);

export default RightContainer;
