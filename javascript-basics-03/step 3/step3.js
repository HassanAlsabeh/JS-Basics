var Red = document.querySelector(".red");
var Green = document.querySelector(".green");
var Blue = document.querySelector(".blue");
var Txt =document.querySelector("#text");
function myFunction() {
            Red.addEventListener("click", () => {
                Txt.style.color = "red";
                    })

            Green.addEventListener("click", () => {
                 Txt.style.color = "green";
                     })
            Blue.addEventListener("click", () => {
                 Txt.style.color = "blue";
                     })
}
myFunction();
