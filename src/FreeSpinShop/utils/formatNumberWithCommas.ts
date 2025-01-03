const formatNumberWithCommas = (number: number) => {
  const numStr = String(number);

  const parts = numStr.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] || "";

  let formattedIntegerPart = "";
  for (let i = integerPart.length - 1, count = 0; i >= 0; i--) {
    formattedIntegerPart = integerPart[i] + formattedIntegerPart;
    count++;
    if (count === 3 && i !== 0) {
      formattedIntegerPart = "," + formattedIntegerPart;
      count = 0;
    }
  }

  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
  return formattedNumber;
};

export default formatNumberWithCommas;
