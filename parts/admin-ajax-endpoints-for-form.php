<?php
/**
  * Saves the submitted form.
  *
  * Parses data into combination of entries and textual json.
  *
  * @return json Object with complete data and reference to stored id.
  */

 // data = $("form").serialize();
 //        console.log(data, snwbDatacollectorAjaxUrl, snwbDatacollectorAjaxNonce)
 //        jQuery.ajax({
 //                    type: 'POST',
 //                    url: snwbDatacollectorAjaxUrl,
 //                    data: {
 //                      action: 'snwb_datacollector_handle_form', 
 //                      security: snwbDatacollectorAjaxNonce,
 //                      data: data
 //                    },
function snwb_datacollector_save_form(){
  //   // Standard wordpress security to stop crsf attacks
  check_ajax_referer( 'snowbotica-data-collector', 'security' );

  // Recieve the returned form data and convert to useable type
  $rawData = $_REQUEST['data'] ;
  parse_str($rawData, $output);

  print_r($output['comments']);
  

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
