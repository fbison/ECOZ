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
import CouponGrid from "../CouponGrid/index";
import { Company } from "../CouponGrid/types";
const coupons: Company[] = [
  {
    image: "/img/logos/Seventh_Generation_logo.svg",
    imageAlt: "Logo Seventh Generation",
    caption: "Seventh Generation",
    title: "6% cashback",
    subtitle: "era 3% • 8 cupons",
    coupons: [
      {
        discount: 6,
        title: "6% de desconto",
        subtitle: "Para compras acima de R$50",
        code: "7GEN6"
      }
    ],
    logo: "/img/logos/Seventh_Generation_logo.svg",
    companyName: "Seventh Generation",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 6,
    discountCount: 3,
    offerCount: 8,
    totalDiscount: 18,
    bestDiscount: 10
  },
  {
    image: "/img/logos/Patagonia-Logo.png",
    imageAlt: "Logo Patagonia",
    caption: "Patagonia",
    title: "10% cashback",
    subtitle: "era 5% • 12 cupons",
    coupons: [
      {
        discount: 10,
        title: "10% de desconto",
        subtitle: "Use até o fim do mês",
        code: "PATAGONIA10"
      }
    ],
    logo: "/img/logos/Patagonia_logo.svg",
    companyName: "Patagonia",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 10,
    discountCount: 3,
    offerCount: 5,
    totalDiscount: 30,
    bestDiscount: 15
  },
  {
    image: "/img/logos/principia_logo.jpeg",
    imageAlt: "Logo Principia",
    caption: "Principia",
    title: "até 7% cashback",
    subtitle: "era 3% • 20 cupons",
    coupons: [
      {
        discount: 7,
        title: "7% de desconto",
        subtitle: "Válido em todos os produtos",
        code: "IKEASAVE7"
      }
    ],
    logo: "/img/logos/Ikea_logo.svg",
    companyName: "Ikea",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 7,
    discountCount: 5,
    offerCount: 8,
    totalDiscount: 35,
    bestDiscount: 20
  },
  {
    image: "/img/logos/Unilever_logo.svg",
    imageAlt: "Logo Unilever",
    caption: "Unilever",
    title: "4% cashback",
    subtitle: "era 2% • 15 cupons",
    coupons: [
      {
        discount: 4,
        title: "4% de desconto",
        subtitle: "Produtos selecionados",
        code: "UNILEVER4"
      }
    ],
    logo: "/img/logos/Unilever_logo.svg",
    companyName: "Unilever",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 4,
    discountCount: 4,
    offerCount: 7,
    totalDiscount: 28,
    bestDiscount: 10
  },
  {
    image: "/img/logos/Tesla_logo.svg",
    imageAlt: "Logo Tesla",
    caption: "Tesla",
    title: "2% cashback",
    subtitle: "era 1% • 5 cupons",
    coupons: [
      {
        discount: 2,
        title: "2% de desconto",
        subtitle: "Válido para acessórios",
        code: "TESLA2"
      }
    ],
    logo: "/img/logos/Tesla_logo.svg",
    companyName: "Tesla",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 2,
    discountCount: 2,
    offerCount: 5,
    totalDiscount: 10,
    bestDiscount: 5
  },
  {
    image: "/img/logos/Apple_logo.svg",
    imageAlt: "Logo Apple",
    caption: "Apple",
    title: "5% cashback",
    subtitle: "era 2% • 25 cupons",
    coupons: [
      {
        discount: 5,
        title: "5% de desconto",
        subtitle: "Em produtos selecionados",
        code: "APPLE5"
      }
    ],
    logo: "/img/logos/Apple_logo.svg",
    companyName: "Apple",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 5,
    discountCount: 4,
    offerCount: 25,
    totalDiscount: 50,
    bestDiscount: 20
  },
  {
    image: "/img/logos/Natura_logo.svg",
    imageAlt: "Logo Natura",
    caption: "Natura",
    title: "8% cashback",
    subtitle: "era 4% • 10 cupons",
    coupons: [
      {
        discount: 8,
        title: "8% de desconto",
        subtitle: "Na linha Ekos",
        code: "NATURA8"
      }
    ],
    logo: "/img/logos/Natura_logo.svg",
    companyName: "Natura",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 8,
    discountCount: 5,
    offerCount: 10,
    totalDiscount: 40,
    bestDiscount: 15
  },
  {
    image: "/img/logos/boticario_logo.png",
    imageAlt: "Logo Boticario",
    caption: "Boticario",
    title: "6% cashback",
    subtitle: "era 3% • 9 cupons",
    coupons: [
      {
        discount: 6,
        title: "6% de desconto",
        subtitle: "Em todos os produtos",
        code: "METHOD6"
      }
    ],
    logo: "/img/logos/Method_logo.svg",
    companyName: "Method",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 6,
    discountCount: 4,
    offerCount: 9,
    totalDiscount: 24,
    bestDiscount: 12
  },
  {
    image: "/img/logos/allbirds_logo.webp",
    imageAlt: "Logo Allbirds",
    caption: "Allbirds",
    title: "7% cashback",
    subtitle: "era 3% • 14 cupons",
    coupons: [
      {
        discount: 7,
        title: "7% de desconto",
        subtitle: "Calçados sustentáveis",
        code: "ALLBIRDS7"
      }
    ],
    logo: "/img/logos/Allbirds_logo.svg",
    companyName: "Allbirds",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 7,
    discountCount: 3,
    offerCount: 14,
    totalDiscount: 28,
    bestDiscount: 10
  },
  {
    image: "/img/logos/Danone_logo.svg",
    imageAlt: "Logo Danone",
    caption: "Danone",
    title: "3% cashback",
    subtitle: "era 1% • 18 cupons",
    coupons: [
      {
        discount: 3,
        title: "3% de desconto",
        subtitle: "Em produtos lácteos",
        code: "DANONE3"
      }
    ],
    logo: "/img/logos/Danone_logo.svg",
    companyName: "Danone",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 3,
    discountCount: 2,
    offerCount: 18,
    totalDiscount: 20,
    bestDiscount: 5
  },
  {
    image: "/img/logos/Insider_logo.svg",
    imageAlt: "Logo Insider",
    caption: "Insider",
    title: "10% cashback",
    subtitle: "era 5% • 22 cupons",
    coupons: [
      {
        discount: 10,
        title: "10% de desconto",
        subtitle: "Em roupas básicas",
        code: "INSIDER10"
      }
    ],
    logo: "/img/logos/Insider_logo.svg",
    companyName: "Insider",
    lastUpdate: "2024-11-10",
    cashbackPercentage: 10,
    discountCount: 6,
    offerCount: 22,
    totalDiscount: 50,
    bestDiscount: 25
  }
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
              <CouponGrid companies={coupons} />
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(CouponBlock);
