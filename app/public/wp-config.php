<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'eoLZ9xLOzJJPEBZjxwI2w1aT3STsooXpkgqrX1jDDEBlMUOiD4NRyPNKJgnTJXYm8Nn6iwjdW7HTj6GBSkmifw==');
define('SECURE_AUTH_KEY',  'llmC55GbpBRlUMk8PtjmeX0B2HwOZvvvQ2SGNX3R2qbAstCS9sGqWdrE2bBJsiICv9xWr/s4GvpuqnzfcZF/bw==');
define('LOGGED_IN_KEY',    'jAdxzeNi7bga8x07HXY+QpB7LydPAx2/vo9ISHvg2Ehs2qc6/J46SUPco70bRfSFG1LS3b5sXaJlmeM18uJxrw==');
define('NONCE_KEY',        'YITNSMeTY5uavSOc9zcVtHuvlR2WeKSIpYACMTpbAZqRkQiQE0qIt1oTSlw3r3ARg4Ol0Bysy683LENMYRsQvg==');
define('AUTH_SALT',        '21x4jT1swARf/QxZB1k+pZA1g5KWZ7EtI/ruEFzaD0sDUmipGfzOsR6Z1GRGzMGzlU8L0uEE5jY45ToQhe/SHQ==');
define('SECURE_AUTH_SALT', '3Z0m7LWxeuEOrUlKIfKe7WBQwFdAHXO4HPnU1/lTrbcXyw3VXJjBdRVdULafwpvW/yN21xWlxH7fhYBqsP6Gdw==');
define('LOGGED_IN_SALT',   'mf5fNSDBOS8mYDGE5EOU5a6dXxOa7O/T/fbA5u4xCSkYah8l+KoQ4LOHNWroRp40AlBj4kpRbaz6wYLrGkgnpA==');
define('NONCE_SALT',       '8DMTbankJqSYjKGkhBDrIyIYvnD759vz594UgSNmPntIjzrJHSr7Ka9/Tf9HuvN+7utnlmTBjn6+2NfWK7Actw==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
