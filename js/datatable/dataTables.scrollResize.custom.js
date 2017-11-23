(function($){
	var _oldsize = $.fn.dataTable.ScrollResize.prototype._size;
	var _size = function(){
		_oldsize.call(this);
		$.fn.dataTable.ext.internal._fnScrollDraw(this.s.dt.settings()[0]);
	}
	$.fn.dataTable.ScrollResize.prototype._size = _size;

}(jQuery));

