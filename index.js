const cookieBox = document.querySelector(".cookie-wrapper"),
 buttons = document.querySelectorAll(".cookie-button");

const executeCodes = () => {

  
  if(document.cookie.includes("dmd")) return;
cookieBox.classList.add("show")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if(button.id == "button") {
       document.cookie = "cookieBy = dmd; max-age=" + 60*60*24*30;
    }
    });
  });
    
};


window.addEventListener("load", executeCodes);
