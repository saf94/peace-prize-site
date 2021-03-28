<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package peace_prize
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="home-template">
		<?php
		get_template_part('template-parts/home-page/home-banner', 'none');
		get_template_part('template-parts/home-page/home-section-1', 'none');
		get_template_part('template-parts/home-page/home-section-2', 'none');
		get_template_part('template-parts/home-page/home-previous-winners', 'none');
		get_template_part('template-parts/home-page/home-nominate', 'none');
		?>
	</div>

</main><!-- #main -->

<?php
get_footer();
