// import './css-src/index.scss'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';
import $ from "jquery";
import 'owl.carousel';
import moment from 'moment';
const end = moment().endOf('day'); 


function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

if(!isEmpty(localStorage.getItem('data')))
{
  var index = JSON.parse(localStorage.getItem('data'));
}
else{
  var index = 0;
}

setInterval(function() {
  const timeLeft = moment.duration(end.diff(moment())); 
  //console.log(timeLeft);
  const hours = timeLeft.hours();
  const minutes = timeLeft.minutes();
  const seconds = timeLeft.seconds();
  let title=[
    '<a href="">Rokinon 2 Lens Bundle for Sony E-Mount with 24mm, 75mm Lenses</a> ',
    '<a href="">Canon EOS R Full-Frame Mirrorless Digital Camera</a>',
    '<a href="">Canon EOS M50 Mark II Mirrorless Camera Body, Black</a>'
  ];
  let img=[
    '<img src="./img/deal-of-the-day/rokinon_242875.jpg" alt="">',
    '<img src="./img/deal-of-the-day/canon_r.jpg" alt="">',
    '<img src="./img/deal-of-the-day/canon_50mm.jpg" alt="">'
  ]
  $('#hours').html(hours);
  $('#minutes').html(minutes);
  $('#seconds').html(seconds);
  $('.img-deal').html(img[index]);
  $('.deal-title').html(title[index]);
 
  if(seconds==0)
   {
     if(index==2)
    {
      index = 0;
    }
    else{
      index++;
    }
     localStorage.setItem('data',JSON.stringify(index));

   } 
  
}, 1000);





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
                nav:false,
                dots:true,
            },
            768:{
                items: 4,
                dots: true,
            },
            
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
                dots:true,
                
            },
            769:{
                items:5,
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
                items:2,
                nav:true,
                dots:false,
            },
            769:{
                items:3,
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