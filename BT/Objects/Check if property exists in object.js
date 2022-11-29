function myFunction(a, b) {
   return b in a;
//   return a.hasOwnProperty(b);
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));
