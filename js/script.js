
var header = document.querySelector('header');
window.addEventListener('scroll', function(){
        if (window.pageYOffset > 50){
            header.classList.add('scrollNav');
        } else {
            header.classList.remove('scrollNav');
        }
    });
