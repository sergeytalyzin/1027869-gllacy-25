var feedback=document.querySelector(".button-feedback");var popup=document.querySelector(".modal-feedback-open");var close=document.querySelector(".feedback-close");feedback.addEventListener("click",function(evt){evt.preventDefault();popup.classList.add("modal-show")})
close.addEventListener("click",function(evt){evt.preventDefault();popup.classList.remove("modal-show")})
