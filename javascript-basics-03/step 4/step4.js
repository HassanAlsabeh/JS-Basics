var pss = document.querySelector("#password");
var confpss = document.querySelector("#confirmation");
var btn = document.querySelector("button");

            btn.addEventListener("click", () =>  {  
                if(confpss !== pss){
                     confpss.style.border="2px solid red";
                }
            })
        
        btn.addEventListener("click", () =>  {  
                if(confpss === pss){
                     confpss.style.border="none";
                }
    })

    

