function run() {

	function objFit(id) {
		if (!Modernizr.objectfit) {
  			//supported
		} else {
			// not supported
			var el = document.getElementById(id);
  			var l = el.getElementsByTagName('li').length;
  			for (i = 0; i < l; i++ ) {
  				var ch = el.getElementsByTagName('li')[i];
  				var img = ch.getElementsByTagName('img')[0]
  				var src = img.currentSrc;
  				ch.style.backgroundImage = 'url("'+ src +'")';
  				ch.classList.add('objectfit')
  			}
		}
	}

	function displayChange() {
		objFit('shopify-section-1482527966363');

		// var dw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		// if ( dw >= 768 ) {
		// 	objFit('shopify-section-1482527966363');
		// } else {
		// 	objFit('shopify-section-1482527966363');
		// }

	}
	window.addEventListener("resize", displayChange());
};
// in case document is already rendered
if (document.readyState!='loading') run();
//modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
//IE <= 8
else document.attachEvent('onreadystatechange',function() {
  if (document.readyState=='complete') run();
});