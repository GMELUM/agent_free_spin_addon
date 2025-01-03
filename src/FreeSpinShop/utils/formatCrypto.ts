function formatCrypto(num: number): string {
  const cryptoValue = num / 1e9;
  let [integerPart, decimalPart] = cryptoValue.toFixed(9).split(".");

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (decimalPart) {
    decimalPart = decimalPart.replace(/0+$/, "");

    if (!decimalPart) {
      return integerPart;
    }

    return `${integerPart},${decimalPart}`;
  }

  return integerPart;
}

export default formatCrypto;
