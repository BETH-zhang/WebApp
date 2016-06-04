/* 柱图组件对象 */

/* 柱图组件对象 */

var H5ComponentPolyline = function(name, cfg){
	var component = new H5ComponentBase(name, cfg);

	// 绘制网格线
	var w = cfg.width;
	var h = cfg.height;
	
	// 加入一个画布（网格线背景）
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	return component;
}
