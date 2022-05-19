// import { avg } from "./Code.mjs";
// let see dynmain import 
console.log('first code of line');
import ('./Code.mjs').then(file=>{
    console.log(file.avg(2,23))
    // console.log(file);
})
// console.log(avg(2,20));
console.log('end of line');