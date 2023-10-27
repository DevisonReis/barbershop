<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
* Kick-in the class
*/
class Stylish_Price_List_Tabs {
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'wp_ajax_feedback_manage', array( $this, 'feedback_manage' ) );
	}
	/**
	 * Add menu items
	 *
	 * @return void
	 */
	public function admin_menu() {
		$icon_url = SPL_URL . 'assets/images/spl_icon.png';
		/** Top Menu **/
		add_menu_page( __( 'Stylish Price List', 'spl' ), __( 'Stylish Price List', 'spl' ), 'manage_options', 'spl-tabs', array( $this, 'plugin_page' ), $icon_url, 99 );
		add_submenu_page( 'spl-tabs', __( 'All Lists', 'spl' ), __( 'All Lists', 'spl' ), 'manage_options', 'spl-tabs', array( $this, 'plugin_page' ) );
		add_submenu_page( 'spl-tabs', __( 'Add New List', 'spl' ), __( 'Add New List', 'spl' ), 'manage_options', 'spl-tabs-new', array( $this, 'plugin_page_new' ) );
		add_submenu_page( 'spl-tabs', __( 'SPL Diagnostic', 'spl' ), __( 'SPL Diagnostic', 'spl' ), 'manage_options', 'spl-tabs-diagnostic', array( $this, 'plugin_page_diagnostic' ) );
	}
	public function plugin_page_new() {
		$template = dirname( __FILE__ ) . '/views/tabs-new.php';
		if ( file_exists( $template ) ) {
			include $template;
		}
	}
	public function plugin_page_diagnostic() {
		$template = dirname( __FILE__ ) . '/views/spl-diagnostic.php';
		if ( file_exists( $template ) ) {
			include $template;
		}
	}
	/**
	 * Handles the plugin page
	 *
	 * @return void
	 */
	public function plugin_page() {
		// phpcs:ignore
		$action = isset( $_REQUEST['action'] ) ? sanitize_text_field($_REQUEST['action']) : 'list';
		// phpcs:ignore
		$id     = isset( $_REQUEST['id'] ) ? intval( $_REQUEST['id'] ) : 0;
		switch ( $action ) {
			case 'view':
				$template = dirname( __FILE__ ) . '/views/tabs-single.php';
				break;
			case 'edit':
				$template = dirname( __FILE__ ) . '/views/tabs-edit.php';
				break;
			case 'new':
				$template = dirname( __FILE__ ) . '/views/tabs-new.php';
				break;
			case 'readonly':
				$template = dirname( __FILE__ ) . '/views/tabs-readonly.php';
				break;
			case 'delete':
				// phpcs:ignore
				$ids = isset( $_REQUEST['ids'] ) ? wp_unslash( $_REQUEST['ids'] ) : null;
				if ( ! empty( $ids ) ) {
					foreach ( $ids as $key => $id ) {
						df_spl_delete_tabs_by_id( $id );
					}
				} elseif ( ! empty( $id ) ) {
					df_spl_delete_tabs_by_id( $id );
				}
				$template = dirname( __FILE__ ) . '/views/tabs-list.php';
				break;
			case 'duplicate':
				$template = dirname( __FILE__ ) . '/views/duplication-process.php';
				break;
			default:
				$template = dirname( __FILE__ ) . '/views/tabs-list.php';
				break;
		}
		if ( file_exists( $template ) ) {
			include $template;
		}
	}
	/**
	* Response to ajax calls
	*
	* @return void
	*/
	public function feedback_manage() {
		check_ajax_referer('spl-feedback-modal');
		$args = isset( $_POST['btn-type'] ) ? sanitize_text_field( $_POST['btn-type'] ) : false;
		$data = null;
		if ( $args ) {
			$data = $this->feedback_invokation( $args );
		}
		wp_send_json(
			array(
				'ok' => $data,
			)
		);
	}
	/**
	* Sets feedback modal invokation to compare against 'spl_save_count' option
	*
	* @return integer
	*/
	public function feedback_invokation( $args ) {
		$save_count         = get_option( 'spl_save_count' );
		$current_invokation = get_option( 'spl_feedback_invoke' );
		$invoke_at          = 0;
		switch ( $args ) {
			case 'skip':
				$invoke_at = $save_count + 5;
				if ( get_option( 'spl_feedback_invoke' ) !== 'disabled' ) {
					update_option( 'spl_feedback_invoke', $invoke_at );
				}
				break;
			case 'yes':
				update_option( 'spl_feedback_invoke', 'disabled' );
				break;
			case 'no':
				update_option( 'spl_feedback_invoke', 'disabled' );
				break;
			default:
				if ( $current_invokation && $current_invokation != 'disabled' ) {
					$invoke_at = $current_invokation;
				} elseif ( $current_invokation == 'disabled' ) {
					$invoke_at = 0;
				} else {
					$invoke_at = 9;
				};
				break;
		}
		return (int) $invoke_at;
	}
}
new Stylish_Price_List_Tabs();
