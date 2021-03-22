var prev = 0;
var current = 0;
var operator = null;
var output = document.querySelector("#output"); // Promenljiva koja prikazuje vrednost u INPUT polju

let numberButtons = document.querySelectorAll('.buttonNum');
for (let btn of numberButtons) 
{
    btn.addEventListener('click', number);
}
function number(e)
{
    let val = e.target.value;
    document.getElementById("output").value += val;
    console.log("Broj na koj ste kliknuli je: " + val);   
}

function calculate(operator, a, b)
{
    /*current = 1+4;
    document.getElementById("output").value = current;
    console.log("Click");*/

    if(operator === "+")
    {
        console.log("PLUSCINA SINE " + operator);
        output.value = "";
        return a + b;
    }
    else if(operator === "-")
    {
        console.log("Minuscina CALE " + operator);
        return a - b;
    }
    else if(operator === "*")
    {
        console.log("Mnozeotina KEVO " + operator);
        return a * b;

    }
    else if(operator === "/")
    {
        console.log("Deljencina CERKO " + operator);
        return a / b;
    }
}


//document.getElementById("equal").addEventListener("click",apply);
let operatorBtns = document.querySelectorAll(".operator");
for (let btn of operatorBtns)
{
    btn.addEventListener("click", apply);
}
function apply(e)
{

    let current = parseFloat(output.value); // Trenutna vrednost na koju smo kliknuli
    console.log("Ovo je trenutna vrednost: " + current);

    if (operator) // Ako postoji operator, u prvom koraku ne postoji jer je NULL, jer prvo ide broj pa onda operator
    {
        // 10 + 5
        // prev = 10
        // current = 5
        // operacija = '+'
        // izvrsi('+', 10, 5) -> 15
        prev = calculate(operator, prev, current);
        output.value = prev;
        console.log("Ovo je vrednost koju si dobio " + output.value)
    }
    else 
    {
        prev = current;
        output.value = "";
    }
    let nextOperator = e.target.value;
    operator = nextOperator
}


function clearFunction()
{
    prev = 0;
    current = 0;
    document.getElementById("output").value = "";
}

