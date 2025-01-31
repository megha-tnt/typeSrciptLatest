//primitive types(string,number,boolean)

const name:string="Megha";
const age:number=10;
const isAdult:boolean=true;
const salary:number=10_000_000;

//array
const arr:number[]=[1,3];
arr.push(33);
const fruits:string[]=[];
fruits.push("apple","orange","banana");

//any
let obj={x:0};// it assumes obj:{x:number}--- so not assign implicit any
obj.x;
//does not geneerate any error
//The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

//noImplicitAny -- used when we don't want any type to be implicitely set as any
function add(num:number):number{
    if(!num)
        return 0;
    return num+=1;
}
add(1);
//TypeScript will infer the function’s return type based on its return statements.


//return promisr
async function getFavourite():Promise<number>{
    return 28;
}

//anonymous types--This process is called contextual typing because the context
// that the function occurred within informs what type it should have.
const names=['Alice','Denim','Jack'];
names.forEach((name)=>console.log(name.toUpperCase()));

names.forEach(function(name){
    console.log(name.toLowerCase());
})

//Object
function printCoordinates(pt:{value1:number;value2:number;value3?:number}){
    console.log("The coordinates are ",pt.value1,pt.value2,pt?.value3);
}
printCoordinates({value1:10,value2:20});


//