(function(){
    let num1=document.getElementById('input1');
    let num2=document.getElementById('input2');
    let answer=document.getElementById('answer');
    
let add=document.getElementById('add');
let sub=document.getElementById('sub');
let multiply=document.getElementById('multiply');
let div=document.getElementById('div');
let clr=document.getElementById('clr');

add.addEventListener('click',function(){
    if(num1.value===''||num2.value===''){
        confirm("enter a number!!");    
    }else{
    let result=parseInt(num1.value)+parseInt(num2.value);
    answer.innerText='The sum is : '+ result ;
    }
})

sub.addEventListener('click',function(){
    if(num1.value===''||num2.value===''){
    confirm("Enter a number");    
    }else{
    let result=parseInt(num1.value)-parseInt(num2.value);
    answer.innerText='The difference is : ' + result ;
    }
})

multiply.addEventListener('click',function(){
    if(num1.value===''||num2.value===''){
        confirm("Enter a number");    
    }else{
    let result=parseInt(num1.value)*parseInt(num2.value);
    answer.innerText='The product is : ' + result ;
    }
})

div.addEventListener('click',function(){
    if(num1.value===''||num2.value===''){
        confirm("Enter a number");    
    }else{
    let result=parseInt(num1.value)/parseInt(num2.value);
    answer.innerText='The quotient is : ' + result ;
    }
})

num1.addEventListener('click',function(){
    if(num1.value!=''){
        num1.value='';

    }
})
num2.addEventListener('click',function(){
    if(num2.value!=''){
        num2.value='';

    }
})

clr.addEventListener('click',function(){
    num1.value='';
    num2.value='';
    answer.innerText='';
})

var x =window.matchMedia("(max-width:580px)")
change(x);
x.addListener(change);

function change(x){
    if(x.matches){
        add.innerText='+';
        sub.innerText='-';
        multiply.innerText='x';
        div.innerText='/';
    }
}
var y=window.matchMedia("(min-width:580px)")
normal(y);
y.addListener(normal);

function normal(y){
    if(y.matches){
        add.innerText='Add';
        sub.innerText='Subtract';
        multiply.innerText='Multiply';
        div.innerText='Divide';
    }
}
})();