function myFunction(a = "", b = "") {
  //   if (a.includes(b)) return b + a;
  //   return a + b;
  return a.indexOf(b) === -1 ? a + b : b + a;
}
