
var snwbDatacollectorAjaxNonce = window.snwb_datacollector_api_object.ajax_nonce;
var snwbDatacollectorAjaxUrl = window.snwb_datacollector_api_object.ajax_url;

(function( $ ) {
 	var target = '.snwb-multipart-form form .wrapper';
 	// a useful object
 	var list = []

 	 	
 		$(target).find('.multipart-section').each(function(){
 			var $formSection = $(this); // the current section
 			var position = $formSection.data('position'); // the position of the current section

 			// save position
 			list.push({position:position, element: $(this)});

 			// var next = $formSection.find('.snwb-next') //  
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
 			// bind submit handlers to form
 			$formSection.find('.snwb-submit').on('click', function(e){
 				e.preventDefault();
 				var $target = $(this).closest('.multipart-section');
 				$target.trigger('form:submitForm');
 			});

 			// form:moveForward
 			$formSection.on('form:moveForward', function(event, position, tabIndex){ 
 				console.log('moving forward from: ', position, tabIndex)
 				// change to new form section
 				$(target).find('.multipart-section[data-position="'+position+'"]').hide();
 				$(target).find('.multipart-section[data-position="'+(position + 1)+'"]').show();
 				// focus on topmost form element
 				$(target).find('.multipart-section[data-position="'+(position + 1)+'"]')
 				.find(':input[tabindex='+tabIndex+']').focus();

 			});

 			// form:moveBackward
 			$formSection.on('form:moveBackward', function(event, position, tabIndex){ 
 				console.log('moving backward from: ', position, tabIndex)
 				// change to previous form section
 				$(target).find('.multipart-section[data-position="'+position+'"]').hide()
 				$(target).find('.multipart-section[data-position="'+(position - 1)+'"]').show()
 				
 				// focus on topmost form element
 				$(target).find('.multipart-section[data-position="'+(position - 1)+'"]').show()
 				.find(':input[tabindex='+tabIndex+']').focus();
 			});

 			// form:submitForm
 			$formSection.on('form:submitForm', function(event){
 				console.log('form submitting')
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
 		
 			// only show first section of form
 			if( $formSection.data('position') != 1){
 				// $formSection.hide()
 			} 
 			
 	
 		})
 		


 		
 	// console.log(list);
})(jQuery);
