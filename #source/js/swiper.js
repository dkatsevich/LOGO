var sliders = document.querySelectorAll('._swiper');

if (sliders) {
	for (var _index24 = 0; _index24 < sliders.length; _index24++) {
		var slider = sliders[_index24];

		if (!slider.classList.contains('swiper-bild')) {
			var slider_items = slider.children;

			if (slider_items) {
				for (var _index25 = 0; _index25 < slider_items.length; _index25++) {
					var _el12 = slider_items[_index25];

					_el12.classList.add('swiper-slide');
				}
			}

			var slider_content = slider.innerHTML;
			var slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}

		if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
		}
	}

	sliders_bild_callback();
}

function sliders_bild_callback(params) { }