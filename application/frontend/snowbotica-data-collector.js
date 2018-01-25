
var snwbDatacollectorAjaxNonce = window.snwb_datacollector_api_object.ajax_nonce;
var snwbDatacollectorAjaxUrl = window.snwb_datacollector_api_object.ajax_url;

(function( $ ) {
 	var target = '.snwb-multipart-form form .wrapper';
 	// a useful object
 	var list = [];
 	var width = $(target).width();
 	console.log(width);
 	// $(target).css({
 	// 	'min-width':width+'px'
 	// });
 	// $(target).append('<h1 style="width:100%">titld</h1>')

 	 	
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
 				// move current/previous slide off left
 				$(target).find('.multipart-section[data-position="'+position+'"]').css({
 					left: -width+'px'
 				});
 				// move next slide to middle
 				$(target).find('.multipart-section[data-position="'+(position + 1)+'"]').css({
 					left: '0px'
 				});	
 				// focus on topmost form element
 				// $(target).find('.multipart-section[data-position="'+(position + 1)+'"]')
 				// .find(':input[tabindex='+tabIndex+']').focus();

 			});

 			// form:moveBackward
 			$formSection.on('form:moveBackward', function(event, position, tabIndex){ 
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
 				$formSection.css({
 					left: width+'px'
 				})
 			} else {
 				$formSection.css({
 					left: '0px'
 				})
 			}
 			
 	
 		})
 		$('.dob-datepicker').Zebra_DatePicker();


 		
 	// console.log(list);
})(jQuery);
