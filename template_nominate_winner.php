<?php /*Template Name: Nominate Winner*/ ?>
<?php get_header(); ?>

<div class="nominate-winner-template">
    <div class="header">
        <h1>NOMINATE WINNER</h1>
        <p>Read criteria below or click below to go to the nomination form</p>
    </div>
    <div class="criteria-content">
        <p>Islam focuses on securing peace in every sphere of human activity. It encourages all to promote education, respect and tolerance, improve social and interfaith harmony, support charitable causes and serve humanity regardless of race, creed or colour.</p>
        <p>The Ahmadiyya Muslim community is dedicated to establish peace at all levels and to protect the basic human rights of all. In light of this it is keen to recognise efforts made by anyone to advance the cause of peace.</p>
        <p>The Ahmadiyya Muslim Peace Prize is therefore awarded in recognition of an individual’s or an organisation’s contribution for the advancement of the cause of peace.</p>
        <?php
        get_template_part('template-parts/nominate-winner/criteria-dropdown', 'none');
        get_template_part('template-parts/nominate-winner/evidence-dropdown', 'none');
        get_template_part('template-parts/nominate-winner/process-dropdown', 'none');
        get_template_part('template-parts/nominate-winner/exclusions-dropdown', 'none');
        get_template_part('template-parts/nominate-winner/timeline-dropdown', 'none');
        ?>
        <div class="nomination-form">
            <h2>Nomination Form</h2>
            <?php echo do_shortcode('[forminator_form id="56"]'); ?>
        </div>
    </div>
</div>

<?php
get_sidebar();
get_footer();
