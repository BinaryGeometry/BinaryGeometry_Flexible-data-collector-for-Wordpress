
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

    // FormValidator.prototype._validateOne = function(key) {
        // this.errors = [];
// console.log(key)
        // for (var key in this.fields) {
            // if (this.fields.hasOwnProperty(key)) {
		          //       var field = this.fields[key] || {},
		          //           element = this.form[field.name];

		          //       if (element && element !== undefined) {
		          //           field.id = attributeValue(element, 'id');
		          //           field.element = element;
		          //           field.type = (element.length > 0) ? element[0].type : element.type;
		          //           field.value = attributeValue(element, 'value');
		          //           field.checked = attributeValue(element, 'checked');

		                    
		          //            * Run through the rules for each field.
		          //            * If the field has a depends conditional, only validate the field
		          //            * if it passes the custom function
		                     

		          //           if (field.depends && typeof field.depends === "function") {
		          //               if (field.depends.call(this, field)) {
		          //                   this._validateField(field);
		          //               }
		          //           } else if (field.depends && typeof field.depends === "string" && this.conditionals[field.depends]) {
		          //               if (this.conditionals[field.depends].call(this,field)) {
		          //                   this._validateField(field);
		          //               }
		          //           } else {
		          //               this._validateField(field);
		          //           }
		          //       }
            // // }
        // }
    // }


(function( $ ) {
	
	var validator = new FormValidator('snwb_dataCollector_validate_this', [
		{
		    name: 'name',
		    display: 'Name',
		    rules: 'required|callback_double_barrel',
		    onBlur: true
		},
		{
	    	name: 'email',
	    	display: 'Email',
	    	rules: 'required|valid_email'
		},
		{
	    	name: 'gender',
	    	display: 'Gender',
	    	rules: 'required'
		},
		{
	    	name: 'dob',
	    	display: 'Date of Birth',
	    	rules: 'required|callback_date'
		},
		{
	    	name: 'telephone',
	    	display: 'Telephone number',
	    	rules: 'required|numeric'
		},
		{
	    	name: 'comments',
	    	display: 'Comments',
	    	rules: 'required'
	    	// rules: 'callback_snwb_comments'
		}  
	], function(errors, event) {
	    if (errors.length > 0) {
	    	console.log('errors', errors, event)	        
	    }
	});

	// console.log(validator)


		// validator._validateOne('comments')


	// validator.registerCallback('double_barrel', function(value) {
	// 	var value = value,
	// 		valid = /\s/,
	// 		k = valid.test(value);
	    
	//     if (k) {
	//         return true;
	//     }
	//     return false;
	// }).setMessage('double_barrel', "Please use both names");

	// validator.registerCallback('date', function(value) {
	//     var value = value,
	//     	// valid = /^\d{2}([./-])\d{2}\1\d{4}$/, /* doesn't match date
	//     	valid = value,
	//     	k = valid.test(valid)
	//     if (k) {
	//     	return true;
	//     }
	//     return false;
	// }).setMessage('date', "Please use a valid date");

	// validator.registerCallback('snwb_comments', function(value) {
	    // if (value !== '') {
		   // 	return true;
	    // }

	//     return false;
	// }).setMessage('snwb_comments', "Please say something");


 	
	$('.dob-datepicker').Zebra_DatePicker({
		format: 'm-d-Y'
	});

	var snwbValid = function(field){
		var field = field;
		console.log(field)
		var $field = $('[name="'+field+'"]'),
		    $errBox = $field.siblings('.displaying-errors');
		this.state = 'libertentia'
		$field.unbind('blur');
		$field.on('blur', function(e){
			var valid = validator.validateOne(field),
			message
			
			if(valid === true){
				$errBox.removeClass('true').hide(100)
				this.state = 'valid';
				// console.log(this.state)
			} else {
				message = snwbErrorString(valid);
				$errBox.html(message).show(100).addClass('true');
				this.state = 'invalid';
				// console.log(this.state)
			} 
		});
		return $field;
	}
	function snwbErrorString(eros){
		var html = '';
		for (var i = eros.length - 1; i >= 0; i--) {
			console.log(i, eros[i], html)
			html += '<p>';
			html += eros[i].message
			html += '</p>';
		}
		return html;
	}

	snwbValid('comments');
	snwbValid('telephone');

	function snwbSectionValidator($section){
		// var array  = $(section).find('input')
		var $array  = $section.find(':input')
		var valid   = 'valid';

		
		$array.each(function(e){
			var name, comments, validfield;
			
			name = $(this).attr('name');
			console.log('nnnnam', name);

			comments = snwbValid(name);
			comments.trigger('blur')
			
			validfield = validator.validateOne(name);
			// by defualt our form is invalid 
			if (typeof validfield == 'object'){
				valid = 'invalid';
			} 
		})

		return valid;
	}

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
			
			var sectionValidator = snwbSectionValidator($target); // possibly should be a singlton
			
			console.log('aidsofdsofidof', sectionValidator)
			
			if(sectionValidator !== 'invalid'){
			
				var tabIndex = (Number( $(this).attr('tabIndex') ) + 1);

				$target.trigger('form:moveForward',[position, tabIndex]);
			}
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
		if( $formSection.data('position') != 1){
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


	$('#valid-form').on('submit', function(e){
		
		e.preventDefault();

		console.log('blah')

	// 	var p = submitForm();
	// 	console.log('return p', p)

	// 	// $form.trigger('form:submitForm');
	// 	// var e = $target.trigger('form:submitForm');
	// 	// $form.trigger('form:sayThanks');
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
	// $form.on('form:submitForm', function(event){
	function submitForm(){
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
        	success: function (posturl) {
				sayThanks(posturl);
        	}
    	});
    	return d;
	}; 
	function sayThanks(message){
		console.log('thanks', message);
		var box = '.thank-you-box',
			inbox = '.thank-you-box-inner';

		$(section).fadeOut(400, function(){

			$(box).show(10, function(){
			
				var p = $(inbox).find('h1').val();
				console.log('text here', p)
				p = p + ' ' + message;
				// .append(message)
				
				$(inbox)
				.css({
					'opacity':1,
					'transform':'scale(1)',
					'-webkit-transform':'scale(1)'
				})	
				$(inbox).html(message);
			});
		});
	}
 		
})(jQuery);
// http://blog.formkeep.com/5-creative-ways-to-use-forms-to-improve-your-ux/
