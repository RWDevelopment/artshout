$(function(){
	$(".typed").typed({
		strings: ["<h1>The Spanish Inquisition</h2>^1000\n", "<h2>is looking for</h2>^1000\n", "<h2>gifted & mentally ill</h2>"],
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
