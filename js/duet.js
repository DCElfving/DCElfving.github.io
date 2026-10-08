//
//
// Duet JS
//
//



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Plugins

// @codekit-prepend "/plugins/history.js"
// @codekit-prepend "/plugins/imagesloaded.js"
// @codekit-prepend "/plugins/masonry.js"
// @codekit-prepend "/plugins/debounce.js"
// @codekit-prepend "/plugins/fluidbox.js"
// @codekit-prepend "/plugins/owl.js"
// @codekit-prepend "/plugins/waypoints.js"



(function ($) {
	'use strict';



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Navigation

	// Global vars
	var navTarget = $('body').attr('data-page-url');
	var docTitle = document.title;
	var History = window.History;

	// State change event
	History.Adapter.bind(window,'statechange',function(){
		var state = History.getState();
		// console.log(state);

		// Loading state
		$('body').addClass('loading');

		// Load the page
		$('.page-loader').load( state.hash + ' .page__content', function() {

			// Scroll to top
			$( 'body, html' ).animate({
				scrollTop: 0
			}, 300);

			// Find transition time
			var transitionTime = 400;

			// After current content fades out
			setTimeout( function() {

				// Remove old content
				$('.page .page__content').remove();

				// Append new content
				$('.page-loader .page__content').appendTo('.page');

				// Set page URL
				$('body').attr('data-page-url', window.location.pathname);

				// Update navTarget
				navTarget = $('body').attr('data-page-url');

				// Set page title
				docTitle = $('.page__content').attr('data-page-title');
				document.title = docTitle;

				// Run page functions
				pageFunctions();

			}, transitionTime);

		});

	});


	// On clicking a link

	if ( $('body').hasClass('ajax-loading') ) {

		$(document).on('click', 'a', function (event){

			// Don't follow link
			event.preventDefault();

			// Get the link target
			var thisTarget = $(this).attr('href');

			// If we don't want to use ajax, or the link is an anchor/mailto/tel
			if ( $(this).hasClass('js-no-ajax') || /^#/.test(thisTarget) || thisTarget.indexOf("mailto:") >= 0 || thisTarget.indexOf("tel:") >= 0 ) {

				// Use the given link
				window.location = thisTarget;
			}

			// If link is handled by some JS action – e.g. fluidbox
			else if ( $(this).is('.gallery__item__link') ) {
				
				// Let JS handle it
			}

			// If link is external
			else if ( thisTarget.indexOf('http') >= 0 ) {

				// Go to the external link
				window.open(thisTarget, '_blank');

			}

			// If link is internal
			else {

				// Change navTarget
				navTarget = thisTarget;
				
				// Switch the URL via History
				History.pushState(null, docTitle, thisTarget);
			}

		});

	}



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Page load

	function pageFunctions() {


		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Show content

		// Wait until first image has loaded
		$('.page__content').find('img:first').imagesLoaded( function() {
	
			// Portfolio grid layout
			$('.portfolio-wrap').imagesLoaded( function() {
				$('.portfolio-wrap').masonry({
					itemSelector: '.portfolio-item',
					transitionDuration: 0
				});
			});

			// Blog grid layout
			$('.blog-wrap').imagesLoaded( function() {
				$('.blog-wrap').masonry({
					itemSelector: '.blog-post',
					transitionDuration: 0
				});
			});

			// Show the content
			$('body').removeClass('loading');

			// Hide the menu
			$('body').removeClass('menu--open');
		});



		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Active links

		// Switch active link states
		$('.active-link').removeClass('active-link');

		$('a[href="' + navTarget + '"]').addClass('active-link');



		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Galleries

		// Destroy all existing waypoints
		Waypoint.destroyAll();

		// Set up count for galleries to give them unique IDs
		var galleryCount = 0;

		// If there's a gallery
		$('.gallery').each( function() {

			// Get gallery element
			var $this = $(this);

			// Add ID via count
			galleryCount++;
			var thisId = 'gallery-' + galleryCount;
			$this.attr('id', thisId);

			// Gallery columns
			var galleryCols = $this.attr('data-columns');

			// Set up gallery container
			$this.append('<div class="gallery__wrap"></div>');

			// Add images to container
			$this.children('img').each( function() {
				$(this).appendTo('#' + thisId + ' .gallery__wrap');
			});

			// Wrap images
			$this.find('.gallery__wrap img').each( function() {
				var imageSrc = $(this).attr('src');
				$(this).wrapAll('<div class="gallery__item"><a href="' + imageSrc + '" class="gallery__item__link"></div></div>').appendTo();
			});

			// Wait for images to load
			$this.imagesLoaded( function() {

				// If it's a single column gallery
				if ( galleryCols === '1' ) {

					// Add carousel class to gallery
					$this.addClass('gallery--carousel');

					// Add owl styles to gallery wrap
					$this.children('.gallery__wrap').addClass('owl-carousel');

					// Use carousel
					$this.children('.gallery__wrap').owlCarousel({
						items: 1,
						loop: true,
						mouseDrag: false,
						touchDrag: true,
						pullDrag: false,
						nav: true,
						dots: true,
						autoplay: false,
						autoplayTimeout: 6000,
						autoHeight: true,
						animateOut: 'fadeOut'
					});

					// When scrolling over the bottom
					var waypoint1 = new Waypoint({
						element: document.getElementById(thisId),
						handler: function(direction) {

							if ( direction === 'down') {

								// console.log('pause');
							
								// Pause this carousel
								$this.children('.gallery__wrap').trigger('stop.owl.autoplay');
							}

							if ( direction === 'up') {

								// console.log('play');
								
								// Play this carousel
								$this.children('.gallery__wrap').trigger('play.owl.autoplay');
							}
						},
						offset: '-100%'
					});

					// When scrolling over the top
					var waypoint2 = new Waypoint({
						element: document.getElementById(thisId),
						handler: function(direction) {

							if ( direction === 'down') {

								// console.log('play');
								
								// Play this carousel
								$this.children('.gallery__wrap').trigger('play.owl.autoplay');
							}

							if ( direction === 'up') {

								// console.log('pause');
							
								// Pause this carousel
								$this.children('.gallery__wrap').trigger('stop.owl.autoplay');
							}
						},
						offset: '100%'
					});

				}

				else {

					$this.addClass('gallery--grid');

					// Use masonry layout
					$this.children('.gallery__wrap').masonry({
						itemSelector: '.gallery__item',
						transitionDuration: 0
					});
							
					// Init fluidbox
					$this.find('.gallery__item__link').fluidbox({
						loader: true
					});

				}

				// Show gallery once initialized
				$this.addClass('gallery--on');
			});

		});



		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Images

		$('.single p > img').each( function() {
			var thisP = $(this).parent('p');
			$(this).insertAfter(thisP);
			$(this).wrapAll('<div class="image-wrap"></div>');
			thisP.remove();
		});



		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Videos

		// For each iframe
		$('.single iframe').each( function() {

			// If it's YouTube or Vimeo
			if ( $(this).attr('src').indexOf('youtube') >= 0 || $(this).attr('src').indexOf('vimeo') >= 0 ) {

				var width = $(this).attr('width');
				var height = $(this).attr('height');
				var ratio = (height/width)*100;

				// Wrap in video container
				$(this).wrapAll('<div class="video-wrap"><div class="video" style="padding-bottom:' + ratio + '%;"></div></div>');

				// Flag portrait videos and pass their aspect ratio to the CSS
				if ( ratio > 100 ) {
					$(this).closest('.video-wrap').addClass('video-wrap--portrait')[0].style.setProperty('--video-ratio', width/height);
				}

				// Vimeo: background videos get a poster while loading; the rest a click-to-play cover
				if ( $(this).attr('src').indexOf('vimeo') >= 0 ) {
					if ( /[?&]background=1/.test( $(this).attr('src') ) ) {
						vimeoPoster( $(this) );
					}
					else if ( !/[?&]autoplay=1/.test( $(this).attr('src') ) ) {
						vimeoCover( $(this) );
					}
				}

			}

		});

	}

	// Get a Vimeo video's cover image: a local data-poster if set, otherwise Vimeo's thumbnail
	function vimeoThumbnail( $iframe, done, fail ) {

		var src = $iframe.attr('src');
		var id = src.match(/video\/(\d+)/);
		var hash = src.match(/[?&]h=([0-9a-f]+)/);

		if ( $iframe.attr('data-poster') ) {
			done( $iframe.attr('data-poster') );
			return;
		}

		if ( !id ) {
			if ( fail ) { fail(); }
			return;
		}

		var pageUrl = 'https://vimeo.com/' + id[1] + ( hash ? '/' + hash[1] : '' );

		$.getJSON('https://vimeo.com/api/oembed.json?width=1280&url=' + encodeURIComponent(pageUrl))
			.done( function(data) {
				if ( data.thumbnail_url ) {
					done( data.thumbnail_url );
				}
			})
			.fail( function() {
				if ( fail ) { fail(); }
			});

	}

	// Swap a Vimeo player for its thumbnail and a play button; load the player on click
	function vimeoCover( $iframe ) {

		var src = $iframe.attr('src');
		var $cover = $('<button type="button" class="video__cover"></button>');
		$cover.attr('aria-label', 'Play ' + ( $iframe.attr('title') || 'video' ));

		// Detach the player so it stops loading, and show the cover in its place
		$iframe.after($cover).detach();

		// On click, put the player back and start it
		$cover.on('click', function() {
			$iframe.attr('src', src + ( src.indexOf('?') >= 0 ? '&' : '?' ) + 'autoplay=1');
			$iframe.attr('allow', 'autoplay; ' + ( $iframe.attr('allow') || '' ));
			$cover.replaceWith($iframe);
		});

		// Show the thumbnail; if there isn't one, fall back to the normal player
		vimeoThumbnail( $iframe, function(url) {
			$cover.css('background-image', 'url("' + url + '")');
		}, function() {
			$cover.replaceWith($iframe);
		});

	}

	// Background videos: show the cover image behind a hidden player, and fade the
	// player in once the video is actually playing
	var vimeoApi;

	function vimeoPoster( $iframe ) {

		var $video = $iframe.parent().addClass('video--background video--loading');
		var reveal = function() {
			$video.removeClass('video--loading');
		};

		vimeoThumbnail( $iframe, function(url) {
			$video.css('background-image', 'url("' + url + '")');
		});

		// Never leave the player hidden for long, whatever happens
		setTimeout(reveal, 8000);

		// Load Vimeo's player API once, then wait for the first frames
		vimeoApi = vimeoApi || $.ajax({ url: 'https://player.vimeo.com/api/player.js', dataType: 'script', cache: true });

		vimeoApi.done( function() {
			var player = new window.Vimeo.Player( $iframe[0] );
			player.on('timeupdate', function(data) {
				if ( data.seconds > 0 ) {
					reveal();
					player.off('timeupdate');
				}
			});
		}).fail(reveal);

	}

	// Run functions on load
	pageFunctions();


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Menu

	$(document).on('click', '.js-menu-toggle', function (){

		// If already open
		if ( $('body').hasClass('menu--open') ) {
			$('body').removeClass('menu--open');
		}

		// If not open
		else {
			$('body').addClass('menu--open');
		}
	});

	$(document).on('click', '.menu__list__item__link', function (){

		// If menu is open when you click a link on mobile
		if ( $('.menu').hasClass('menu--open') ) {
			$('.menu').removeClass('menu--open');
		}
	});



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Contact Form

	// Override the submit event
	$(document).on('submit', '#contact-form', function (e) {

		// Clear previous classes
		$('.contact-form__item--error').removeClass('contact-form__item--error');

		// Get form elements
		var emailField = $('.contact-form__input[name="email"]');
		var nameField = $('.contact-form__input[name="name"]');
		var messageField = $('.contact-form__textarea[name="message"]');
		var gotchaField = $('.contact-form__gotcha');

		// Validate email
		if ( emailField.val() === '' ) {
			emailField.closest('.contact-form__item').addClass('contact-form__item--error');
		}

		// Validate name
		if ( nameField.val() === '' ) {
			nameField.closest('.contact-form__item').addClass('contact-form__item--error');
		}

		// Validate message
		if ( messageField.val() === '' ) {
			messageField.closest('.contact-form__item').addClass('contact-form__item--error');
		}

		// If all fields are filled, except gotcha
		if ( emailField.val() !== '' && nameField.val() !== '' && messageField.val() !== '' && gotchaField.val().length === 0 ) {

			// Submit the form!
		}

		else {

			// Stop submission
			e.preventDefault();
		}

	});
	
	
	
}(jQuery));