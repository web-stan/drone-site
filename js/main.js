"use strict";

window.addEventListener('DOMContentLoaded', function () {

  //init .slider-costumer
  $('.slider-costumer').slick({
    centerMode: true,
    slidesToShow: 2.4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-left.svg"</button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-right.svg"</button>',
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 572,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 4
        }
      },
    ]
  });

  //working of humburger
  function navigationHumburger() {
    let headerWrapper = document.querySelector('.header__wrapper'),
        headerNavigationLayout = document.querySelector('.header__navigation-layout'),
        humburger = document.querySelector('.header__navigation-humburger'),
        headerWrapperForNav = document.querySelector('.header__wrapper-for-nav');
            
      humburger.addEventListener('click', function () {
      headerWrapper.classList.toggle('menu-opened');

      const isOpenedMenu = headerWrapper.classList.contains('menu-opened');

      if (isOpenedMenu) {
        disableScroll(humburger, headerWrapperForNav);
        headerNavigationLayout.style.setProperty('animation-name', 'show-layout');
        document.body.style.setProperty('overflow', 'hidden');
      } else {
        headerNavigationLayout.style.setProperty('animation-name', 'hide-layout');
        document.body.style.removeProperty('overflow');
        enableScroll(humburger, headerWrapperForNav);
      }
    });

    headerNavigationLayout.addEventListener('click', function () {
      headerWrapper.classList.toggle('menu-opened');
      headerNavigationLayout.style.setProperty('animation-name', 'hide-layout');
      document.body.style.removeProperty('overflow');
      enableScroll(humburger, headerWrapperForNav); 
    });
  };

  //switch .slider-gallery
  function switcherGallery() {
    const sliderGallery = document.querySelector('.slider-gallery');
    const galleryBtnSwitcherSlider = document.querySelector('.gallery__btn.gallery__btn-switcher-slider');
    const galleryBtnSwitcherBlock = document.querySelector('.gallery__btn.gallery__btn-switcher-block');
  
    galleryBtnSwitcherSlider.classList.add('active');

    $('.slider-gallery').slick({
      centerMode: true,
      slidesToShow: 1.5,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/gallary-arrow-left.svg"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/gallary-arrow-right.svg"</button>',
      responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 1
            }
          },
          {
          breakpoint: 768,
          settings: {
              centerMode: false,
              slidesToShow: 1,
            }
          },
      ]
    });

    galleryBtnSwitcherBlock.addEventListener('click', () => {
      galleryBtnSwitcherSlider.classList.remove('active');
      galleryBtnSwitcherBlock.classList.add('active');

      if(!sliderGallery.classList.contains('switcher-gallery')) {
        $('.slider-gallery').slick('unslick');
        sliderGallery.classList.add('switcher-gallery');
      };
    });

    galleryBtnSwitcherSlider.addEventListener('click', () => {

      galleryBtnSwitcherSlider.classList.add('active');
      galleryBtnSwitcherBlock.classList.remove('active');

      if(sliderGallery.classList.contains('switcher-gallery')) {
        sliderGallery.classList.remove('switcher-gallery');
      };

      $('.slider-gallery').slick({
        centerMode: true,
        slidesToShow: 1.5,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img class=" animate__animated  animate__pulse animate__infinite" src="img/gallary-arrow-left.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img class="animate__animated  animate__pulse animate__infinite" src="img/gallary-arrow-right.svg"</button>',
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
              }
            },
            {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            },
        ]
      });
    
    });
  };


  //scrolling to section .video
  function doScroll() {
    document.querySelector('.header__drone-arrow').addEventListener('click', function() {
      document.querySelector('.video').scrollIntoView({behavior: "smooth"});
    })
  };

  function disableScroll(humburger, headerWrapperForNav) {
    let paddingOffset = window.innerWidth - document.body.clientWidth;
    document.body.style.marginRight = `${paddingOffset + 0.5}px`;
    humburger.style.right = `${25 + paddingOffset + 0.5}px`;
    headerWrapperForNav.style.paddingRight = `${paddingOffset + 0.5}px`;
  };

  //enabling of scroll click humburger
  function enableScroll(humburger, headerWrapperForNav) {
    document.body.style.marginRight = '0px';
    humburger.style.right = `25px`;
    headerWrapperForNav.style.paddingRight = '';
  };

  switcherGallery();
  navigationHumburger();
  doScroll();

  let wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', 
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });
  wow.init();

});