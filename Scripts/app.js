//"use strict"

(function(){      //auto excuate function because it is anonymous Function
    //IIFE   Immediately Invoked Function Expression
let myFunctionVariable = 0;


let Start=function(){//better way to do in this way

    let startVariable = 0;
    let myFunctionVariable = 5;
   // myFunctionVariable="Tom";   //this is not healthy
    window.console.log(`%cApp Started...${myFunctionVariable}`,"font-size:20px;color:blue",);//or use console.info
}
window.addEventListener("load",Start);



})();






//window.addEventListener("load",())

//git init
//git add .
//git commit -m "First commit"
