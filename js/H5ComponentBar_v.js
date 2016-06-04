/* 垂直柱图组件对象 */


var H5ComponentBar_v = function(name, cfg){

	//完成component的初始化定义
	var component = new H5ComponentBar(name, cfg);

	//完成width每个柱图中项目的宽度计算
	var width = (100/cfg.data.length) >> 0;
	component.find('.line').width(width + '%');

	$.each(component.find('.rate'), function(){
		var w = $(this).css('width');
		// 把进度区的宽度重设为高度，并且取消原来的高度
		$(this).height(w).width('');
	});

	$.each(component.find('.per'), function(){
		// 重新调整DOM结构，把百分比数值（.per）添加到 进度区
		$(this).appendTo($(this).prev());
	});

	return component;
}


