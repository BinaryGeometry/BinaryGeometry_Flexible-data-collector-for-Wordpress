(function( $ ) {
 	var target = '.snwb-multipart-form form .wrapper';
 	// a useful object
 	var list = []

 	 	
 		// function moveForward(event, position){
 		// 	console.log('fun', position)

 		// }

 		$(target).find('.multipart-section').each(function(){
 			var $formSection = $(this) // the current section
 			var position = $formSection.data('position') // the position of the current section

 			// save position
 			list.push({position:position, element: $(this)});

 			// var next = $formSection.find('.snwb-next') //  
 			// bind handlers to continue button
 			$formSection.find('.snwb-next').on('click', function(e){
 				e.preventDefault();
 				// console.log('print', position) 
 				var target = $(this).closest('.multipart-section')
 				target.trigger('form:moveForward',[position]);
 			});
 			$formSection.find('.snwb-back').on('click', function(e){
 				e.preventDefault();
 				var target = $(this).closest('.multipart-section')
 				target.trigger('form:moveBackward',[position]);
 			});

 			$formSection.on('form:moveForward', function(event, position){ 
 				console.log('moving forward from: ', position)
 				$(target).find('.multipart-section[data-position="'+position+'"]').hide()
 				$(target).find('.multipart-section[data-position="'+(position + 1)+'"]').show()
 			});
 			$formSection.on('form:moveBackward', function(event, position){ 
 				console.log('moving forward from: ', position)
 				$(target).find('.multipart-section[data-position="'+position+'"]').hide()
 				$(target).find('.multipart-section[data-position="'+(position - 1)+'"]').show()
 			});

 			// only show first section of form
 			if( $formSection.data('position') != 1){
 				$formSection.hide()
 			}
 			// $formSection.on('form:moveForward', moveForward(event, position));
 			
 				// type: 'move-forward',
 				// from: k
 				// }
 			// )})
 			// $(this).find('snwb-back').on('click', function(){ $.trigger('move-backward')})

 	
 		})
 		


 		
 	// console.log(list);
})(jQuery);
