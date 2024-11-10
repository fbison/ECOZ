import { lazy } from "react";
import { useLocation } from "react-router-dom";
import LeftContainer from "../../components/CouponPage/LeftContainer";
import RightContainer from "../../components/CouponPage/RightContainer/index";
import { Company } from "../../components/CouponGrid/types"; // Tipo Company caso você já tenha definido

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Coupon = () => {
  const location = useLocation<{ coupon: Company }>();
  const parametro = location.state.coupon  as Company; // Company vem como parâmetro da rota
  console.log("parametro:", parametro);
  console.log("parametro:", parametro.bestDiscount);

  return (
    <Container>
      <ScrollToTop />

      {parametro ? (
      <>
        <LeftContainer 
          coupons={parametro.coupons}
          logo={parametro.logo}
          companyName={parametro.companyName}
          lastUpdate={parametro.lastUpdate}
        />
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
      </>
    ) : (
      <p>Loading...</p> // ou qualquer outro fallback
    )}
    </Container>
  );
};

export default Coupon;
