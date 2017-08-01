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
});