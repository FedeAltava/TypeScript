function sum (a:number | string, b:number | string) :number{
    if(typeof a === 'string') a = parseInt(a,10);
    if (typeof b === 'string') b = parseInt(b,10);
    return a + b;
}

console.log(sum(1,2));
console.log(sum('1','2'));