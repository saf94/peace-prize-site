<?php
/**
 * peace prize functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package peace_prize
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'peace_prize_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function peace_prize_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on peace prize, use a find and replace
		 * to change 'peace-prize' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'peace-prize', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'peace-prize' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'peace_prize_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'peace_prize_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function peace_prize_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'peace_prize_content_width', 640 );
}
add_action( 'after_setup_theme', 'peace_prize_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function peace_prize_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'peace-prize' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'peace-prize' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'peace_prize_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function peace_prize_scripts() {
	wp_enqueue_style( 'peace-prize-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'peace-prize-style', 'rtl', 'replace' );

	wp_enqueue_script( 'peace-prize-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	
	wp_enqueue_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js', array(), false, true );
	wp_enqueue_script( 'gsap-js-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js', array(), false, true );

	// deregister default jQuery included with Wordpress
	wp_deregister_script( 'jquery' );

	$jquery_cdn = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
	wp_enqueue_script( 'jquery', $jquery_cdn, array(), '3.4.1', true );

	//ADD CUSTOM JS FILES HERE
	wp_enqueue_script( 'home-page', get_template_directory_uri() . '/js/home-page.js', array(), false, true );
	wp_enqueue_script( 'home-banner-resize', get_template_directory_uri() . '/js/home-banner-resize.js', array(), false, true );
	wp_enqueue_script( 'timeline', get_template_directory_uri() . '/js/timeline.js', array(), false, true );
	wp_enqueue_script( 'header', get_template_directory_uri() . '/js/header.js', array(), false, true );

	//ADD CUSTOM CSS/SCSS FILES HERE
	wp_enqueue_style( 'home', get_template_directory_uri() .'/css/home.css', array(), false );
	wp_enqueue_style( 'previous-winners', get_template_directory_uri() .'/css/previous-winners.css', array(), false );
	wp_enqueue_style( 'about-us', get_template_directory_uri() .'/css/about-us.css', array(), false );
	wp_enqueue_style( 'nominate-winner', get_template_directory_uri() .'/css/nominate-winner.css', array(), false );
	wp_enqueue_style( 'header', get_template_directory_uri() .'/css/header.css', array(), false );
	wp_enqueue_style( 'footer', get_template_directory_uri() .'/css/footer.css', array(), false );
	wp_enqueue_style( 'custom-fa', 'https://use.fontawesome.com/releases/v5.15.3/css/all.css', array(), false );

}
add_action( 'wp_enqueue_scripts', 'peace_prize_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

