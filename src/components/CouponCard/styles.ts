import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
`;

export const CardCaption = styled.p`
  font-size: 14px;
  color: #999;
  margin: 4px 0;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const CardSubtitle = styled.p`
  font-size: 16px;
  color: #666;
`;