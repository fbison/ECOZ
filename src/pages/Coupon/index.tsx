import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CouponBlock from "../../components/CouponBlock";
import { useLocation } from 'react-router-dom';

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Coupon = () => {
  const location = useLocation();
  const parametro = location.state;
  return (
    <Container>
      <ScrollToTop />
      // Adicionar coupon aqui e liberação do cashback
    </Container>
  );
}
export default Coupon;
