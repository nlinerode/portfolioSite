var header = document.querySelector('header');
var submitBtn = document.querySelector('button');
var btnMessage = document.querySelector('.btnMessage');

// submitBtn.addEventListener('mouseenter', btnMessageAdd);
// submitBtn.addEventListener('mouseleave', btnMessageDelete);
// submitBtn.addEventListener('click', btnMessageAdd);

window.addEventListener('scroll', function(){
        if (window.pageYOffset > 50){
            header.classList.add('scrollNav');
        } else {
            header.classList.remove('scrollNav');
        }
    });


// function btnMessageAdd(){
//         btnMessage.innerHTML= "<p>Sorry, this won't send anything yet!</p>"; 
// }
// function btnMessageDelete(){
//     btnMessage.textContent= "";
// }

function isTouchDevice() {
    return 'ontouchstart' in window || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0);
}


jQuery(document).ready(function($) {
    if (isTouchDevice()) {
        $(".projectImg").flip({
            axis: 'y',
            trigger: 'click'
        });
        // btnMessageAdd();
    } else {
        $(".projectImg").flip({
            axis: 'y',
            trigger: 'hover'
        });
        // btnMessageAdd();
        // btnMessageDelete();
    }
});



// $(".projectImg").flip({
//     axis:"y",
//     trigger: "click"
// });

// $(".projectImg").on('flip:change',function(){
//   $('.projectImg').flip('toggle');
// });


// $(".projectImg").flip(true);

// $(".projectImg").flip(function(){
    // $(".projectImg").on("flip:done", function(){
        
        // if ({axis: "y"}){
            // $(".projectImg").flip({axis:"x"});
        // } 
    // });
// });
// $(".projectImg").flip(function(){
//     $(".projectImg").on("flip:done", function(){
//         if ({axis: "x"}){
//             $(".projectImg").flip({axis:"y"});
//         } 
//     });
// });
// 