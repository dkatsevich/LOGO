var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


//////////////////// Burger header

let iconHeader = document.querySelector(".top-header__icon");
let body = document.querySelector("body");
let menuHeader = document.querySelector(".top-header__nav");

if (iconHeader) {
	iconHeader.addEventListener("click", function () {
		iconHeader.classList.toggle("active");
		body.classList.toggle("lock");
		menuHeader.classList.toggle("active");
	});
}

//////////////////// Burger menu

let menuPageBurger = document.querySelector(".menu-page__burger");
let menuPageBody = document.querySelector(".menu-page__body");

menuPageBurger.addEventListener("click", function () {
	menuPageBurger.classList.toggle("active");
	menuPageBody.classList.toggle("active");
});

/////////////////////	Hover menu

if (isMobile.any()) {
	let menuParents = document.querySelectorAll(".menu-page__parent a");

	for (let i = 0; i < menuParents.length; i++) {
		menuParent = menuParents[i];
		menuParent.addEventListener('click', function(e) {
			e.target.parentElement.classList.toggle('active');
		})
	}

} else {
	let menuParents = document.querySelectorAll(".menu-page__parent");

	for (let i = 0; i < menuParents.length; i++) {
		let menuParent = menuParents[i];
		menuParent.addEventListener('mouseenter', function(e) {
			menuParent.classList.add('active');
		})	
		menuParent.addEventListener('mouseleave', function(e) {
			menuParent.classList.remove('active');
		})	
	}
}


/////////////////////	Search page


let searchSelect = document.querySelector(".search-page__title");
let searchCategory = document.querySelector(".search-page__categories");

searchSelect.addEventListener('click', function(e) {
	searchSelect.classList.toggle('active');
	searchCategory.classList.toggle('active');
});


let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let i = 0; i < checkboxCategories.length; i++) {
	let checkboxCategory = checkboxCategories[i];
	checkboxCategory.addEventListener('change', function(e) {
		checkboxCategory.classList.toggle('checkbox-active');
		let checkboxActiveCategories = document.querySelectorAll('.checkbox-active');

		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('categories');
			let searchQuantity = document.querySelector(".search-page__quantity");
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + '' + checkboxActiveCategories.length;

		} else {
			searchSelect.classList.remove('categories');
		}
	})
}





// Main slider


var mainSlider = new Swiper('.main-slider__body', {
	/*
	effect: 'fade',
	autoplay: {
		  delay: 3000,
		  disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	// spaceBetween: 0,
	///autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: false,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.main-slider__dots',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.control-main-slider__arrow_next',
	// 	prevEl: '.control-main-slider__arrow_prev'
	// },
	// breakpoints: {
	// 	320: {
	// 		autoHeight: true
	// 	},
	// 	768: {
	// 		autoHeight: false
	// 	}
	// },
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} // And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});




// Products slider


var productSlider = new Swiper('.products-slider__item', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 50,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: false,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
        el: '.products-slider__info',
        type: 'fraction',
      },
	// Arrows
	navigation: {
		nextEl: '.products-slider__next',
		prevEl: '.products-slider__prev'
	},
	// breakpoints: {
	// 	320: {
	// 		autoHeight: true
	// 	},
	// 	768: {
	// 		autoHeight: false
	// 	}
	// },
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} // And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});





//////////////// Slider dots

let sliderImages = document.querySelectorAll(".main-slider__image");
let sliderDots = document.querySelectorAll(".main-slider__dots .swiper-pagination-bullet");

for (let i = 0; i < sliderImages.length; i++) {
	let sliderImage = sliderImages[i].querySelector('img').getAttribute('src');
	sliderDots[i].style.backgroundImage  = "url('" + sliderImage+"')"
}

//====================================================================================================



$('.brands-slider__body').slick({
	//autoplay: true,
	infinite: true,
	dots: false,
	arrows: true,
	accessibility:false,
	slidesToShow:5,
	// autoplaySpeed: 3000,
	//asNavFor:'',
	//appendDots:
	//appendArrows:$('.mainslider-arrows .container'),
	nextArrow:'<div type="button" class="brands-slider__arrow brands-slider__arrow--prev arrow arrow--prev"></div>',
	prevArrow:'<div type="button" class="brands-slider__arrow brands-slider__arrow--next arrow arrow--next"></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow:4,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow:3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow:2,
			},
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow:1,
			},
		}
	]
});




$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});

//====================================================================================================


if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#9B4E7C",
				cursorwidth: "0px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "10px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					let cl='';
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('class')!='' && $(this).attr('class')!=null){
						let cl=$(this).attr('class');
					}
					if($(this).attr('value')!=''){
						if($(this).attr('data-icon')!='' && $(this).attr('data-icon')!=null){
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'><div><img src="+$(this).attr('data-icon')+" alt=\"\"></div><div>"+$(this).html()+"</div></div>";
						}else{
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'>"+$(this).html()+"</div>";
						}
					}else if($(this).parent().attr('data-label')=='on'){
						if(sblock.find('.select__label').length==0){
							sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
						}
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else if($(this).attr('data-icon')=='true'){
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select icon "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr('data-icon')+" alt=\"\"></div><div>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+
											"</div>"+
											soptions+
										"</div>");
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}

				if(sblock.find('.select-options__value').length==1){
					sblock.find('.select').addClass('one');
				}

				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
		select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled') && !$(this).hasClass('one')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
					}
					$(this).find('.select-options__value').show();
				}


				var cl=$.trim($(this).find('.select-title__value').attr('class').replace('select-title__value',''));
					$(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
				if(cl!=''){
					$(this).find('.select-options__value.'+cl).hide().addClass('hide');
				}
				if($(this).find('.select-options__value').last().hasClass('hide')){
					$(this).find('.select-options__value').last().prev().addClass('last');
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}


			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');

				$(this).parents('.select-block').find('.select').removeClass('err');
				$(this).parents('.select-block').parent().removeClass('err');
				$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
		$(document).on('keydown',function(e) {
			if(e.which==27){
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			}
		});
	}

//====================================================================================================

var productSubSlider = new Swiper('.images-product__subslider', {
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	speed: 800,
	loop: true,
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	}

});

var productMainSlider = new Swiper('.images-product__mainslider', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	// loop: false,
	//preloadImages: false,
	//lazy: true,
	// breakpoints: {
	// 	320: {
	// 		autoHeight: true
	// 	},
	// 	768: {
	// 		autoHeight: false
	// 	}
	// },
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	},
	thumbs: {
	    swiper: productSubSlider
	}

});


//====================================================================================================


//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});

//====================================================================================================

$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').removeClass('animate__fadeIn').eq(eq).addClass('animate__fadeIn').addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});



//====================================================================================================
//====================================================================================================
//====================================================================================================


$('form button[type=submit]').click(function(){
	var er=0;
	var form=$(this).parents('form');
	var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		if(ms!=null && ms!=''){
			showMessageByClass(ms);
			return false;
		}
	}else{
		return false;
	}
});









//====================================================================================================



let priceFilter = document.querySelector('.price-filter__slider');

noUiSlider.create(priceFilter, {
    start: [0, 200000],
    connect: true,
    tooltips: [wNumb({decimals: 0}),wNumb({decimals: 0})],
    range: {
        'min': 0,
        'max': 200000
    }
});

//====================================================================================================


const priceStart = document.getElementById('price-start'),
	  priceEnd   = document.getElementById('price-end');


priceStart.addEventListener('change', setPriceValue);
priceEnd.addEventListener('change', setPriceValue);



function setPriceValue() {
	let priceStartValue;
	let	priceEndValue;

	if (priceStart.value != '') {
		priceStartValue = priceStart.value;
	}

	if (priceEnd.value != '') {
		priceEndValue = priceEnd.value;
	}

	priceFilter.noUiSlider.set([priceStartValue,priceEndValue]);
}

//====================================================================================================

