'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('body').addEventListener('click', e => {
        if(e.target.closest('.header-phones__button')) {
            e.preventDefault();
            $('.header-phones__block').slideToggle();
            e.target.closest('.header-phones__button').classList.toggle('selected') 
         
        }
        if (!e.target.closest('.header-phones__button') && !e.target.closest('.header-phones__block')) {
            $('.header-phones__block').fadeOut();
            $('.header-phones__button').removeClass('selected'); 
        }        
    });

    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300);
            $('body').addClass('hidd');
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });
  
    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".main-next",
            prevEl: ".main-prev",
        },
        pagination: {
            el: ".main-pagination",
            clickable: true,
        },
    });

    const geIndentBlock = () => {
        const coordsLeft = document.querySelector('.header-block').getBoundingClientRect().left;
        document.querySelector('.main-company').style.marginLeft = `${coordsLeft}px`; 
    }
    const geproduction = () => {
        const coordsLeft = document.querySelector('.header-block').getBoundingClientRect().left;
        document.querySelector('.main-production__content').style.paddingLeft = `${coordsLeft}px`; 
    }
    const geguarantee = () => {
        const coordsLeft = document.querySelector('.header-block').getBoundingClientRect().left;
        document.querySelector('.guarantee-content').style.paddingLeft = `${coordsLeft}px`; 
    }
     
    if (document.querySelector('.main-company ') ) {
      geIndentBlock();
        window.addEventListener('resize', () => {
            geIndentBlock();
      });
    }

    if (document.querySelector('.main-production ') ) {
        geproduction();
          window.addEventListener('resize', () => {
            geproduction();
        });
    }

    if (document.querySelector('.guarantee') ) {
        geguarantee();
          window.addEventListener('resize', () => {
            geguarantee();
        });
    }




    const partnersSlider = new Swiper(".partners-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".partners-pagination",
            type: "progressbar",
        },
    });

    setTimeout(function() {
        $('select').styler();
    }, 100);

    (function ($) {
		$.fn.HvrSlider = function () {
		  return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
			  var hvr = $('<div>', {
				class: 'hvr',
				append: [
				  $('<div>', {
					class: 'hvr__images',
					append: $('<div>', {
					  class: 'hvr__sectors',
					}),
				  }),
				  $('<div>', {
					class: 'hvr__dots',
				  }),
				],
				insertAfter: el,
				prepend: el,
			  });
			  var hvrImages = $('.hvr__images', hvr);
			  var hvrImage = $('.swiper-slide', hvr);
			  var hvrSectors = $('.hvr__sectors', hvr);
			  var hvrDots = $('.hvr__dots', hvr);
			  el.prependTo(hvrImages);
			  hvrImage.each(function () {
				hvrSectors.prepend('<div class="hvr__sector"></div>');
				hvrDots.append('<div class="hvr__dot"></div>');
			  });
			  $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
			  var setActiveEl = function (el) {
				hvrImage.hide().eq(el.index()).show();
				$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
			  };
			  $('.hvr__sector', hvrSectors).hover(function () {
				setActiveEl($(this));
			  });
			  hvrSectors.on('touchmove', function (e) {
				e.preventDefault();
				var position = e.originalEvent.changedTouches[0];
				var target = document.elementFromPoint(position.clientX, position.clientY);
				if ($(target).is('.hvr__sector')) {
				  setActiveEl($(target));
				}
			  });
			}
		  });
		};
	})(jQuery);
	// $('.images-preview').HvrSlider();

    const widthScreen = window.screen.width; 
   
    if (widthScreen > 991) {
        $('.images-preview').HvrSlider();
    } else {
        const productSlider = new Swiper(".images-preview", {
            allowTouchMove: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 0,
            speed: 800,
            pagination: {
                el: ".images-preview-pagination",
                clickable: true,
            },
        });     
    }

    const swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 17,
        slidesPerView: 'auto',
        freeMode: true,
        speed: 800,
        watchSlidesProgress: true,
      });
    const swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 0,
        speed: 800,
        thumbs: {
          swiper: swiper,
        },
    });

    const swiper3 = new Swiper(".mySwiper4", {
        loop: false,
        spaceBetween: 17,
        slidesPerView: 'auto',
        freeMode: true,
        speed: 800,
        watchSlidesProgress: true,
        direction: "vertical",
      });
    const swiper4 = new Swiper(".mySwiper3", {
        loop: false,
        spaceBetween: 0,
        speed: 800,
        thumbs: {
          swiper: swiper3,
        },
    });

    /* 04.08 */
    document.querySelector('body').addEventListener('click', e => {
      if(e.target.closest('.labels-block__point_block')) {
        e.preventDefault();
        const collBlocks = document.querySelectorAll('.labels-block__point');
        collBlocks.forEach(element => {
          element.classList.remove('active')
        });
        e.target.closest('.labels-block__point').classList.add('active') 
      }
      if(e.target.closest('.product-close')) {
        e.preventDefault();
        const collBlocks = document.querySelectorAll('.labels-block__point');
        collBlocks.forEach(element => {
          element.classList.remove('active')
        });
      }
      if (!e.target.closest('.labels-block__point_block') && !e.target.closest('.labels-block__point')) {
        const collBlocks = document.querySelectorAll('.labels-block__point');
        collBlocks.forEach(element => {
          element.classList.remove('active')
        });
      }        
  });

});

