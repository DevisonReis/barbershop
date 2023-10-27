const isBreakPoint = function( bp ) {
	let bps = [ 320, 480, 600, 768, 1024 ],
		w = jQuery( window ).width(),
		min, max;
	for ( let i = 0, l = bps.length; i < l; i++ ) {
		if ( bps[ i ] === bp ) {
			min = bps[ i - 1 ] || 0;
			max = bps[ i ];
			break;
		}
	}
	return w > min && w <= max;
};

const style10SpyScrolling = ( ) => {
	const categories = document.querySelectorAll( '.spl-s10-cat-wrapper' );

	window.onscroll = ( ) => {
	  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

	  for ( const s in categories ) {
			if ( categories.hasOwnProperty( s ) && ( categories[ s ].offsetTop - 600 ) <= scrollPos ) {
		  const id = categories[ s ].id;
		  document.querySelector( '.active' )?.classList?.remove( 'active' );
		  document.querySelector( `a[href="#${ id }"]` ).classList.add( 'active' );
			}
		}
	};
};

jQuery( document ).ready(
	function( $ ) {
		$( '.spl_main_content_box[id^="spl_"]' ).each(
			( ii, ee ) => {
				const listId = $( ee ).attr( 'id' ).replace( 'spl_', '' );
				$( '.tab-links_spl li a', ee ).add( '.df-spl-style7_cat_tab-container li a', ee ).add( `.spl-style-10-footer-bottom[id^=spl10_${ listId }] .spl-style-10-nav` ).each(
					( i, e ) => {
						e.onclick = function( event ) {
							const config = $( ee ).data( 'config' );
							const targetTabId = event.currentTarget.getAttribute( 'data-href' ).replace( '#', '' );
							const targetTabNode = document.getElementById( targetTabId );
							if ( config.category_select_scrolling == 1 ) {
								setTimeout( () => {
									const yOffset = -300;
									const y = targetTabNode.getBoundingClientRect().top + window.pageYOffset + yOffset;
									window.scrollTo( { top: y, behavior: 'smooth' } );
								}, 300 );
							}
						};
					},
				);
			},
		);
		$( '.cats-dd' ).each(
			( i, e ) => {
            	const selection = new TomSelect(
					e,
					{
						create: true,
						allowEmptyOption: false,
						onChange: ( currentAttrValue ) => {
							jQuery( '.tabs_spl ' + currentAttrValue ).show().siblings().hide();
						},
						onInitialize() {
							if ( this.input.getAttribute( 'data-no-keyboard-popup' ) == 1 ) {
								if ( isBreakPoint( 600 ) || isBreakPoint( 480 ) ) {
									this.control_input.setAttribute( 'disabled', '' );
								}
							}
						},
					},
				);
			},
		);
		$( '.cats-dd-style-8' ).each(
			( i, e ) => {
            	const selection = new TomSelect(
					e,
					{
						create: true,
						allowEmptyOption: false,
						onChange: ( currentAttrValue ) => {
							jQuery( '.style-8-container ' + currentAttrValue ).show( 300 ).siblings( '.tab' ).hide( 300 );
						},
						onInitialize() {
							if ( this.input.getAttribute( 'data-no-keyboard-popup' ) == 1 ) {
								if ( isBreakPoint( 600 ) || isBreakPoint( 480 ) ) {
									this.control_input.setAttribute( 'disabled', '' );
								}
							}
						},
					},
				);
			},
		);
		jQuery( '.tabs_spl .tab-links_spl a' ).on(
			'click',
			function( e ) {
				e.preventDefault();
				const currentAttrValue = jQuery( this ).attr( 'data-href' );
				jQuery( '.tabs_spl ' + currentAttrValue ).show().siblings().hide();
				jQuery( this ).parent( 'li' ).addClass( 'active' ).siblings().removeClass( 'active' );
			},
		);
		/* style 8 tab switch handler */
		jQuery( '.df-spl-style8_cat_tab-container ul li a' ).on(
			'click',
			function( e ) {
				e.preventDefault();
				const currentAttrValue = jQuery( this ).attr( 'data-href' );
				jQuery( '.style-8-container ' + currentAttrValue ).show( 300 ).siblings( '.tab' ).hide( 300 );
				jQuery( this ).parent( 'li' ).addClass( 'active' ).siblings().removeClass( 'active' );
			},
		);
		jQuery( '.spl-mysearch' ).keyup(
			function( event ) {
				const priceListId = $( event.currentTarget ).data( 'target' );
				const $priceList = $( '#' + priceListId );
				const style = $priceList.data( 'style' );
				let $priceItems = $priceList.find( '.internal-box' );
				let isStyle6 = false;
				if ( ! $priceItems.length ) {
					$priceItems = $priceList.find( '.name-price-desc' );
				}
				if ( $priceItems.hasClass( 'style-6-2-section' ) ) {
					$priceItems = $priceList.find( '.style-6-two-column' );
					isStyle6 = true;
				}
				// var $rows = $('#table tr');
				const val = $.trim( $( this ).val() ).replace( / +/g, ' ' ).toLowerCase();
				if ( isStyle6 ) {
					$priceItems.each( ( index, row ) => {
						jQuery( row ).next().show();
					} );
				}
				const filtered = $priceItems.show().filter(
					function() {
						const text = $( this ).find( '.name.a-tag' ).text().replace( /\s+/g, ' ' ).toLowerCase();
						return ! ~text.indexOf( val );
					},
				);
				filtered.hide();
				if ( isStyle6 ) {
					filtered.each( ( index, row ) => {
						jQuery( row ).next().hide();
					} );
				}
				switch ( style ) {
					case 'style_3':
						$( '.grid-sizer', $priceList ).show().filter( ( i, e ) => ! Boolean( $( e ).find( '.internal-box:visible' ).length ) ).hide();
						break;
					case ( 'without_tab' ):
						$( '.head-title.tab-links_spl.spl_cat_title_style_2' ).show().next( '.cat_descreption.row' ).show();
						$( '.style-2-row', $priceList ).show().filter( ( i, e ) => ! Boolean( $( e ).find( '.name-price-desc:visible' ).length ) )
							.each( ( i, e ) => $( e ).prevAll( '.head-title.tab-links_spl.spl_cat_title_style_2:eq(0)' ).hide().next( '.cat_descreption.row' ).hide() );
						break;
					case ( 'without_tab_single_column' ):
						$( '.head-title.tab-links_spl.spl_cat_title_style_2' ).show().next( '.cat_descreption.row' ).show();
						$( '.style-2-row', $priceList ).show().filter( ( i, e ) => ! Boolean( $( e ).find( '.name-price-desc:visible' ).length ) )
							.each( ( i, e ) => $( e ).prevAll( '.head-title.tab-links_spl.spl_cat_title_style_2:eq(0)' ).hide().next( '.cat_descreption.row' ).hide() );
						break;
					case ( 'style_4' ):
						// show them up before applying hide operation
						$( '.head-title.tab-links_spl.head_title_style_3.spl_cat_heading_style_4', $priceList ).show().next( '.cat_descreption.row' ).show();
						// filtering out the grids with items in it
						$( '.for-style-4' ).filter( ( i, e ) => ! Boolean( $( e ).find( '.internal-box:visible' ).length ) )
							.each( ( i, e ) => $( e ).find( '.head-title.tab-links_spl.head_title_style_3.spl_cat_heading_style_4' ).hide().next( '.cat_descreption.row' ).hide() );
					default:
						break;
				}
			},
		);
		jQuery( '.df-spl-style7_cat_tab-container.tabs_spl ul a' ).on(
			'click',
			function( e ) {
				e.preventDefault();
				const currentAttrValue = jQuery( this ).attr( 'data-href' );
				jQuery( '.tabs_spl ' + currentAttrValue ).show().siblings().hide();
				if ( isBreakPoint( 600 ) || isBreakPoint( 480 ) ) {
					jQuery( 'html, body' ).animate(
						{
							scrollTop: ( jQuery( '.tabs_spl ' + currentAttrValue ).offset().top ) - 100,
						},
						500,
					);
				}
				jQuery( this ).parent( 'li' ).addClass( 'active' ).siblings().removeClass( 'active' );
			},
		);
	},
);
