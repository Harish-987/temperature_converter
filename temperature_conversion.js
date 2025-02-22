const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const  remark=document.getElementById("remark");

let temp;
function convert()
{
    if(toFahrenheit.checked)
    {
        temp=Number(textbox.value);
        temp=temp*(9/5) +32; 
        remark.textContent=temp.toFixed(2) +"\u00B0F";

    }
    else if(toCelsius.checked) 
    {
        temp=Number(textbox.value);
        temp=(5/9)*(temp-32);
        remark.textContent=temp.toFixed(2) +"\u00B0C";
    }
    else
    {
        remark.textContent="select a unit";
    }

}
