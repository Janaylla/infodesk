export default function maskMoney(value) {
  return parseFloat(value.toFixed(2)).toLocaleString("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
