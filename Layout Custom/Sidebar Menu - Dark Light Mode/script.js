const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// Expande e fecha a sidebar removendo a 'class' "code" 
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

// Ao clicar na lupa a sidebar se expande
searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

// Altera entre o mode Escuro e claro
modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

