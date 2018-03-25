function run() {
	if (Modernizr.objectfit) {
  		// supported
  		alert('sup');
	} 
};



// in case document is already rendered
if (document.readyState!='loading') run();
//modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
//IE <= 8
else document.attachEvent('onreadystatechange',function() {
  if (document.readyState=='complete') run();
});