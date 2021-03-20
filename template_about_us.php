<?php /*Template Name: About Us*/ ?>
<?php get_header(); ?>

<div class="about-us-template">
    <div class="header">
        <h1>ABOUT US</h1>
        <p>The Ahmadiyya Muslim Community is a religious organisation with branches in more than 200 countries</p>
    </div>
    <?php
    get_template_part('template-parts/about-us/about-section-1', 'none');
    get_template_part('template-parts/about-us/about-section-2', 'none');
    get_template_part('template-parts/about-us/huzoor-section', 'none');
    get_template_part('template-parts/about-us/huzoor-world-leaders', 'none');
    ?>
</div>

<?php
get_sidebar();
get_footer();
