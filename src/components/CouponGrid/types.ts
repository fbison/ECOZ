export interface Coupon {
  image: string;
  imageAlt: string;
  caption: string;
  title: string;
  subtitle: string;
}

export interface CouponGridProps {
  coupons: Coupon[];
}