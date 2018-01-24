<?php
/*
Plugin Name: Snowbotica Data Collector
Plugin URI: http://binarygeometry.co.uk/products/snowbotica-case-study
Description: Creates a custom post type with built in presentation slideshow
Author: Andrew MacKay
Version: 1.2.3
Author URI: http://binarygeometry.co.uk/
*/

define( 'SNwB_DATACOLLECTOR', plugin_dir_path( __FILE__ ) );
define( 'SNwB_DATACOLLECTOR_URL', plugin_dir_url( __FILE__ ) );

define( 'SNwB_DATACOLLECTOR_POSTTYPE', 'snwb_data_collector' );
define( 'SNwB_DATACOLLECTOR_SLUG', 'collected-data' );

define( 'SNwB_DATACOLLECTOR_TEMPLATE', 'data_collector-template.php' );
define( 'SNwB_DATACOLLECTOR_TEMPLATE_NAME', 'SNWB Form Template' );

# Included parts
/* Registration hooks and functions for browser assets */
include( SNwB_DATACOLLECTOR . '/parts/include-scripts-and-styles.php');

/* Adds a new custom post type to the dashboard and tells Wordpress where to find the template files */
include( SNwB_DATACOLLECTOR . '/parts/set-up-post-type-with-templates.php');

/* Adds a custom sidebar to the included form template page */
// include( SNwB_DATACOLLECTOR . '/parts/set-up-sidebar.php');

/* Uses post meta and Angularjs to attach a presentation slideshow configuration box to post edit screen */
// include( SNwB_DATACOLLECTOR . '/parts/post-meta-set-up.php');

/* Wordpress admin ajax functions for submitting and validating form */
include( SNwB_DATACOLLECTOR . '/parts/admin-ajax-endpoints-for-form.php');

// include( SNwB_DATACOLLECTOR . '/parts/set-up-db.php');