
// celsius CONVERTER:
function convert(){
    const celVal=Number(document.getElementById("number").value);
    const farenVal =(9/5)*celVal + 32;
    const result=document.getElementById("result");
    result.innerHTML= farenVal.toFixed(2) + " " +"farenheit";
}
