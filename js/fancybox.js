$(document).ready(
		function() {

			// Don't execute if we're in the Live Editor
			if (!window.isCMS) {

				// Group images by gallery using `data-fancybox-group`
				// attributes
				var galleryId = 1;
				$('.editable-gallery').each(
						function() {
							$(this).find('a').attr('data-fancybox-group',
									'gallery-' + galleryId++);
						});

				// Initialize Fancybox
				$('.editable-gallery a').fancybox({
					// Use the `alt` attribute for captions per
					// http://fancyapps.com/fancybox/#useful
					beforeShow : function() {
						var alt = this.element.find('img').attr('alt');
						this.inner.find('img').attr('alt', alt);
						this.title = alt;
					}
				});

			}

		});