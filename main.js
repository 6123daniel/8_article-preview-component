

// the tooltip pop-up
const tooltip = document.getElementById("socials-tooltip");

// the share button for pop-up
const shareContainer = document.getElementById("share-container");
const shareContainerMobile = document.getElementById("share-container-mobile");

// the arrow svg image
const shareArrow = document.getElementById("share");

// show the socials tooltip
if (window.matchMedia("(max-width: 900px)").matches) {
    console.log(window.innerWidth);
    shareContainer.addEventListener("click", tooltipShowSmall);
    shareContainerMobile.addEventListener("click", tooltipHideSmall);

}
// for desktop displays
else {
    shareContainer.addEventListener("mouseenter", tooltipShow);
    tooltip.addEventListener("mouseenter", tooltipShow);
    shareContainer.addEventListener("mouseleave", tooltipHide);
    tooltip.addEventListener("mouseleave", tooltipHide);
}


function tooltipShow(){
    tooltip.style.display = 'flex';
    shareContainer.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
    shareArrow.style.filter = 'brightness(200%)';
}

function tooltipHide(){
    tooltip.style.display = 'none';
    shareContainer.style.backgroundColor = 'white';
    shareArrow.style.filter = 'brightness(100%)';
    count = 0;
    
}

const author = document.getElementById("author");
const tooltipSmall = document.getElementById("socials-tooltip-mobile");


function tooltipShowSmall() {
    author.style.display = "none";
    tooltipSmall.style.display = "flex";
    author.style.marginTop = "10px";
}

function tooltipHideSmall() {
    author.style.display = "flex";
    tooltipSmall.style.display = "none";
    author.style.marginTop = "50px";
}

// function tooltipShowAnimated(){
//     console.log("mouse over");
//     tooltip.style.display = 'flex';
//     shareContainer.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
//     shareArrow.style.filter = 'brightness(200%)';
//     animateShow();
// }

// 
// function animateShow() {
//     let count = 0;
//     let id = null;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//         if (count >= 250) {
//         clearInterval(id);
//         } else {
            
//             tooltip.style.width = count + 'px';
//             count += 10;
            
//         }
//     }
// }

