import './css-src/index.scss'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        items:1,
        nav:true,
        dots:true,
        dotsEach:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        // responsiveClass:true,
        // responsive:{
        //     0:{
        //         items:1,
        //         nav:true
        //     },
        //     600:{
        //         items:3,
        //         nav:false
        //     },
        //     1000:{
        //         items:5,
        //         nav:true,
        //         loop:true,
        //     }
        // }
    });
  });


console.log('test');