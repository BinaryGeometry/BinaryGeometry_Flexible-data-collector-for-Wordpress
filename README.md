# Snowbotica Data Collector

### A custom post type created by flexible multipart form

The plugin aims to be functional out of the box and a practical easy to modify jumping off point for customisation and development.

## Features

* Creates new post type 'Collected Data'
* Creates custom database table to store form data in a flexible and extendible way
* Adds frontend page template 
* Provides and easy to extend and configure mulitpart form
* Animates in thank you message when form submits

## Installation

Enable the plugin through your Wordpress dashboard. You now have the ability to assign SNWB Form Template to your pages, data collected through this form will be available in the dashboard under Collected Data.

## What is included in the box

### snowbotica-data-collector.php

Sets up post type constants and included set up files

### data_collector-template.php

A frontend template to display the form as a Wordpress page

### parts/set-up-post-type-with-templates.php

Creates a custom post type to save our form data and makes available our custom template to Wordpress

### parts/create-database-table.php

Creates a seperate database table to store form data associated with post

### parts/admin-ajax-endpoints-for-form.php

The endpoint for our forms submit behaviour. Creates a new post and new entry in custom table which is associated with post using meta field.

### parts/include-scripts-and-styles.php

Enques scripts and passes required constants to the javascript Window of the page

### application/frontend/snowbotica-data-collector.css

The css that makes the form work with very basic style opinions

### application/frontend/snowbotica-data-collector.js

The code that runs the form.

### Third party libraries

#### application/dependancies/jquery/*
#### application/dependancies/jquery-validation-1.17.0/*
#### application/dependancies/Zebra_Datepicker-master/*


## Todo

* Server and client side form validation
* Date chooser needs configured to make selecting year easier
* Add support for select, checkbox and media upload form inputs
* Database table to be associated with custom post
* Add thank you message on succesful completion of form