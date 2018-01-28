<?php
/**
  * Saves the submitted form.
  *
  * Parses data into combination of entries and textual json.
  *
  * @return json Object with complete data and reference to stored id.
  */

function snwb_datacollector_save_form(){
  //   // Standard wordpress security to stop crsf attacks
  check_ajax_referer( 'snowbotica-data-collector', 'security' );

  // Recieve the returned form data and convert to useable type
  $rawData = $_REQUEST['data'] ;
  $output = array();
  parse_str($rawData, $output);

  // save the post data to array
  if(!is_email($output['email'])){
    echo 'email address fail';
  } 
  
  // VALIDATION GOES HERE
  $postInfo = array(
    'name'      => sanitize_text_field($output['name']),
    'email'     => sanitize_email($output['email']),
    'gender'    => sanitize_text_field($output['gender']), 
    'dob'       => sanitize_textarea_field($output['dob']), 
    'telephone' => sanitize_text_field($output['telephone']), 
    'comments'  => sanitize_textarea_field($output['comments']),
  );
  // IF VALID

  /* Create post */
  // echo CASESTUDYPOSTTYPE;
 
  // Create post object
  $my_post = array(
    'post_title'      => $postInfo['name'].' - '.$postInfo['email'].' - '.$postInfo['telephone'],
    'post_content'    => print_r($postInfo, true),
    'post_status'     => 'publish',
    'comment-status'  => 'closed',
    'ping-status'     => 'closed',
    'post_author'     => 1,
    'post_type'       => SNwB_DATACOLLECTOR_POSTTYPE
  );
     
  $post_id = wp_insert_post( $my_post );

  if (is_wp_error($post_id)) {
    $errors = $post_id->get_error_messages();
    foreach ($errors as $error) {
        echo "- " . $error . "<br />";
    }
  }
  
  // echo $post_id;

  // zoom big and fade form page
  // zoom normal from small and fade in other page

 $domain = get_site_url();
  // $url = $domain.'/'.SNwB_DATACOLLECTOR_SLUG.'/'.$post_id;
  $url = get_permalink($post_id);
  $link = "<a href='$url'>Go to data</a>";
  echo $link;
  // echo "Thank you - you are number $post_id. Someone will be in touch shortly";
    // Insert the post into the database and get the resulting id back... 
     // __update_post_meta( $the_post_id, 'my-custom-field', 'my_custom_field_value' );
  
    /* Create entry in custom table */


  // function insertIntoDatabase($form_data){
    // global $wpdb;
    // json_encode($form_data['form_type']);
  //   // set by the database // id mediumint(9) NOT NULL AUTO_INCREMENT,
  //   $data = array(
  //     'form_type' => $form_data->formType,
  //     'modified'  => date('Y-m-d G:i:s'), 
  //     'job_ref'   => $form_data->jobReference, //job_ref text NOT NULL,
  //     'owner'     => get_current_user_id(),     //owner text NOT NULL,
  //     'business'  => json_encode($form_data->business),    // business text NOT NULL,
  //     'engineer'  => json_encode($form_data->engineer),
  //     'client'    => json_encode($form_data->client),
  //     'site'      => json_encode($form_data->site),
  //     'signature' => 'sig',
  //     'form_data' => json_encode($form_data->formData),    // form_data JSON NOT NULL DEFAULT DEFAULT '' NOT NULL,
  //     'pdf'       => 'pdf'           //pdf varchar(55) DEFAULT '' NOT NULL
  //   );
  //   // var_dump($data);die();
  //   $result = $wpdb->insert( $wpdb->prefix . 'tzu_system', $data);
  //   $data['ID'] = $wpdb->insert_id;; // needed to display on frontend with returned data
  //   $data['form_type'] = $form_data->formType; // needed to display on frontend with returned data
  //   // $wpdb->print_error();

  //   // echo $wpdb->insert_id;
  //   echo json_encode($data);
  // }
  // insertIntoDatabase($form_data);
    /* Associate custom table to post meta */
    
  wp_die();
}
add_action('wp_ajax_snwb_datacollector_save_form', 'snwb_datacollector_save_form');
add_action('wp_ajax_nopriv_snwb_datacollector_save_form', 'snwb_datacollector_save_form');

// class Ajax_Controller {
// 
        // add_action( "wp_ajax_nopriv_$action", array ( $this, 'logged_out' ) );

    // public function __construct( $action ) {
        // add_action( "wp_ajax_$action",        array ( $this, 'logged_in' ) );
//     }

//     public function logged_out() {

//         require_once __DIR__ . '/Logged_Out_Data_Interface.php';
//         require_once __DIR__ . '/Logged_Out_Data.php';
//         require_once __DIR__ . '/Logged_Out_View.php';

//         $data = new Logged_Out_Data;
//         $view = new Logged_Out_View( $data );
//         $view->render();
//     }

//     public function logged_in() {

//         require_once __DIR__ . '/Logged_In_Data_Interface.php';
//         require_once __DIR__ . '/Logged_In_Data.php';
//         require_once __DIR__ . '/Logged_In_View.php';

//         $data = new Logged_In_Data;
//         $view = new Logged_In_View( $data );
//         $view->render();
//     }
// }
