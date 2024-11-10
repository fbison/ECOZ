import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import CouponGrid from "../CouponGrid";

const coupons = [
  {
    image: "/img/logos/Patagonia_logo.svg",
    imageAlt: "Logo Patagonia",
    caption: "Patagonia",
    title: "10% cashback",
    subtitle: "era 5% • 12 cupons",
  },
  {
    image: "/img/logos/Ikea_logo.svg",
    imageAlt: "Logo Ikea",
    caption: "Ikea",
    title: "até 7% cashback",
    subtitle: "era 3% • 20 cupons",
  },
  {
    image: "/img/logos/Unilever_logo.svg",
    imageAlt: "Logo Unilever",
    caption: "Unilever",
    title: "4% cashback",
    subtitle: "era 2% • 15 cupons",
  },
  {
    image: "/img/logos/Seventh_Generation_logo.svg",
    imageAlt: "Logo Seventh Generation",
    caption: "Seventh Generation",
    title: "6% cashback",
    subtitle: "era 3% • 8 cupons",
  },
  {
    image: "/img/logos/Tesla_logo.svg",
    imageAlt: "Logo Tesla",
    caption: "Tesla",
    title: "2% cashback",
    subtitle: "era 1% • 5 cupons",
  },
  {
    image: "/img/logos/Apple_logo.svg",
    imageAlt: "Logo Apple",
    caption: "Apple",
    title: "5% cashback",
    subtitle: "era 2% • 25 cupons",
  },
  {
    image: "/img/logos/Natura_logo.svg",
    imageAlt: "Logo Natura",
    caption: "Natura",
    title: "8% cashback",
    subtitle: "era 4% • 10 cupons",
  },
  {
    image: "/img/logos/Method_logo.svg",
    imageAlt: "Logo Method",
    caption: "Method",
    title: "6% cashback",
    subtitle: "era 3% • 9 cupons",
  },
  {
    image: "/img/logos/Allbirds_logo.svg",
    imageAlt: "Logo Allbirds",
    caption: "Allbirds",
    title: "7% cashback",
    subtitle: "era 3% • 14 cupons",
  },
  {
    image: "/img/logos/Danone_logo.svg",
    imageAlt: "Logo Danone",
    caption: "Danone",
    title: "3% cashback",
    subtitle: "era 1% • 18 cupons",
  },
  {
    image: "/img/logos/Insider_logo.svg",
    imageAlt: "Logo Insider",
    caption: "Insider",
    title: "10% cashback",
    subtitle: "era 5% • 22 cupons",
  },
];

const CouponBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
              <CouponGrid coupons={coupons} />
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(CouponBlock);
