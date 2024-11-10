// CouponCard.tsx
import React from "react";
import styled from "styled-components";
import CouponCard from "../CouponCard";
import {
  GridContainer
} from "./styles";
import {
  CouponGridProps
} from "./types";

const CouponGrid: React.FC<CouponGridProps> = ({ coupons }) => (
  <GridContainer>
    {coupons.map((coupon, index) => (
      <CouponCard
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

export default CouponGrid;

