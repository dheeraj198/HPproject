document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");

  if (this.value == "0")

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
  document.getElementById("seven").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("seven").removeAttribute("disabled");
};

document.getElementById("six").onchange = function () 
{
  document.getElementById("seven");

  if (this.value == "Yes")

    document.getElementById("seven").removeAttribute("disabled");
};

document.getElementById("eight").onchange = function () 
{
  document.getElementById("nine");

  if (this.value == "Yes")

    document.getElementById("nine").removeAttribute("disabled");
};