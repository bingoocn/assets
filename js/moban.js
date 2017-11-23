function dyncJs(jspath) {
	var oHead = document.getElementsByTagName('HEAD').item(0);
	var oScript= document.createElement('script');
	oScript.type = 'text/javascript';
	oScript.src=jspath;
	oHead.appendChild(oScript);
}
if(typeof cngc === 'undefined') {
    dyncJs($('script[src$=\'moban.js\']').attr('src').replace('moban.js', 'cngc.js'));
}
/* 根据窗口的高度自动设置iframe的高度*/
function setHeight() {
	var height=$(window).height()-$('#logoArea').height()-$('#navbar').height()-$('#breadcrumb').height()-5;
    $('#frameMain').height(height);
}
/* 打开一个新的窗口显示个人详细信息*/
function open_win(url) {
    cngc.utils.open_win(url);
};
$(function() {
    setHeight();// 调用setHeight方法设置iframe的高度
});
$(window).resize(function(){
	setHeight();// 调用setHeight方法设置iframe的高度
})