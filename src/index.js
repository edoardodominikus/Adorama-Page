// import './css-src/index.scss'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';
import $ from "jquery";
import 'owl.carousel';


const owlTopBanner = {
  init(){
    const carouselArea = $('.banner-hero-carousel');
    console.log(carouselArea)
    if(carouselArea.length > 0){
      console.log('test')
      carouselArea.each((index, ele) => {
        owlTopBanner.initOwlcarousel($(ele));
      });
    };
  },
  initOwlcarousel(parentElement){
    const owlItem = Number(parentElement.attr('data-item')) || 1;
    parentElement.owlCarousel({
        loop:true,
        margin:10,
        items: owlItem,
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
  }
};




$(document).ready(function(){
  owlTopBanner.init();
});


console.log('test');