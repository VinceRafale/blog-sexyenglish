<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'blog_sexyenglish');

/* MYSQL LOCAL */
/*
define('DB_USER', 'root');
define('DB_PASSWORD', 'N1tr0g3n0');
*/

/* MYSQL REMOTO  */
define('DB_USER', 'sexyenglish');
define('DB_PASSWORD', 'Or0p3nd0l4');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Q<AYg+aDW8~V(l~U?KF1U53IJ<iw/e,-#v!.cR*9G|0o-Sa]|b7j!wA$OIjTvh2y');
define('SECURE_AUTH_KEY',  'qlq6f0fVSu#9bXGUT-l|eQ9LWp=Us6$wG],Nl5B4>wT;?Ne{yOLWr-bl[3|CRYBF');
define('LOGGED_IN_KEY',    '5y<AZqEX-*`I!p!O8+d-Fkb~_+$x+2Z+6g~g3I|Qd7WB8S6`q]jr(xj{zczchhP.');
define('NONCE_KEY',        ' 59a|h&!+H[@,</=xR/0VQMl),7_cXk+fqc6B$ucE[tk;v[~@Q.%2tU0tY8@j4+@');
define('AUTH_SALT',        '_C-[^a6u-X)&W${(`rk4YAKr*|S;u!6++1TP15%Z5vyJ7wUu/od9dkOEmV5CDejj');
define('SECURE_AUTH_SALT', '@Ssy5Uje_]J(lIIpp6PT}|}Rxdnkd*d)~FCeSz_)]cs*q^Paow?pC}%^`}!6*~8<');
define('LOGGED_IN_SALT',   '_fjY!$zf@&.uJp;>$E&c0ubUqd?ujYk;Jd?gHJl.w/1Iw@tbMdP&U@CtR>z^x*ss');
define('NONCE_SALT',       'a>u!#gf5BVWI{2<_6Qhgm|qAYIQQd7;gw-7*uI7N-Gyo06MjZ@.Ol?I]+%ZYAj0^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define ('WPLANG', 'es_ES');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
