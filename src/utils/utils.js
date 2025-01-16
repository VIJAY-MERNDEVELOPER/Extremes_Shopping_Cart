export const discountedPrice = (price, discount) => {
  return Number(price) - Math.round(Number(price) * (Number(discount) / 100));
};
