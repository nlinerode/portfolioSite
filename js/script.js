var header = document.querySelector('header');
window.addEventListener('scroll', function(){
        if (window.pageYOffset > 50){
            header.classList.add('scrollNav');
        } else {
            header.classList.remove('scrollNav');
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

function isTouchDevice() {
    return 'ontouchstart' in window || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0);
}
jQuery(document).ready(function($) {
if (isTouchDevice()) {
    $(".projectImg").flip({
        axis: 'y',
        trigger: 'click'
    });
} else {
$(".projectImg").flip({
    axis: 'y',
    trigger: 'hover'
    });
}
});