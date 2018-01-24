(function( $ ) {
 	var target = '.snwb-multipart-form form .wrapper';
 	// a useful object
 	var list = []

 	 	
 		// function moveForward(event, position){
 		// 	console.log('fun', position)

 		// }

 		$(target).find('.multipart-section').each(function(){
 			// the current section
 			var $formSection = $(this)
 			// the position of the current section
 			var position = $formSection.data('position')

 			// save position
 			list.push({position:position, element: $(this)});

 			// bind handlers to continue button
 			var next = $formSection.find('.snwb-next') 
 			$formSection.find('.snwb-next').on('click', function(e){
 				e.preventDefault();
 				// console.log('print', position) 
 				var target = $(this).closest('.multipart-section')
 				target.trigger('form:moveForward',[position]);
 			});

 			$formSection.on('form:moveForward', function(event, position){ 
 				console.log('moving', position)
 				$(target).find('.multipart-section[data-position="'+position+'"]').hide()
 				// $(this).trigger({
 				// $(document).on('move-forward', greet()
 			});
 			// $formSection.on('form:moveForward', moveForward(event, position));
 			
 				// type: 'move-forward',
 				// from: k
 				// }
 			// )})
 			// $(this).find('snwb-back').on('click', function(){ $.trigger('move-backward')})

 	
 		})
 		


 		
 	// console.log(list);
})(jQuery);
