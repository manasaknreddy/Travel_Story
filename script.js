$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      fade: true,
      speed: 1000
    });
  });


    // If using JavaScript to handle hover functionality
    const bgWhiteDivs = document.querySelectorAll('.bg-white');

    bgWhiteDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.querySelector('.paragraph').style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        });

        div.addEventListener('mouseout', () => {
            div.querySelector('.paragraph').style.backgroundColor = 'rgba(255, 255, 255, 0)';
        });
    });


