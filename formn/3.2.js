document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("two").removeAttribute("disabled");
};


document.getElementById("three").onchange = function () 
{
  document.getElementById("four").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("four").removeAttribute("disabled");
};


document.getElementById("five").onchange = function () 
{
  document.getElementById("six").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("six").removeAttribute("disabled");
};

document.getElementById("seven").onchange = function () 
{
  document.getElementById("ten").setAttribute("disabled", "disabled");
  document.getElementById("nine").setAttribute("disabled", "disabled");

  if (this.value == "Yes"){

    document.getElementById("ten").removeAttribute("disabled");
    document.getElementById("nine").removeAttribute("disabled");
  }

};

document.getElementById("eleven").onchange = function () 
{
  document.getElementById("twelve").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("twelve").removeAttribute("disabled");
};


document.getElementById("thirteen").onchange = function () 
{
  document.getElementById("fourteen").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("fourteen").removeAttribute("disabled");
};

document.getElementById("fifteen").onchange = function () 
{
  document.getElementById("a").setAttribute("disabled", "disabled");
  document.getElementById("b").setAttribute("disabled", "disabled");
  document.getElementById("c").setAttribute("disabled", "disabled");
  document.getElementById("d").setAttribute("disabled", "disabled");
  document.getElementById("e").setAttribute("disabled", "disabled");
  document.getElementById("f").setAttribute("disabled", "disabled");
  document.getElementById("g").setAttribute("disabled", "disabled");

  if (this.value == "Yes"){


    document.getElementById("a").removeAttribute("disabled");
    document.getElementById("b").removeAttribute("disabled");
    document.getElementById("c").removeAttribute("disabled");
    document.getElementById("d").removeAttribute("disabled");
    document.getElementById("e").removeAttribute("disabled");
    document.getElementById("f").removeAttribute("disabled");
    document.getElementById("g").removeAttribute("disabled");
    
  }

};
