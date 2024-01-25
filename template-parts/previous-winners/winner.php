<?php
$year = $args['year'];
$header = $args['header'];
$image = $args['image'];
$title = $args['title'];
$details = $args['details'];
?>

<div class="prev-winner">
    <div class="prev-winner-image">
        <img src="<?php echo $image ?>" />
    </div>
    <div class="prev-winner-marker prev-winner-marker-<?php echo $year ?>"></div>
    <div class="prev-winner-details">
        <p><?php echo $year ?> winner</p>
        <h2><?php echo $header ?></h2>
        <h4><?php echo $title ?></h4>
        <p><?php echo $details ?></p>
    </div>
</div>