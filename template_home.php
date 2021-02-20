<?php /*Template Name: Home*/ ?>
<?php get_header(); ?>

<div class="home-template">
    <?php
    get_template_part('template-parts/home-section-1', 'none');
    get_template_part('template-parts/home-section-2', 'none');
    get_template_part('template-parts/home-previous-winners', 'none');
    get_template_part('template-parts/home-nominate', 'none');
    ?>
</div>

<?php
get_sidebar();
get_footer();
