import React from "react";
import Header from "./Header/index";
import CouponCard from "./CouponCard/index";
import { LeftContainerProps } from "./types";

const styles = {
  leftContainer: {
    padding: '20px',
    marginRight: '20px',
  },
  couponContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
};

export const LeftContainer: React.FC<LeftContainerProps> = (props) => {
  const { logo, companyName, lastUpdate, coupons } = props;

  return (
    <div style={styles.leftContainer}>
      <Header 
        logo={logo} 
        title={companyName} 
        lastUpdate={lastUpdate} 
      />
      
      <div style={styles.couponContainer}>
        {coupons.map((coupon, index) => (
          <CouponCard key={index} {...coupon} />
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
