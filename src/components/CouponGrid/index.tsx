// CouponCard.tsx
import React from "react";
import styled from "styled-components";
import CouponCard from "../CouponCard";
import { GridContainer } from "./styles";
import { Coupon, CouponGridProps } from "./types";
import routes from "../../router/config";
import { useHistory } from 'react-router-dom';

const CouponGrid: React.FC<CouponGridProps> = ({ coupons }) => {
  const history = useHistory();

  const handleNavigation = (coupon: Coupon) => {
    history.push('/coupon', { state: { coupon } }); // Navegação com o objeto coupon
  };

  return (
    <GridContainer>
      {coupons.map((coupon, index) => (
        <CouponCard
          onClick={() => handleNavigation(coupon)}
          key={index}
          image={coupon.image}
          imageAlt={coupon.imageAlt}
          caption={coupon.caption}
          title={coupon.title}
          subtitle={coupon.subtitle}
        />
      ))}
    </GridContainer>
  );
};

export default CouponGrid;
