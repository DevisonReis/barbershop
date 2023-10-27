var $ = jQuery.noConflict();
function add_service(service_link) {
	checkIfMaxVarsReached();
	service_link           = $( service_link );
	var category_row       = get_category_row_from_add_remove_service_link( service_link );
	var service_rows       = category_row.find( '.service-price-length-rows-wrapper' );
	var service_rows_count = service_rows.length;
	var evaluation         = splEvaluate( service_rows_count, 'service' );
	if (evaluation) {
		service_link.html( 'need license to add more services' )
	} else {
		var service_rows_clone   = $( '#category-row-template .service-price-length-rows-wrapper' ).clone();
		var service_rows_wrapper = get_service_rows_from_add_remove_service_link( service_link );
		service_rows_wrapper.after( service_rows_clone );
		update_all_service_rows_html_in_wrapper( category_row )
	}
}


function copy_service(copy_icon) {
	copy_icon              = $( copy_icon );
	var category_row       = get_category_row_from_copy_icon( copy_icon );
	var service_rows       = category_row.find( '.service-price-length-rows-wrapper' );
	var service_rows_count = service_rows.length;
	var evaluation         = splEvaluate( service_rows_count, 'service' );
	if (evaluation) {
		copy_icon.html( 'need license to add more services' )
	} else {
		var service_rows_clone       = $( '#category-row-template .service-price-length-rows-wrapper' ).clone();
		var service_rows_wrapper     = get_service_rows_from_copy_icon( copy_icon );
		var service_row_data_nodes   = {
			item_name: 'input.service_name',
			regular_price: 'input.service_regular_price',
			long_description: 'textarea.service_long_description',
			price: 'input.service_price',
			description: 'input.service_desc',
			button_txt: 'input.service_button',
			enable_button: 'input.spl_service_button_enable',
			button_url: 'input.service_button_url',
			product_img: '.spl_service_image_element img[src]',
			product_img_url: '.spl_service_image_element input[type="file"], input[type="hidden"]'
		}
		var current_service_row_data = {};
		Object.keys( service_row_data_nodes ).forEach(
			e => {
				if (e == "product_img") {
					current_service_row_data[e] = service_rows_wrapper.find( service_row_data_nodes[e] ).attr( 'src' );
					return;
				}
				if (e == "product_img_url") {
					current_service_row_data[e] = service_rows_wrapper.find( service_row_data_nodes[e] ).attr( 'value' );
					return;
				}
				current_service_row_data[e] = service_rows_wrapper.find( service_row_data_nodes[e] ).val();
			}
		);
		Object.keys( service_row_data_nodes ).forEach(
			e => {
				// service_rows_wrapper
				if (e == "product_img") {
					service_rows_clone.find( service_row_data_nodes[e] ).attr( 'src', current_service_row_data[e] );
					return;
				}
				if (e == "product_img_url") {
					service_rows_clone.find( service_row_data_nodes[e] ).attr( 'value', current_service_row_data[e] );
					return;
				}
				service_rows_clone.find( service_row_data_nodes[e] ).val( current_service_row_data[e] );
			}
		);
		service_rows_wrapper.after( service_rows_clone );
		update_all_service_rows_html_in_wrapper( category_row );
	}
}



function remove_service(service_link){service_link = $( service_link );var category_row = get_category_row_from_add_remove_service_link( service_link );var service_row = get_service_rows_from_add_remove_service_link( service_link );service_row.remove();update_all_service_rows_html_in_wrapper( category_row );var service_rows = category_row.find( '.service-price-length-rows-wrapper' );if (0 == service_rows.length) {
		category_row.remove()}}



function update_all_service_rows_html_in_wrapper(category_row) {
	var service_rows = category_row.find( ".service-price-length-rows-wrapper" );
	if (0 < service_rows.length) {
		cat_id = get_category_id( category_row );
		for (var i = 0; i < service_rows.length; i++) {
			service_id = i + 1;
			update_service_rows_html( $( service_rows[i] ), cat_id, service_id );
		}
	}
}



function add_category(add_cat_row_ele) {
	var cat_clone = $( '#category-row-template .category-row' ).clone();
	var cat_id    = parseInt( get_category_id( $( '#category-rows-wrapper' ) ) ) + 1;
	var cat_count = parseInt( get_category_count( $( '#category-rows-wrapper' ) ) );
	// category ID max amount
	var category_max = parseInt( get_category_max( $( '#category-rows-wrapper' ) ) );
	if (cat_id == 8 && cat_count >= 7) {
		jQuery( '#dropdown_tips' ).removeClass('fade').show(300).trigger('show.bs.modal');
	}
	var service_id = 1;
	var evaluation = splEvaluate( cat_count, 'category' );
	if (evaluation) {
		show_license_tips_for_category( add_cat_row_ele )
	} else {
		var category_max = parseInt( get_category_max( $( '#category-rows-wrapper' ) ) );
		update_category_row_html( cat_clone, category_max + 1 , service_id );
		cat_clone.appendTo( '#category-rows-wrapper' );
		cat_count = parseInt( get_category_count( $( '#category-rows-wrapper' ) ) );
		if (cat_count >= splSettings.maxCats) {
			show_license_tips_for_category( add_cat_row_ele )
		}
	}
}

function splEvaluate(count, type) {
	if (type == "category") {
		return count >= splSettings.maxCats;
	}
	if (type == "service") {
		return count >= splSettings.maxService;
	}
}



function show_license_tips_for_category(add_cat_row_ele){$( add_cat_row_ele ).html( 'need license to add more categories' );$( add_cat_row_ele ).parent().removeClass( 'col-xs-3 col-sm-3 col-md-3 col-lg-3' );$( add_cat_row_ele ).parent().addClass( 'col-xs-5 col-sm-5 col-md-5 col-lg-5' )}





jQuery( document ).on(
	"click",
	".spl_service_button_enable",
	function(){if (this.checked) {
			var e = jQuery( this ).data( "id" );jQuery( "." + e + "_service_button_url" ).css( "display","block" ),jQuery( "." + e + "_service_button_url" ).parent().parent().css( "display","block" )} else {
		e = jQuery( this ).data( "id" );jQuery( "." + e + "_service_button" ).val( "" ),
		jQuery( "." + e + "_service_button_url" ).css( "display","none" ),
		jQuery( "." + e + "_service_button_url" ).parent().parent().css( "display","none" )}}
);

jQuery( "input[type='checkbox']" ).each(
	function(){if (jQuery( this ).attr( "checked" )) {
			var e = jQuery( this ).data( "id" );jQuery( "." + e + "_service_button_url" ).css( "display","block" ),jQuery( "." + e + "_service_button_url" ).parent().parent().css( "display","block" )} else {
		 e = jQuery( this ).data( "id" );jQuery( "." + e + "_service_button" ).val( "" ),
		  jQuery( "." + e + "_service_button_url" ).css( "display","none" ),
		  jQuery( "." + e + "_service_button_url" ).parent().parent().css( "display","none" )}}
);

// initiate tooltip

window.onload = function() {
	jQuery( '.lbl > i.fa:not([data-image-tooltip])' ).tooltip();
	jQuery( '.category-image-wrapper' ).tooltip();

	// image tooltip setup

	jQuery( '[data-image-tooltip]' ).on(
		'click',
		function (event) {
			let settingsModal = jQuery( '#settings-preview' );
			let imgLink       = this.attributes['data-image-tooltip'].value;
			let imgTag        = jQuery( '<img>' ).attr( 'src', imgLink );
			settingsModal.find( '.df-spl-row' ).html( imgTag );
			// settingsModal.modal( {'show': true, 'backdrop': true} );
			settingsModal.removeClass('fade').show(300).trigger('show.bs.modal');
			jQuery('button[data-dismiss="modal"]', settingsModal).on('click', ee => {
				settingsModal.addClass('fade').hide(300).trigger('hide.bs.modal');
			});
		}
	)

	// handle image picking for Product/Service Image

	document.querySelectorAll('.form-control.service_image, .form-control.category_image[type=file]').forEach(fileInput => {
		fileInput.addEventListener('click', evt => {
			evt.preventDefault();

			const inputSrc = evt.target;

			const mediaUploader = wp.media.frames.file_frame = wp.media({
				title: 'Choose Image',
				button: {
					text: 'Choose Image'
				},
				multiple: false
			});

			mediaUploader.on("select", () => {
				splOnMediaImageSelect(mediaUploader, inputSrc);
			});

			mediaUploader.open();
		})
	})
	/**
	 * On media image select
	 */
	 function splOnMediaImageSelect(mediaUploader, inputSrc) {
		var attachment = mediaUploader.state().get('selection').first().toJSON();

		debugger;

		function gcd (a,b) {
			if (b == 0) {
				return a;
			}
			return gcd (b, a % b);
		}

		var isCategoryImage = inputSrc.classList.contains('category_image');

		if (isCategoryImage) {
			// finding aspect ratio of the image
			let dimensions_gcd = gcd(attachment.width, attachment.height);
			let aspectRatio = [attachment.width / dimensions_gcd, attachment.height / dimensions_gcd];
			if (aspectRatio[0] == aspectRatio[1] || aspectRatio[0] < aspectRatio[1]) {
				jQuery( '#image_bad_aspect_ratio_warning' ).removeClass('fade').show(300).trigger('show.bs.modal');
				return;
			}
		}

		
		if (['jpeg','png'].findIndex(type => type == attachment.subtype) < 0) {
			jQuery( '#not_an_image_warning' ).removeClass('fade').show(300).trigger('show.bs.modal');
			return;
		};

		jQuery( inputSrc ).parent().find('img').attr('src',attachment.url);
		jQuery( inputSrc ).parent().find( 'input:hidden' ).val(attachment.url);
	}

}
