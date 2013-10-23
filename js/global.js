$(document).ready(function() {
	$('.tile').each(function() {
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
});