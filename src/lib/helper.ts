export const formatPrice = (priceInCents: number) => {
  const price = (priceInCents / 100).toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return price;
};
