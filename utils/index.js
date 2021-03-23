const convertMoney = (
  money,
  decimalCount = 2,
  decimal = ",",
  thousands = "."
) => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  const negativeSign = money < 0 ? "-" : "";
  let i = parseInt(
    (money = Math.abs(Number(money) || 0).toFixed(decimalCount))
  ).toString();
  let j = i.length > 3 ? i.length % 3 : 0;
  return (
    "R$ " +
    negativeSign +
    (j ? i.substr(0, j) + thousands : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(money - i)
          .toFixed(decimalCount)
          .slice(2)
      : "")
  );
};
export { convertMoney };
