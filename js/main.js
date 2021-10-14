const nav = document.querySelector('.menu-activo')
const iconoMenu = document.querySelector('.menu-hamburguesa')

iconoMenu.addEventListener('click', (e)=>{
    
    if(nav.classList.contains("activo")){
        nav.classList.remove("activo")
    }else{
        nav.classList.add("activo")
    }
 
});

// const menuEnlaces = document.querySelectorAll('.menu-activo a[href^="#"]')
// menuEnlaces.forEach(menuEnlace => {
//     menuEnlace.addEventListener("click", function(){
//         menuEnlace.classList.remove("activo")
//     })
// });