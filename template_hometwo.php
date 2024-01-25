<?php /*Template Name: HomeTwo*/ ?>
<?php get_header(); ?>

<div class="home-template">
    <?php
    get_template_part('template-parts/home-page-2/home-banner', 'none');
    ?>
    <div class="home-body">
        <div class="bg-pattern">
            <img src="<?php bloginfo('template_url'); ?>/images/background-pattern.png" />
        </div>
        <?php
        get_template_part('template-parts/home-page-2/home-section-1', 'none');
        get_template_part('template-parts/home-page-2/home-section-2', 'none');
        get_template_part('template-parts/home-page-2/home-previous-winners', 'none');
        get_template_part('template-parts/home-page-2/home-nominate', 'none');
        ?>
    </div>
</div>

<?php
get_footer();
