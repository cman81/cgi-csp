$(document).ready(function() {
	$('.tile').each(function() { // TODO: remove this functionality, each tile should have a fixed color
		var hue = 'rgb('
			+ (Math.floor(Math.random() * 128)) + ','
			+ (Math.floor(Math.random() * 128)) + ','
			+ (Math.floor(Math.random() * 128)) + ')';
		$(this).css('background-color', hue);
	});
	$('.tile .icon-wrapper img').vAlign();
	
	$('.tile').mouseenter(function() {
		$(this).addClass('selected');
	});
	$('.tile').mouseleave(function() {
		$(this).removeClass('selected');
	});
	$('.tile').click(function() {
		// reset
		$('.tile').removeClass('active');
		$('.detail-container').removeClass('active');
				
		$(this).addClass('active');
		
		// loop through classnames until you find one that begins with 'node-'
		var classList = $(this).attr('class').split(/\s+/);
		for (var i = 0; i < classList.length; i++) {
			var item = classList[i];
		    if (item.substring(0, 5) == 'node-') {
		       $('.' + item).addClass('active');
		    }
		};
	});
	$('.close-it').click(function() {
		// reset
		$('.tile').removeClass('active');
		$('.detail-container').removeClass('active');
	});
});