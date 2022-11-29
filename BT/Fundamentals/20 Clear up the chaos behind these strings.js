function myFunction(a = "", b = "") {
    b = b.split("").reverse().join("");
    a = (a+b).replace("%", "")
    a = a[0].toUpperCase() + a.slice(1);
    return a;
}

console.log(myFunction("java", "tpi%rcs"));