function myFunction() {
    window.open("http://www.w3schools.com");
}

var original = $("#firstdiv"),
	smallWidthContent= "
		<div class='row'>
		          <div class='col-xs-12 col-sm-4' id='mission_statement'>
		          <p class='content centered'><ins>Recent News</ins></p>
		          <p class='content centered'>Azaad has had a tremendous season this year.  We had the pleasure of performing as an exhibition act at Bollywood Berkeley.  This year we also had the pleasure of competing at three competitions, A2 Dhoom, Jhoomti Shaam, and Tufaan.  Thanks to our performance at Jhoomti Shaam, we were able to compete at Bollywood America.  Thanks for all the support, and we look forward to the future.</p>
		        </div>
		        <div class='col-xs-hidden col-sm-4'>
		          
		          <p class='content centered'>Phillyfest 2010: First Place</p>
		          <p class='content centered'>Bollywood Berkeley 2010: First Place</p>
		          <p class='content centered'>Jhoomti Shaam 2010: First Place</p>
		          <p class='content centered'>Phillyfest 2011: Second Place</p>
		          <p class='content centered'>Bollywood Berkeley 2011: First Place</p>
		          <p class='content centered'>Best of the Best VI: First Place</p>
		          <p class='content centered'>Bollywood America 2011: First Place</p>
		          <p class='content centered'>Bollywood Berkeley 2012: Third Place</p>
		          <p class='content centered'>Bollywood Berkeley 2013: Third Place</p>
		        </div>
		        
		        <div class='col-xs-hidden col-sm-4'>
		          
		          <p class='content centered'>Jhoomti Shaam 2013: Third Place</p>
		          <p class='content centered'>South Asian Showdown 2013: Third Place</p>
		          <p class='content centered'>South Asian Showdown 2014: First Place</p>
		          <p class='content centered'>Bollywood Berkeley 2014: First Place</p>
		          <p class='content centered'>Jhoomti Shaam 2014: Second Place</p>
		          <p class='content centered'>Bollywood America 2014: Second Place</p>
		          <p class='content centered'>Jhoomti Shaam 2015: First Place</p>
		          <p class='content centered'>Tufaan 2015: Second Place</p>
		        </div>
		      </div>
		",
	largeWidthContent=original.html();
	resized=0;

function replaceContent(original, smallWidthContent, largeWidthContent) {
	if (window.innerWidth <= 480 && resized ==1 ) {
		original.children().remove();
		original.html(smallWidthContent);
		resized=0;
	} else if (window.innerWidth >480 && resized==0) {
		original.children().remove();
		original.html(largeWidthContent);
		resized=1;
	}
}

$(window).onresize= (function() {
	replaceContent(original, smallWidthContent, largeWidthContent);
});