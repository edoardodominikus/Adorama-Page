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

const owlMidBanner = {
  init(){
    const carouselArea = $('.grid-item-carousel');
    console.log(carouselArea)
    if(carouselArea.length > 0){
      console.log('test')
      carouselArea.each((index, ele) => {
        owlMidBanner.initOwlcarousel($(ele));
      });
    };
  },
  initOwlcarousel(parentElement){
    const owlItem = Number(parentElement.attr('data-item')) || 1;
    parentElement.owlCarousel({
        loop:false,
        margin:20,
        items: owlItem,
        nav:false,
        dots:false,
        dotsEach:false,
        // autoplay:false,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        // responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                dots:true,
            },
            768:{
                item: 5,
            }
        }
    });
  }
}

const owlBrandBanner = {
  init(){
    const carouselArea = $('.brands-item-carousel');
    console.log(carouselArea)
    if(carouselArea.length > 0){
      console.log('test')
      carouselArea.each((index, ele) => {
        owlBrandBanner.initOwlcarousel($(ele));
      });
    };
  },
  initOwlcarousel(parentElement){
    const owlItem = Number(parentElement.attr('data-item')) || 1;
    parentElement.owlCarousel({
        loop:false,
        margin:20,
        items: owlItem,
        nav:true,
        dots:true,
        dotsEach:8,
        // autoplay:false,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        // responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:false,
                dots:false,
            },
            769:{
                items:8,
                nav:false
            },
            
        }
    });
  }
}

const owlBottomBanner = {
  init(){
    const carouselArea = $('.video-item-carousel');
    console.log(carouselArea)
    if(carouselArea.length > 0){
      console.log('test')
      carouselArea.each((index, ele) => {
        owlBottomBanner.initOwlcarousel($(ele));
      });
    };
  },
  initOwlcarousel(parentElement){
    const owlItem = Number(parentElement.attr('data-item')) || 1;
    parentElement.owlCarousel({
        loop:false,
        margin:20,
        items: owlItem,
        nav:true,
        dots:true,
        dotsEach:4,
        // autoplay:false,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false,
            },
            769:{
                items:4,
                nav:true
            },
         
        }
    });
  }
}









$(document).ready(function(){
  owlTopBanner.init();
  owlMidBanner.init();
  owlBrandBanner.init();
  owlBottomBanner.init();
});


console.log('test');