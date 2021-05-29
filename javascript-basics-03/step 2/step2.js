var Show = document.querySelector("#show");
var Hide = document.querySelector("#hide");
var txt = document.querySelector("#texte");
function myFunction() {
            Show.addEventListener("click", () => {
                txt.style.display = "block";
                    })

            Hide.addEventListener("click", () => {
                 txt.style.display = "none";
                     })
}
myFunction();
