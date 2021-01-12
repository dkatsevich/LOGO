//@prepros-append swiper.min.js
//@prepros-append jquery.nicescroll.min.js
//@prepros-append slick.min.js
//@prepros-append wNumb.min.js
//@prepros-append nouislider.min.js
//@prepros-append swiper.js
//@prepros-append responsive.js



function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}