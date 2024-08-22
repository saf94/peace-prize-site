<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package peace_prize
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e(
     'Skip to content',
     'peace-prize'
 ); ?></a>

	<header id="masthead" class="site-header">
			<i class="mobile-nav fa fa-bars"></i>
		<div class="navbar">
		<a href="/">
			<p>Home</p>
		</a>
		<a href="/about-us">
			<p>About Us</p>
		</a>
		<div class="site-logo">
 			<!-- <img class="image-1" src="<?php bloginfo(
        'template_url'
    ); ?>/images/shape.png"/> -->
 			<!-- <img class="image-2" src="<?php bloginfo(
        'template_url'
    ); ?>/images/peace-prize-logo-remove-no-bg.png"/> -->
 			<img class="image-2" src="<?php bloginfo(
        'template_url'
    ); ?>/images/peace-prize-logo-side.png"/>
		</div>
		<a href="/previous-winners">
			<p>Previous Winners</p>
		</a>
		<a href="/nominate-winner">
			<p>Nominate a Winner</p>
		</a>
		</div>
		
	</header><!-- #masthead -->
