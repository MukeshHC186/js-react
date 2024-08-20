let a=5;
let b=10;
function dummy(x,y){
    return setTimeout(()=>{
    return (x*y);
    },1000);
    }
var value=dummy(a,b)
console.log(value);
