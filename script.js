function changeColor(){
var hdrelement1=document.getElementById("hdr1");
 hdrelement1.innerHTML = "Programming Foundations";
  var divelement1=document.getElementById("div1");
  divelement1.style.text="Duke University - Programming Foundations";
  divelement1.style.border="double";
  divelement1.style.backgroundColor="black";
  divelement1.style.fontSize="25px";
  divelement1.style.fontFamily="Verdana";
  divelement1.style.textAlign="center";
  divelement1.style.padding="2em 2em 2em 3em";  
var divelement2 = document.getElementById("div2"); 
  
  divelement2.className = "greenback";
  divelement2.innerHTML = "Result";
    var button = document.getElementById("mybutton");
  button.value="Result Webpage";
}