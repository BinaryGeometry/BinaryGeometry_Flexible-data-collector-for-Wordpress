<?php

global $snwb_collectdata_db_version;
$snwb_collectdata_db_version = '1.2.3';
function snwb_collectdata_entries_install() {
//https://premium.wpmudev.org/blog/creating-database-tables-for-plugins/
//	global $wpdb;
	global $snwb_collectdata_db_version;
	// die; 'this';
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

	$table_name = $wpdb->prefix . 'snwb_collectdata_entries';
	
	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE `$table_name`  (
	id MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	modified DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
	-- form_type TEXT NULL,
	-- job_ref TEXT NULL ,
	owner  MEDIUMINT(9) ,
	-- business TEXT,
	form_data TEXT,
	-- company_contact TEXT,
	-- client TEXT,
	-- site TEXT,
	-- signature TEXT NULL,
	-- pdf VARCHAR(55) NULL,
	PRIMARY KEY (`id`),
	INDEX `owner` (`owner`),
	INDEX `created` (`created`)
	)
	COLLATE='utf8mb4_unicode_ci'
	ENGINE=InnoDB
	;";

	if( $wpdb->get_var( "SHOW TABLES LIKE '{$table_name}'" ) != $table_name ){
		dbDelta( $sql );
		add_option( 'snwb_collectdata_db_version', $snwb_collectdata_db_version );
		
	}

}

function tzu_report_install_data() {
	// global $wpdb;
	
	// $welcome_name = 'Mr. WordPress';
	// $welcome_text = 'Congratulations, you just completed the installation!';
	
	// $table_name = $wpdb->prefix . 'tzu_report';
	
	// $wpdb->insert( 
	// 	$table_name, 
	// 	array( 
	// 		'time' => current_time( 'mysql' ), 
	// 		'name' => $welcome_name, 
	// 		'text' => $welcome_text, 
	// 	) 
	// );
}

// register_activation_hook( __FILE__, 'tzu_report_install' );
register_activation_hook( __FILE__, 'snwb_collectdata_entries_install' );