const h1Element = document.getElementById("title");
const h4Element = document.getElementById("h4Id");
const h2Element = document.getElementById("red");


h1Element.textContent = "Adios!";
h4Element.style.color = "Orange";

h2Element.addEventListener("click", () =>{
    h2Element.style.color = "brown";
});
