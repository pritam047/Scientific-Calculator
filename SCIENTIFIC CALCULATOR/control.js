flag = 0;
function shift(ken) 
{
    var shift = document.getElementById("deg") ;
    var arr = document.getElementsByTagName("button") ;
    if (ken == 1) 
    {
        shift.setAttribute("onclick", "shift(0)") ;
        shift.setAttribute("value", "rad") ;
        shift.style.backgroundColor = " #d9ff66" ;
        arr[0].innerHTML = "rad" ;
    }
    else
    {
        shift.setAttribute("onclick", "shift(1)") ;
        shift.setAttribute("value", "deg") ;
        shift.style.backgroundColor = "#ff8c66" ;
        arr[0].innerHTML = "deg" ;
    }
}
function input(sun) {
    calculator.answer.value+=sun;
}
function pow()
{
    flag+=1;
    calculator.answer.value+='Math.pow(';
}
function abs()
{
    calculator.answer.value=Math.abs(calculator.answer.value);
}
function sqr(n)
{
return n*n;
}
function sqrc(n)
{
    flag+=1;
    calculator.answer.value+='sqr(';
}
function sqrt()
{
    flag+=1;
    calculator.answer.value+='Math.sqrt(';
}
function log()
{
    flag+=1;
    calculator.answer.value+='0.434*Math.log(';
}
function ln()
{
    flag+=1;
    calculator.answer.value+='Math.log(';
}
function exp()
{
    flag+=1;
    calculator.answer.value+='Math.exp(';   
}
function pie()
{
    calculator.answer.value+=Math.PI;
}
function tenx()
{
    flag+=1;
    calculator.answer.value+='Math.pow(10,';
}

function inv()
{
    calculator.answer.value=(1/calculator.answer.value);
}
function bsin()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.sin(0.0175*';
    else
    calculator.answer.value+='Math.sin(';
}
function bcos()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.cos(0.0175*';
    else
    calculator.answer.value+='Math.cos(';
}
function btan()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.tan(0.0175*';
    else
    calculator.answer.value+='Math.tan(';
}
function asin()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.asin(0.0175*';
    else
    calculator.answer.value+='Math.asin(';
}
function acos()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.acos(0.0175*';
    else
    calculator.answer.value+='Math.acos(';
}
function atan()
{
    flag+=1;
    if(calculator.b.value=="deg")
    calculator.answer.value+='Math.atan(0.0175*';
    else
    calculator.answer.value+='Math.atan(';
}

function fact(x)
{
factvar=1;
for (i=1;i<=x;i++)
{
factvar=factvar*i;
}
return factvar;
}
function fact_function(x)
{
flag+=1;
calculator.answer.value+='fact(';
}

function openpara()
{
calculator.answer.value+="(";
flag+=1;
}
function closepara()
{
calculator.answer.value+=")";
flag-=1;
}

function del()
{

}
function backspace(calculator)
{
var size = calculator.answer.value.length;
calculator.answer.value=calculator.answer.value.substring(0,size-1);
}
function CE() 
{
    calculator.answer.value="";
}
function equals(calculator)
{
    n = calculator.answer.value;
    var size = calculator.answer.value.length;
    var lastchar = calculator.answer.value.charAt(size-1);
    if(isNaN(lastchar) && lastchar!=")")   
    {
        calculator.answer.value="syntax error";
    }
    else if(flag!=0)
    {
        calculator.answer.value="error:paranthesis";
    }
    else 
    {
    result=eval(n);
    calculator.answer.value=result;
    }
}