jQuery( '.add_to_webpage' ).click( function() {
	event.preventDefault(); jQuery( '.show_hide_shortcode' ).toggle(), jQuery( '.font_setting_container' ).hide(), jQuery( '.more_setting' ).hide();
} );

jQuery( '.font_settitng' ).click( function() {
	event.preventDefault(); jQuery( '.font_setting_container' ).toggle(), jQuery( '.show_hide_shortcode' ).hide(), jQuery( '.more_setting' ).hide();
} );

jQuery( '.advance_setting' ).click( function() {
	event.preventDefault(); jQuery( '.more_setting' ).toggle(), jQuery( '.font_setting_container' ).hide(), jQuery( '.show_hide_shortcode' ).hide();
} );

jQuery( '.preview_list' ).click( function() {
	jQuery( '#preview_content' ).toggle(), jQuery( '.backup_content' ).hide(), jQuery( '.restore_content' ).hide();
} );

jQuery( '.backup' ).click( function() {
	jQuery( '#preview_content' ).hide(), jQuery( '.backup_content' ).toggle(), jQuery( '.restore_content' ).hide();
} );

jQuery( '.restore' ).click( function() {
	jQuery( '#preview_content' ).hide(), jQuery( '.backup_content' ).hide(), jQuery( '.restore_content' ).toggle();
} );

// set default font size

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'with_tab' == this.value &&
		(
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '36px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#65b5a8' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Playfair-Display' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '18px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Playfair-Display' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#65b5a8' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '16px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#aaaaaa' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#000' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#000' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '600' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#65b5a8' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),
			jQuery( jQuery( '.color-picker' )[ 4 ] ).wpColorPicker( 'color', '#65b5a8' ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( jQuery( '.color-picker' )[ 5 ] ).wpColorPicker( 'color', '#000' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )

		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'without_tab' == this.value && (
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '35px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '25px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '600' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#e9b200' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#bcb3ab' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '18px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#020202' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#bcb3ab' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )
		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'without_tab_single_column' == this.value && (
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '35px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '25px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '600' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#e9b200' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#bcb3ab' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '18px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#020202' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#e9b200' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#bcb3ab' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )
		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'style_3' == this.value && (
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '35px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#bc250d' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Playfair-Display' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '300' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Playfair-Display' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '900' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#bc250d' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#aaaaaa' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#020202' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#020202' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#bc250d' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Gothic-A1' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#000' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )
		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'style_4' == this.value && (
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '35px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#879401' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '22px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#879401' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#7a7a7a' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '16px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#494949' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#879401' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#879401' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '500' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#282624' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '' ).attr( 'selected', ! 0 )
		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'style_5' == this.value && (
		// Title
			jQuery( 'select[name="title_font_size"]' ).val( '30px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#545454' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '13px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#545454' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#aaaaaa' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '18px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#545454' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#549600' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '600' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#549600' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '700' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#549600' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '' ).attr( 'selected', ! 0 )
		);
	},
);

jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'style_6' == this.value && (
		// Default column settings
			jQuery( '[name="select_column"]' ).val( 'Two' ),

			// Title
			jQuery( 'select[name="title_font_size"]' ).val( '50px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#353535' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Poppins' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '16px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#353535' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#545454' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#545454' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Roboto' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#457a01' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Asap' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#457a01' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '17px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Open-Sans' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#000' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )
		);
	},
);
jQuery( '.sel1' ).on(
	'load-demo-settings',
	function() {
		'style_7' == this.value && (
		// Default column settings
			jQuery( '[name="select_column"]' ).val( 'Two' ),

			// Title
			jQuery( 'select[name="title_font_size"]' ).val( '35px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color_top"]' ).wpColorPicker( 'color', '#bb9d9e' ),
			jQuery( 'select[name="list_name_font"]' ).val( 'Lora' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),

			// Category Tab
			jQuery( 'select[name="tab_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="title_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="title_color"]' ).wpColorPicker( 'color', '#bb9d9e' ),

			// Description
			jQuery( 'select[name="service_description_font_size"]' ).val( '14px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_description_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_description_color"]' ).wpColorPicker( 'color', '#7c7c7c' ),
			jQuery( 'select[name="description_font-weight"]' ).val( '300' ).attr( 'selected', ! 0 ),

			// Item Name
			jQuery( 'select[name="service_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="service_color"]' ).wpColorPicker( 'color', '#545454' ),
			jQuery( 'select[name="desc_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="hover_color"]' ).wpColorPicker( 'color', '#bb9d9e' ),
			jQuery( 'select[name="service_font-weight"]' ).val( '600' ).attr( 'selected', ! 0 ),

			// Price
			jQuery( 'select[name="price_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="price_color"]' ).wpColorPicker( 'color', '#946956' ),
			jQuery( 'select[name="service_price_font_size"]' ).val( '20px' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="service_price_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 ),
			//   jQuery('select[name="title_font-weight"]').val("Raleway").attr("selected",!0),

			// Category Description
			jQuery( 'select[name="tab_description_font_size"]' ).val( '' ).attr( 'selected', ! 0 ),
			jQuery( 'select[name="tab_description_font"]' ).val( 'Montserrat' ).attr( 'selected', ! 0 ),
			jQuery( 'input[name="tab_description_color"]' ).wpColorPicker( 'color', '#7c7c7c' ),
			jQuery( 'select[name="tab_description_font-weight"]' ).val( '400' ).attr( 'selected', ! 0 )
		);
	},
);

const change_lang = jQuery( '.change_lang' ).val();
const save_lang = jQuery( '.save_lang' ).val();
if ( change_lang !== '' ) {
	if ( change_lang == 'EN' ) {
		var cat_name = 'Category Name ';
		var cat_des = 'Category Description ';
		var service_name = 'Item Name ';
		var service_button = 'Button Text ';
		var service_button_url = 'Button URL ';
		var service_regular_price = 'Regular Price ';
		var service_price = 'Price ';
		var service_des = 'Description ';
		var service_image = 'Product/Service Image ';
		var service_long_description = 'Long Description ';
	}

	if ( change_lang == 'SP' ) {
		var cat_name = 'nombre de la categor�a';
		var cat_des = 'Descripci�n de categor�a ';
		var service_name = 'Nombre del Servicio';
		var service_button = 'Botón de servicio';
		var service_button_url = 'URL del botón de servicio';
		var service_regular_price = 'Precio regular ';
		var service_price = 'Precio del servicio ';
		var service_des = 'Descripci�n del servicio ';
		var service_image = 'Imagen de servicio ';
		var service_long_description = 'Long Description';
	}

	if ( change_lang == 'FR' ) {
		var cat_name = 'Nom de cat�gorie';
		var cat_des = 'description de la cat�gorie ';
		var service_name = 'Nom du service';
		var service_button = 'Bouton de service';
		var service_button_url = 'URL du bouton de service';
		var service_regular_price = 'Prix régulier ';
		var service_price = 'Prix du service ';
		var service_des = 'Description du service ';
		var service_image = 'Image de service ';
		var service_long_description = 'Long Description';
	}

	if ( change_lang == 'DE' ) {
		var cat_name = 'categorie naam';
		var cat_des = 'categorie beschrijving ';
		var service_name = 'Servicenaam';
		var service_button = 'Serviceknop';
		var service_button_url = 'Service Button URL ';
		var service_regular_price = 'Normale prijs ';
		var service_price = 'Serviceprijs ';
		var service_price = 'Serviceprijs ';
		var service_des = 'Servicebeschrijving ';
		var service_image = 'Service afbeelding ';
		var service_long_description = 'Long Description';
	}
} else {
	if ( jQuery.trim( save_lang ) == 'EN' ) {
		var cat_name = 'Category Name ';
		var cat_des = 'Category Description ';
		var service_name = 'Item Name ';
		var service_button = 'Button Text ';
		var service_button_url = 'Button URL ';
		var service_regular_price = 'Regular Price ';
		var service_price = 'Price ';
		var service_des = 'Description ';
		var service_image = 'Product/Service Image ';
		var service_long_description = 'Long Description ';
	}

	if ( jQuery.trim( save_lang ) == 'SP' ) {
		var cat_name = 'nombre de la categor�a';
		var cat_des = 'Descripci�n de categor�a ';
		var service_name = 'Nombre del Servicio';
		var service_button = 'Botón de servicio';
		var service_button_url = 'URL del botón de servicio';
		var service_regular_price = 'Precio regular';
		var service_price = 'Precio del servicio';
		var service_des = 'Descripci�n del servicio ';
		var service_image = 'Imagen de servicio';
		var service_long_description = 'Long Description';
	}

	if ( jQuery.trim( save_lang ) == 'FR' ) {
		var cat_name = 'Nom de cat�gorie';
		var cat_des = 'description de la cat�gorie ';
		var service_name = 'Nom du service';
		var service_button = 'Bouton de service';
		var service_button_url = 'URL du bouton de service';
		var service_regular_price = 'Prix régulier';
		var service_price = 'Prix du service';
		var service_des = 'Description du service ';
		var service_image = 'Image de service';
		var service_long_description = 'Long Description';
	}

	if ( jQuery.trim( save_lang ) == 'DE' ) {
		var cat_name = 'categorie naam';
		var cat_des = 'categorie beschrijving ';
		var service_name = 'Servicenaam';
		var service_button = 'Serviceknop';
		var service_button_url = 'Service Button URL';
		var service_regular_price = 'Normale prijs';
		var service_price = 'Serviceprijs';
		var service_des = 'Servicebeschrijving ';
		var service_image = 'Service afbeelding';
		var service_long_description = 'Long Description';
	}
}

function get_category_id( wrapper_id ) {
	const cat_input = jQuery( wrapper_id ).find( '.category_name' );
	if ( cat_input.length > 0 ) {
		const _name = cat_input.last().attr( 'name' );
		return get_cat_id_from_name( _name );
	}
	return 0;
}

function get_category_count( wrapper_id ) {
	const cat_input = jQuery( wrapper_id ).find( '.category_name' ); if ( cat_input.length > 0 ) {
		return cat_input.length;
	}
	return 0;
}
function get_category_max( wrapper_id ) {
	const cat_input_ids = jQuery( wrapper_id ).find( '.category_name' ).map( ( i, e ) => parseInt( e.getAttribute( 'id' ).split( '_' )[ 1 ] ) ).get();
	const cat_input_id_max = Math.max( ...cat_input_ids );
	return cat_input_id_max;
}

function get_cat_id_from_name( name_string ) {
	const match = name_string.match( /category\[(.*?)\]\[name\]/ );
	if ( null == match ) {
		return null;
	}
	return match[ 1 ];
}

function get_service_id_for_add_service_link( add_service_ele ) {
	const category_row = get_category_row_from_add_remove_service_link( add_service_ele ); const service_name_input = category_row.find( '.service-price-length-rows-wrapper .service_name' ); if ( service_name_input.length > 0 ) {
		const _name = service_name_input.last().attr( 'name' ); return get_service_id_from_name( _name );
	}
	return null;
}

function get_service_id_from_name( name_string ) {
	const match = name_string.match( /category\[(\d+)\]\[(\d+)\]\[service_name\]/ ); if ( null == match ) {
		return null;
	}
	return match[ 2 ];
}

function generate_category_data( cat_id ) {
	const result = { name: 'category[' + cat_id + '][name]', id: 'category_' + cat_id + '_name', label: cat_name + '(' + cat_id + ')' }; return result;
}

function generate_service_data( e, r ) {
	return {
		service_name: {
			name: 'category[' + e + '][' + r + '][service_name]',
			id: 'category_' + e + '_' + r + '_service_name',
			label: service_name + '(' + r + ')',
		},
		service_regular_price: {
			name: 'category[' + e + '][' + r + '][service_regular_price]',
			id: 'category_' + e + '_' + r + 'service_regular_price',
			label: service_regular_price + '(' + r + ')',
		},
		service_price: {
			name: 'category[' + e + '][' + r + '][service_price]',
			id: 'category_' + e + '_' + r + '_service_price',
			label: service_price + '(' + r + ')',
		},
		service_desc: {
			name: 'category[' + e + '][' + r + '][service_desc]',
			id: 'category_' + e + '_' + r + '_service_desc',
			label: service_des + '(' + r + ')',
		},
		service_button: {
			name: 'category[' + e + '][' + r + '][service_button]',
			id: 'category_' + e + '_' + r + '_service_button',
			label: service_button + '(' + r + ')',
		},
		service_button_enable: {
			name: 'category[' + e + '][' + r + '][service_button_enable]',
			id: 'category_' + e + '_' + r,
			label: service_button + '(' + r + ')',
		},
		service_button_url: {
			name: 'category[' + e + '][' + r + '][service_button_url]',
			id: 'category_' + e + '_' + r + '_service_button_url',
			label: service_button_url + '(' + r + ')',
		},
		service_image: {
			name: 'category[' + e + '][' + r + '][service_image]',
			id: 'category_' + e + '_' + r + '_service_image',
			label: service_image + '(' + r + ')',
		},
		service_long_description: {
			name: 'category[' + e + '][' + r + '][service_long_description]',
			id: 'category_' + e + '_' + r + '_service_long_description',
			label: service_long_description + '(' + r + ')',
		},
	};
}

function update_category_row_html( cat_wrapper, cat_id, service_id ) {
	const _cat_data = generate_category_data( cat_id ); const cat_name_row = cat_wrapper.find( '.category-name-row:first' ); const _label = cat_name_row.find( 'label' ); _label.attr( 'for', _cat_data.id ); _label.html( _cat_data.label ); const cat_des_row = cat_wrapper.find( '.category-description-row:first' ); const _label1 = cat_des_row.find( 'label' ); _label1.attr( 'for', 'category_' + cat_id + '_description' ); _label1.html( cat_des + '(' + cat_id + ')' ); const _input = cat_name_row.find( 'input.category_name' ); _input.attr( 'name', _cat_data.name ); _input.attr( 'id', _cat_data.id ); const _textarea = cat_des_row.find( 'textarea.category_description' ); _textarea.attr( 'name', 'category[' + cat_id + '][description]' ); _textarea.attr( 'id', 'category_' + cat_id + '_description' ); update_service_rows_html( cat_wrapper.find( '.service-price-length-rows-wrapper:last' ), cat_id, service_id ); return cat_wrapper.find( '.category-row' ).html();
}

function update_service_rows_html( e, r, i ) {
	// console.log( e );
	const t = e.find( '.service-price-length' ),
	  a = generate_service_data( r, i );
	let attrValue = null;
	// let d = null;
	// console.log( a );
	const n = jQuery( t[ 0 ] );
	( attrValue = n.find( 'label' ) ).attr( 'for', a.service_name.id ),
	  attrValue.html( a.service_name.label ),
	  ( d = n.find( 'input.service_name' ) ).attr( 'name', a.service_name.name ),
	  d.attr( 'id', a.service_name.id );
	  const g = jQuery( t[ 1 ] );
	  ( attrValue = g.find( 'label' ) ).attr( 'for', a.service_regular_price.id ),
	attrValue.html( a.service_regular_price.label ),
	( d = g.find( 'input.service_regular_price' ) ).attr(
		'name',
		a.service_regular_price.name,
	),
	d.attr( 'id', a.service_regular_price.id );
	const p = jQuery( t[ 2 ] );
	( attrValue = p.find( 'label' ) ).attr( 'for', a.service_long_description.id ),
	  attrValue.html( a.service_long_description.label ),
	( d = p.find( 'textarea.service_long_description' ) ).attr(
		'name',
		a.service_long_description.name,
	),
	  d.attr( 'id', a.service_long_description.id );
	const c = jQuery( t[ 3 ] );
	( attrValue = c.find( 'label' ) ).attr( 'for', a.service_price.id ),
	  attrValue.html( a.service_price.label ),
	  ( d = c.find( 'input.service_price' ) ).attr( 'name', a.service_price.name ),
	  d.attr( 'id', a.service_price.id );
	const l = jQuery( t[ 4 ] );
	( attrValue = l.find( 'label' ) ).attr( 'for', a.service_desc.id ),
	  attrValue.html( a.service_desc.label ),
	  ( d = l.find( 'input.service_desc' ) ).attr( 'name', a.service_desc.name ),
	  d.attr( 'id', a.service_desc.id );
	const s = jQuery( t[ 5 ] );
	( attrValue = s.find( 'label' ) ).attr( 'for', a.service_button.id ),
	  attrValue.html( a.service_button.label ),
	  ( d = s.find( 'input.service_button' ) ).attr( 'name', a.service_button.name ),
	  d.attr( 'id', a.service_button.id ),
	  ( d = s.find( 'input.spl_service_button_enable' ) ).attr( 'name', a.service_button_enable.name ),
	  d.attr( 'data-id', a.service_button_enable.id );
	const v = jQuery( t[ 6 ] );
	( attrValue = v.find( 'label' ) ).attr( 'for', a.service_button_url.id ),
	  attrValue.html( a.service_button_url.label ),
	( d = v.find( 'input.service_button_url' ) ).attr(
		'name',
		a.service_button_url.name,
	),
	  d.attr( 'id', a.service_button_url.id );
	_,
	  d,
	  u = jQuery( t[ 7 ] );
	return (
	  ( attrValue = u.find( 'label' ) ).attr( 'for', a.service_image.id ),
	  attrValue.html( a.service_image.label ),
	  ( d = u.find( 'input.service_image' ) ).attr( 'name', a.service_image.name ),
	  d.attr( 'id', a.service_image.id ),
	  e.html()
	);
}

function get_cat_id_service_id_from_add_service_link( add_service_ele ) {
	const category_row = get_category_row_from_add_remove_service_link( add_service_ele ); const _cat_id = get_category_id( category_row ); const _service_id = get_service_id_for_add_service_link( add_service_ele ); return { service_id: _service_id, cat_id: _cat_id };
}

function get_category_row_from_add_remove_service_link( add_service_ele ) {
	const category_row = add_service_ele.parent().parent().parent().parent(); return category_row;
}

function get_category_row_from_copy_icon( copy_icon ) {
	const category_row = copy_icon.parent().parent().parent();
	return category_row;
}

function get_service_rows_from_copy_icon( copy_icon ) {
	const category_row = copy_icon.parent().parent();
	return category_row;
}

function get_service_rows_from_add_remove_service_link( remove_service_ele ) {
	const category_row = remove_service_ele.parent().parent().parent(); return category_row;
}

const setupSurveyModal = ( modal ) => {
	const firstStep = modal.querySelector( '.step1-wrapper' );
	const secondStep = modal.querySelector( '.step2-wrapper' );
	const thirdStep = modal.querySelector( '.step3-wrapper' );
	const closeBtn = modal.querySelector( '[data-dismiss="modal"]' );
	const emailInput = modal.querySelector( '#feedback-email-input' );
	const checkboxOptIn = modal.querySelector( '#feedback-opt-in' );
	const formNonce = modal.querySelector( '.step2-wrapper' ).dataset.nonce;

	modal.classList.remove( 'd-none', 'fade' );
	modal.style.display = 'block';
	// jQuery(modal).removeClass('fade').show(300).trigger('show.bs.modal');

	const responseData = {
		rating: 0,
		text: '',
		email: emailInput.value,
		optedForEmail: checkboxOptIn.checked,
	};

	const ratingChosenText = modal.querySelector( '.rating-chosen' );

	const commentInput = modal.querySelector( '#comments-text-input' );
	const commentSubmitBtn = modal.querySelector( '#comments-submit-btn' );

	const ratingsPicker = modal.querySelector( '.ratings-picker' );
	ratingsPicker.querySelectorAll( 'li' ).forEach( ( li, index ) => {
		li.addEventListener( 'click', ( evt ) => {
			firstStep.classList.add( 'df-spl-d-none' );
			secondStep.classList.remove( 'df-spl-d-none' );
			ratingChosenText.textContent = index + 1;
			responseData.rating = index + 1;
		} );
	} );

	commentInput.addEventListener( 'input', ( evt ) => {
		responseData.text = evt.target.value;
	} );

	emailInput.addEventListener( 'input', ( evt ) => {
		responseData.email = evt.target.value;
	} );

	checkboxOptIn.addEventListener( 'change', ( evt ) => {
		responseData.optedForEmail = evt.target.checked;
		if ( ! evt.target.checked ) {
			delete responseData.email;
		}
	} );

	commentSubmitBtn.addEventListener( 'click', ( evt ) => {
		jQuery.ajax( {
			url:
          ajaxurl +
          '?action=feedback_manage' +
          '&_wpnonce=' +
          formNonce,
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			data: JSON.stringify( responseData ),
			beforeSend() {
				commentSubmitBtn.disabled = true;
				commentSubmitBtn.textContent = 'Submitting...';
			},
			complete( data ) {
				secondStep.classList.add( 'd-none' );
				thirdStep.classList.remove( 'd-none' );
				closeBtn.classList.add( 'd-none' );
		  if ( responseData.rating == 5 ) {
					window.location.href = 'https://wordpress.org/support/plugin/stylish-price-list/reviews/#new-post';
				}
				setTimeout( () => {
					document.querySelector( '#user-scc-sv' ).classList.remove( 'd-block' );
					document.querySelector( '#user-scc-sv' ).classList.add( 'fade', 'd-none' );
					document.querySelector( '#user-scc-sv' ).style.display = 'none';
				}, 300 );
			},
		} );
	} );
};

function sccSkipFeedbackModal() {
	const formNonce = document.querySelector( '.step2-wrapper' ).dataset.nonce;
	jQuery.post( ajaxurl +
		'?action=feedback_manage' +
		'&_wpnonce=' +
		formNonce, {
	  'btn-type': 'skip',
	}, function( response ) {
	  document.querySelector( '#user-scc-sv' ).style.display = 'none';
	} );
}
