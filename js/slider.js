$(document).ready(function() {
				
    var numSlides = $('#slide-list > li').length;
    var slideWidth = $('#slide-list > li').width();
		var listWidth = slideWidth * numSlides;

    var currOffset = 0;
    var counter = 0;
    var value;

    $('#slide-next').click(function(e) {
        e.preventDefault();
		
        if (counter < (numSlides-1)) {
			
            var tempCounter = 1;
			$('#slide-list > li').each(function() {
				var strCurrLeftVal = $(this).css('left');
				var intCurrLeftVal = parseInt(strCurrLeftVal.replace('px', ''));
				var newLeftVal = (intCurrLeftVal - slideWidth) + 'px';
				$(this).css('left', newLeftVal);
				
				tempCounter ++;
			}); 
			
			currOffset = currOffset + 100;
			
			var tempCounter = 0;
			$('#slide-list > li').each(function() {
				var slideOffset = (tempCounter - currOffset) + '%';
				$(this).css('left', slideOffset);
				
				tempCounter +=100;
			}); 

            counter++;
 
			
        } else {
	
            var tempCounter = 1;
			$('#slide-list > li').each(function() {
				var strCurrLeftVal = $(this).css('left');
				var intCurrLeftVal = parseInt(strCurrLeftVal.replace('px', ''));
				var newLeftVal = (intCurrLeftVal + (slideWidth * (numSlides-1))) + 'px';
				$(this).css('left', newLeftVal);
				
				tempCounter ++;
			});
			
			currOffset = 0;
			
			var tempCounter = 0;
			$('#slide-list > li').each(function() {
				var slideOffset = (tempCounter - currOffset) + '%';
				$(this).css('left', slideOffset);
				
				tempCounter +=100;
			}); 	
			
            currOffset = 0;
            counter = 0;            
        }
       

    });

    $('#slide-prev').click(function(e) {
        e.preventDefault();
        if (counter > 0) {
            var tempCounter = 1;
			$('#slide-list > li').each(function() {
				var strCurrLeftVal = $(this).css('left');
				var intCurrLeftVal = parseInt(strCurrLeftVal.replace('px', ''));
				var newLeftVal = (intCurrLeftVal + slideWidth) + 'px';
				$(this).css('left', newLeftVal);
				
				tempCounter ++;
			}); 
			
			currOffset = currOffset - 100;
			
			
			
			var tempCounter = 0;
			$('#slide-list > li').each(function() {
				var slideOffset = (tempCounter - currOffset) + '%';
				$(this).css('left', slideOffset);
				
				tempCounter +=100;
			}); 

            counter--;

        }

    });


});