(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	$.extend(true,$.fn.datepicker.defaults,{
		language: 'zh-CN',
		zIndexOffset : 100
	});
	$.extend(true,$.fn.datepicker.dates["zh-CN"],{
		format : format="yyyy-mm-dd"
	})
})
)