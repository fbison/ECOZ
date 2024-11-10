import { lazy } from "react";
import { useLocation } from "react-router-dom";
import LeftContainer from "../../components/CouponPage/LeftContainer";
import RightContainer from "../../components/CouponPage/RightContainer/index";
import { Company } from "../../components/CouponGrid/types"; // Tipo Company caso você já tenha definido

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Coupon = () => {
  const location = useLocation();
  const parametro = location.state as Company; // Company vem como parâmetro da rota
  console.log("parametro:", parametro);

  return (
    <Container>
      <ScrollToTop />

      <LeftContainer 
              coupons={parametro.coupons}
              logo={parametro.logo}
              companyName= {parametro.companyName}
              lastUpdate={parametro.lastUpdate}  />

      <RightContainer 
        cashbackInfo={{
          percentage: parametro.cashbackPercentage,
          message: "Ative seu cashback para economizar nas compras!",
        }}
        companyInfo={{
          discountCount: parametro.discountCount,
          offerCount: parametro.offerCount,
          totalDiscount: parametro.totalDiscount,
          bestDiscount: parametro.bestDiscount,
        }}
      />
    </Container>
  );
};

export default Coupon;
