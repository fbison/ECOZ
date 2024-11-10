// CouponCard.tsx
import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  CardImage,
  CardCaption,
  CardTitle,
  CardSubtitle
} from "./styles";
import {
  CouponCardProps
} from "./types";

const CouponCard: React.FC<CouponCardProps> = ({
  image,
  imageAlt,
  caption,
  title,
  subtitle,
}) => (
  <CardContainer>
    <CardImage src={image} alt={imageAlt} />
    <CardCaption>{caption}</CardCaption>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);

export default CouponCard;
