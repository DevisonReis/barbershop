<?php

// Add dynamic version to css and js files when in beta mode
if ( ! function_exists( 'df_spl_get_file_version' ) ) {
	function df_spl_get_file_version( $file ) {
		$version = STYLISH_PRICE_LIST_VERSION;
		if ( file_exists( $file ) && STYLISH_PRICE_LIST_BETA === true ) {
			$version = $version . '.' . filemtime( $file );
		}
		return $version;
	}
}

