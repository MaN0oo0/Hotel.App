(function($) {
	"use strict";
	
	//P-scrolling
	const ps = new PerfectScrollbar('.app-sidebar', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	//P-scrolling
	const ps1 = new PerfectScrollbar('.sidebar-right', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
})(jQuery);