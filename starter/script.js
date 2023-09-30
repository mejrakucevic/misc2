document.getElementById("submitBtn").onclick = function() {
   let temp;

   if(document.getElementById("cButton").checked){
      temp = document.getElementById("textBox").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + "C";

   } else if (document.getElementById("fButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahr(temp);
    document.getElementById("tempLabel").innerHTML = temp + "F";

   } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit"
   }
}


function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahr(temp){
     return temp * 9 / 5 + 32;
}