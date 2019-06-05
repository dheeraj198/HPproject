document.getElementById("one").onchange = function () {
  document.getElementById("two").setAttribute("disabled", "disabled");
  if (this.value == "0" )
    document.getElementById("two").removeAttribute("disabled");
};


document.getElementById("A").onchange = function () {

  document.getElementById("B").setAttribute("disabled", "disabled");
   document.getElementById("C").setAttribute("disabled", "disabled");
    document.getElementById("D").setAttribute("disabled", "disabled");
     document.getElementById("E").setAttribute("disabled", "disabled");
     document.getElementById("F").setAttribute("disabled", "disabled");
   document.getElementById("G").setAttribute("disabled", "disabled");
    document.getElementById("H").setAttribute("disabled", "disabled");
     document.getElementById("I").setAttribute("disabled", "disabled");
     document.getElementById("J").setAttribute("disabled", "disabled");
  
  if (this.value == "Yes" )
 {   
 	document.getElementById("B").removeAttribute("disabled");
 	document.getElementById("C").removeAttribute("disabled");
 	document.getElementById("D").removeAttribute("disabled");
 	document.getElementById("E").removeAttribute("disabled");
 	document.getElementById("F").removeAttribute("disabled");
 	document.getElementById("G").removeAttribute("disabled");
 	document.getElementById("H").removeAttribute("disabled");
 	document.getElementById("I").removeAttribute("disabled");
 	document.getElementById("J").removeAttribute("disabled");
}

};

document.getElementById("1").onchange = function () {

  document.getElementById("2").setAttribute("disabled", "disabled");
   document.getElementById("3").setAttribute("disabled", "disabled");
    document.getElementById("4").setAttribute("disabled", "disabled");
     document.getElementById("5").setAttribute("disabled", "disabled");
     document.getElementById("6").setAttribute("disabled", "disabled");
   document.getElementById("7").setAttribute("disabled", "disabled");
    document.getElementById("8").setAttribute("disabled", "disabled");
     document.getElementById("9").setAttribute("disabled", "disabled");
  
  if (this.value == "Yes" )
 {   
  document.getElementById("2").removeAttribute("disabled");
  document.getElementById("3").removeAttribute("disabled");
  document.getElementById("4").removeAttribute("disabled");
  document.getElementById("5").removeAttribute("disabled");
  document.getElementById("6").removeAttribute("disabled");
  document.getElementById("7").removeAttribute("disabled");
  document.getElementById("8").removeAttribute("disabled");
  document.getElementById("9").removeAttribute("disabled");
}

};