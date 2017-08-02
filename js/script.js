// Searchbar Handler
$(function() {
	var searchField = $('#query');
	var icon = $('#search-btn');
	
	// Focus Event Handler
	$(searchField).on('focus', function() {
		$(this).animate({	width: '90%'	}, 400);
		$(icon).animate({ right: '-8px' }, 400);
	});
	
	// Blur Event Handler
	$(searchField).on('blur', function() {
		if (searchField.val() == '') {
			$(searchField).animate({ width: '45%' }, 400, function() {});
			$(icon).animate({ right: '364px' }, 400, function() {});
		}
	});
	
	$('#search-form').submit( function(e) {
        e.preventDefault();
    });
});

function search() {
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Inputs
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyDIZB_3qSejx0vh0ec5uK2rf9740CY0G90' },
			function(data) {
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item) {
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
			}
	);
}