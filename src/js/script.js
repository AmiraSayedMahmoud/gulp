var res=document.getElementById('res');
var addButton=document.getElementById('add_button')
// import{ res } from "./var";
// import {addButton} from "./var"
addButton.addEventListener('click', Calculator);
 function Calculator(){
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var opp = document.getElementById('operator').value;
    var add = Number(number1)+Number(number2);
    if (opp == 'add1' &&isNaN(number1)&& isNaN(number2)){
        res.innerText = add;
        alert("Please Enter Number only");
     }
   else{
    alert("Done");
   }
    }
