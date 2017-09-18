var header = document.querySelector('header');
var submitBtn = document.querySelector('button');
var btnMessage = document.querySelector('.btnMessage');
var projectImg = document.querySelectorAll('.projectImg');
var imgText = document.querySelectorAll('.imgText');

// window.addEventListener('load', init);
init();

function init(){
    scrollHeader();
    isTouchDevice();
    flipCard();
    // hoverProjectImgText();
}


// recognizing touch device
function isTouchDevice() {
    return 'ontouchstart' in window || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0);
}

// Responsive Header to change color on scroll
function scrollHeader(){
    window.addEventListener('scroll', function(){
        if (window.pageYOffset > 50){
            header.classList.add('scrollNav');
        } else {
            header.classList.remove('scrollNav');
        }
    });
}

// flipCard function
function flipCard(){
    if (isTouchDevice()) {
        $(".projectImg").flip({
            axis: 'y',
            trigger: 'click'
        });
    } else {
        $(".projectImg").flip({
            axis: 'y',
            trigger: 'click'
        });
    }
}



// display Image Text on project images
// function hoverProjectImgText(){ 
//     if(isTouchDevice){
//         return;
//     } else if(projectImg.style.display === 'none'){
//         for (var i = 0; i < projectImg.length; i++){
//             addEventListener(projectImg[i], 'mouseenter', displayImageText);
//     }
//  } else{
//         for (var i = 0; i < projectImg.length; i++){
//             addEventListener(projectImg[i], 'mouseleave', hideImageText);       
//         }
//     }
// }

// function displayImageText(){
//         imgText.style.display = 'inline';
// }

// function hideImageText(){
//         imgText.style.display = 'none';
// }


// jQuery(document).ready(function($) {

//     });
    
    
    // submitBtn.addEventListener('mouseenter', btnMessageAdd);
    // submitBtn.addEventListener('mouseleave', btnMessageDelete);
    // submitBtn.addEventListener('click', btnMessageAdd);
