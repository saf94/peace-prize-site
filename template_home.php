<?php /*Template Name: Home*/ ?>
<?php get_header(); ?>

<div class="home-template">

    <?php
    get_template_part('template-parts/home-page/home-banner', 'none');
    ?>
    <div class="home-body">
        <div class="bg-pattern">
            <img src="<?php bloginfo('template_url'); ?>/images/background-pattern.png" />
        </div>
        <?php
        get_template_part('template-parts/home-page/home-section-1', 'none');
        get_template_part('template-parts/home-page/home-section-2', 'none');
        get_template_part('template-parts/home-page/home-previous-winners', 'none');
        get_template_part('template-parts/home-page/home-nominate', 'none');
        ?>
    </div>
</div>

<?php
get_footer();
