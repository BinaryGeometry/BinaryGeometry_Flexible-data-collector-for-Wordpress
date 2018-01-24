<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>

<?php //get_template_part( 'template-parts/featured-image' ); ?>

<!-- <section class="contains-2 snowbotica-case-study"> -->

<section class="snowbotica-case-study container">
	<?php while ( have_posts() ) : the_post(); ?>
	<?php 
	// $sliderMetaJSON = get_post_meta( get_the_ID(), 'location', true ); 
	// $sliderMeta = json_decode($sliderMetaJSON, true);
	// $slides = $sliderMeta['slides'];
	?>
	<div class="row">
	  	<div class="medium-5 large-6 columns">
			<?php //foreach ($slides as $key => $slide):?>
		  	<section class="snwb-multipart-form">
				<form>
					<div class="wrapper">
						<div class="multipart-section" data-position="1">
							<div class="form-element">
								<label>Your Name</label>
								<input type="text" name="Name" data-validate="required" tabindex=1 />
							</div>
							<div class="form-element">
								<label>Your Email</label>
								<input type="email" name="Email" data-validate="required email" tabindex=2 />
							</div>
							<a href="" class="snwb-next" tabindex=3>Continue</a>
						</div>
						<div class="multipart-section" data-position="2">
							<div class="form-element">
								<label>Your gender (because math)</label>
								<input type="radio" name="gender" value="female" data-validate="optional" tabindex=4>
								<label class="radio-label" for="female" >Female</label><br>
								<input type="radio" name="gender" value="male" data-validate="optional" tabindex=5>
								<label class="radio-label" for="male">Male</label><br>
								<input type="radio" name="gender" value="non-binary" data-validate="optional" tabindex=6>
								<label class="radio-label" for="non-binary">Non Binary</label>
							</div>
							<div class="form-element">
								<label>Date of Birth</label>
								<input type="text" name="dob" data-validate="required date" />
								<input type="text" name="dob" class="dob-datepicker" data-validate="optional" tabindex="7">
							</div>
							<a href="" class="snwb-back" data-goto="1">Back</a>
							<a href="" class="snwb-next" data-goto="3" tabindex=8>Continue</a>
						</div>
						<div class="multipart-section" data-position="3">
							<div class="form-element">
								<label>Would you like to leave a telephone number?</label>
								<input type="number" name="telephone" data-validate="optional" tabindex="9">
							</div>
							<div class="form-element">
								<label>Any comments?</label>
								<textarea name="comments" data-validate="optional" tabindex="10"></textarea>
							</div>
							<a href="" class="snwb-back" data-goto="2345">Back</a>
							<input type="submit" class="snwb-submit" value="Send" tabindex="11">
						</div>
					</div>
				</form>
	 		</section>
			<?php //endforeach; ?>
	  	</div>
		<div class="medium-7 large-6  columns">
			<article class="service-info background:#c6c6cf">
				<h2><?php the_title();?></h2>
				<div class="case-study-description">
					<?php the_content();?>
				</div>					
			</article>
		</div>
	</div>
	<?php endwhile;?>
</section>
<?php get_footer();