$(function(){
	$(".typed").typed({
		strings: ["The Spanish Inquisition^1000\n", "is looking for^1000\n", "gifted & mentally ill"],
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		contentType: 'html',
	});
});
