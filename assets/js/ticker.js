$(function(){
	$(".typed").typed({
		strings: ["<h1>The Spanish Inquisition</h2>^1000\n", "<h2>is looking for</h2>", "People."],
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		contentType: 'html',
	});
});
