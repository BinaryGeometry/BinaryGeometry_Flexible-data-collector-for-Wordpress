
var snwbDatacollectorAjaxNonce = window.snwb_datacollector_api_object.ajax_nonce;
var snwbDatacollectorAjaxUrl = window.snwb_datacollector_api_object.ajax_url;

 	// FormValidator.prototype.attributeValue = function (element, attributeName) {
  //       var i;

  //       if ((element.length > 0) && (element[0].type === 'radio' || element[0].type === 'checkbox')) {
  //           for (i = 0, elementLength = element.length; i < elementLength; i++) {
  //               if (element[i].checked) {
  //                   return element[i][attributeName];
  //               }
  //           }

  //           return;
  //       }

  //       return element[attributeName];
  //   };

    /**
     * private function _getValidDate: helper function to convert a string date to a Date object
     * @param date (String) must be in format yyyy-mm-dd or use keyword: today
     * @returns {Date} returns false if invalid
     */
    // FormValidator.prototype.validateField = function(key) {
    

    //       	// if (this.fields.hasOwnProperty(key)) {
    //             var field = this.fields[key] || {},
    //                 element = this.form[field.name];

    //             if (element && element !== undefined) {
    //                 field.id = attributeValue(element, 'id');
    //                 field.element = element;
    //                 field.type = (element.length > 0) ? element[0].type : element.type;
    //                 field.value = attributeValue(element, 'value');
    //                 field.checked = attributeValue(element, 'checked');

                    
    //                  * Run through the rules for each field.
    //                  * If the field has a depends conditional, only validate the field
    //                  * if it passes the custom function
                     

    //                 if (field.depends && typeof field.depends === "function") {
    //                     if (field.depends.call(this, field)) {
    //                         this._validateField(field);
    //                     }
    //                 } else if (field.depends && typeof field.depends === "string" && this.conditionals[field.depends]) {
    //                     if (this.conditionals[field.depends].call(this,field)) {
    //                         this._validateField(field);
    //                     }
    //                 } else {
    //                     this._validateField(field);
    //                 }
    //             }
    //         // }
    	// return;
    // }


(function( $ ) {
	// var validator = new FormValidator('snwb_dataCollector_validate_this', [
	// {
	//     name: 'name',
	//     display: 'required',
	//     rules: 'required|double_barrel'
	// } 
	// ], function(errors, event) {
	//     if (errors.length > 0) {
	//         // Show the errors
	//     }
	// });

	// validator.registerCallback('double_barrel', function(value) {
	// 	var valid = /\s/;
	// 	var value = value;
	// 	var k = valid.test(value);
	// 	alert(k);
	//     if (k) {
	//         return true;
	//     }

	//     return false;
	// })
	// validator.setMessage('double_barrel', "Please use both names");

	// validator.validateField('name');

 	var target = '.snwb-multipart-form form .wrapper',
 		$target = $(target),
 		section = '.multipart-section',
 		$sections = $target.find(section),
 		form = '#valid-form',
 		$form = $target.find(form),
 		list = [],
 		width = $(target).width();
 	// a useful objective

	$target.find('.multipart-section').each(function(){
		
		var $formSection = $(this), // the current section
			position = $formSection.data('position'); // the position of the current section

		// save position
		list.push({position:position, element: $(this)});

		// bind handlers to continue button
		$formSection.find('.snwb-next').on('click', function(e){
			e.preventDefault();
			var $target = $(this).closest('.multipart-section');
			
			var tabIndex = (Number( $(this).attr('tabIndex') ) + 1);

			$target.trigger('form:moveForward',[position, tabIndex]);
		});
		// bind handlers to back button
		$formSection.find('.snwb-back').on('click', function(e){
			e.preventDefault();
			var $target = $(this).closest('.multipart-section');

			// find first element in this section and subtract one from tabindex
			var tabIndex = function(){
				// get the previous form section by subtracting from current position
				var $shortlist = $(target).find('.multipart-section[data-position="'+(position - 1)+'"]');
				// hone in on the first form element (this could be radio group, select, texarea or input)
				$shortlist = $shortlist.find('.form-element').first();
				// now we find the first actual form element
				var $item = $shortlist.find(':input').first() ;
				var tabindex = $item.attr('tabIndex');
				return tabindex;
			}
			$target.trigger('form:moveBackward',[position, tabIndex()]);
		});

		// only show first section of form
		if( $formSection.data('position') != 3){
			// $formSection.hide()
			$formSection.css({
				left: width+'px'
			})
		} else {
			$formSection.css({
				left: '0px'
			})
		}
		

	});

	// $('.dob-datepicker').Zebra_DatePicker();

	// bind submit handlers to form
	$(form).on('submit', function(e){
		// e.preventDefault();

		console.log('blah')
		// var $target = $(this).closest('.multipart-section');
		// $target.trigger('form:submitForm');
	});

	// form:moveForward
	$sections.on('form:moveForward', function(event, position, tabIndex){ 
		console.log('moving forward from: ', position, tabIndex)
		// move current/previous slide off left
		$(target).find('.multipart-section[data-position="'+position+'"]').css({
			left: -width+'px'
		});
		// move next slide to middle
		$(target).find('.multipart-section[data-position="'+(position + 1)+'"]').css({
			left: '0px'
		});	
		// focus on topmost form element /* breaks carousel overflow
		// $(target).find('.multipart-section[data-position="'+(position + 1)+'"]')
		// .find(':input[tabindex='+tabIndex+']').focus();
	});
	// form:moveBackward
	$sections.on('form:moveBackward', function(event, position, tabIndex){ 
		console.log('moving backward from: ', position, tabIndex)
		// change to previous form section
		// move this off left
		$(target).find('.multipart-section[data-position="'+position+'"]').css({
			left:width+'px'
		});
		$(target).find('.multipart-section[data-position="'+(position - 1)+'"]').css({
			left:'0px'

		});
		
		// focus on topmost form element
		$(target).find('.multipart-section[data-position="'+(position - 1)+'"]').show()
		.find(':input[tabindex='+tabIndex+']').focus();
	});
	// form:submitForm
	$form.on('form:submitForm', function(event){
		console.log('form submitting')
		// http://bin.geo/saved-form/?name=&email=&dob=&telephone=&comments=
		var data = $("form").serialize();

		console.log(data, snwbDatacollectorAjaxUrl, snwbDatacollectorAjaxNonce)
		
		jQuery.ajax({
        	type: 'POST',
        	url: snwbDatacollectorAjaxUrl,
        	data: {
        		action: 'snwb_datacollector_save_form', 
        		security: snwbDatacollectorAjaxNonce,
        		data: data
        	},
        	success: function (a) {
            	console.log(a)
        	}
    	});
	}); 
 		
})(jQuery);
