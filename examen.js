Promise.resolve().then(function(){console.log("“Hola”")})
console.log("“Mundo”");

function Foo(){ 
    console.log("hola foo");
}
function Bar(){ 
    console.log("hola bar");
}
// Foo();
// Bar();
let bar1 = new Bar();
console.log(bar1);
console.log(Foo.prototype);
console.log(Bar.prototype);

Bar.prototype = new Foo();

console.log(Bar.prototype);
// Bar();
console.log(bar1);

let bar2 = new Bar();
console.log(bar2);

console.log([...Array(22).keys()]);
console.log(Array.from({length: 22}, (x, i) => i + 1));