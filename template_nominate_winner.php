<?php /*Template Name: Nominate Winner*/ ?>
<?php get_header(); ?>

<div class="nominate-winner-template">
    <div class="header">
        <h1>NOMINATE WINNER</h1>
    </div>
    <?php
    get_template_part('template-parts/nominate-winner/criteria', 'none');
    ?>
</div>

<?php
get_footer();
