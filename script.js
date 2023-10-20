let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


let startSlider = 0 
let endSlider = imgItem.length-1
slideBtnLeft.addEventListener("click",()=>{

})

slideBtnRight.addEventListener("click",()=>{

    if(startSlider >= endSlider){
         startSlider = startSlider - 100;
    }
   
    imgItem.forEach(element =>{
        element.style.transform = 'translateX(${startSlider}%)';
    })

})

// sideabr
const sidebarnav = document.getElementById("sidebar-container-id")
const opensidebar = document.getElementById("open-sidebar")

opensidebar.addEventListener("click",()=> {
    sidebarnav.classList.toggle("sidebar-show")
} )
// 
const sidebarclose= document.getElementById("sidebar-close")
sidebarclose.addEventListener("click", ()=> {
    sidebarnav.classList.toggle("sidebar-show")
})