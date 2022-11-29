function myFunction(a = 0) {
  //   return a.toString()
  //   .split("")
  //   .map(n => parseInt(n));
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

