function myFunction(a, b) {
    return Boolean(a[b]);
}

console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
console.log(myFunction({x:'a',b:'b',z:undefined},'z'));