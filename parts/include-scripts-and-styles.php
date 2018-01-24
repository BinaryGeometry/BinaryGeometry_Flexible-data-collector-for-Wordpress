<?php


/*-------------------------------------------------------------------------------
  Frontend Javascript and CSS
-------------------------------------------------------------------------------*/
add_action('wp_enqueue_scripts','snowbotica_data_collector_frontend_assets');

if ( ! function_exists( 'snowbotica_data_collector_frontend_assets' ) ) {
    /*
     *  loads the applications css dependancies and theme css files
     */
    function snowbotica_data_collector_frontend_assets() {
      if (is_page_template(SNwB_DATACOLLECTOR_TEMPLATE)) {
        
        wp_enqueue_style( 'snowbotica-data-collector-css', SNwB_DATACOLLECTOR_URL .  'application/frontend/snowbotica-data-collector.css', false, '', 'all');
        
        // wp_enqueue_style( 'snowbotica-data-collector-css', SNwB_DATACOLLECTOR_URL .  'application/dependencies/Zebra_Datepicker-master/dist/css/bootstrap/zebra_datepicker.min.css', false, '', 'all');
        wp_enqueue_style( 'zebra_datepicker_css', SNwB_DATACOLLECTOR_URL .  'application/dependencies/Zebra_Datepicker-master/dist/css/bootstrap/zebra_datepicker.min.css', false, '', 'all');

        wp_enqueue_script( 'zebra_datepicker', SNwB_DATACOLLECTOR_URL .  'application/dependencies/Zebra_Datepicker-master/dist/zebra_datepicker.min.js', array('jquery'), '', true); 
    
        wp_enqueue_script( 'snowbotica-data-collector_js', SNwB_DATACOLLECTOR_URL .  'application/frontend/snowbotica-data-collector.js', array('jquery', 'zebra_datepicker'), '', true); 

        wp_localize_script( 'snowbotica-data-collector_js', 'snwb_datacollector_api_object', array( 
          'ajax_nonce' => wp_create_nonce('snowbotica-data-collector'),
          'ajax_url'   => admin_url( 'admin-ajax.php' ) ,
          // 'partials_path'  => SNwB_DATACOLLECTOR_URL .  '/application/' ,

        ));
      }
    }
}

/*
* Register our angular app - used by meta box initialisation
*/
// function snowbotica_case_study_load_admin_scripts($hook) {
 
//     // if( $hook != 'widgets.php' ) 
//      // return;
    
//     global $post;

//     if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
//         if ( CASESTUDYPOSTTYPE === $post->post_type ) {     
//           wp_enqueue_script( 'angular', SNOWBOTICASLIDES_URL .  'application/dependencies/angular/angular.js', array( 'jquery'), '', true);

//           wp_enqueue_script( 'snowbotica-case-study-slides-config', SNOWBOTICASLIDES_URL .  'application/dashboard/snowbotica-case-study-slides-config.js', array('angular'), '', true );
          
//           wp_localize_script( 'snowbotica-case-study-slides-config', 'snowboticaCaseStudy_slides_config_object', array(
//                   'partials_path' => SNOWBOTICASLIDES_URL .  '/application' 
//               ), '', true);
//         }
//     }

// }

// add_action( 'admin_enqueue_scripts', 'snowbotica_case_study_load_admin_scripts', 10, 1 );