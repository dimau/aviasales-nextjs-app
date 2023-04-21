const currencyMap: {[key: string]: string} = {
  "RUB": "₽",
  "EUR": "€",
  "USD": "$",
}

function getCurrencySignFromString(str: string): string {
  if (!currencyMap[str]) {
    // TODO: logging
    console.log("Error when converting currency to sign: " + str);
  }

  return currencyMap[str];
}

function sumPrettier(sum: number): string {
  let res = "";
  const sourceStr = String(sum);

  let counter = 0;
  for (let i = sourceStr.length - 1; i >= 0; i--) {
    if (counter !== 0 && counter % 3 === 0) res = " " + res;
    res = sourceStr[i] + res;
    counter++;
  }

  return res;
}

export { getCurrencySignFromString, sumPrettier };