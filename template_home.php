<?php /*Template Name: Home*/ ?>
<?php get_header(); ?>

<div class="home-template">
    <?php
    get_template_part('template-parts/home-page/home-banner', 'none');
    get_template_part('template-parts/home-page/home-section-1', 'none');
    get_template_part('template-parts/home-page/home-section-2', 'none');
    get_template_part('template-parts/home-page/home-previous-winners', 'none');
    get_template_part('template-parts/home-page/home-nominate', 'none');
    ?>
</div>

<?php
get_footer();
