import { CouponCardProps } from '../CouponPage/LeftContainer/CouponCard/types';
export interface Company {
  image: string;
  imageAlt: string;
  caption: string;
  title: string;
  subtitle: string;

  // Dados adicionais para LeftContainer
  coupons: CouponCardProps[]; // lista de cupons para o LeftContainer
  logo: string; // logo da empresa
  companyName: string; // nome da empresa
  lastUpdate: string; // data da última atualização dos cupons

  // Dados adicionais para RightContainer
  cashbackPercentage: number; // percentual de cashback
  discountCount: number; // contagem de descontos
  offerCount: number; // contagem de ofertas
  totalDiscount: number; // desconto total oferecido
  bestDiscount: number; // melhor desconto disponível
}


export interface CompanyGridProps {
  companies: Company[];
}