/* 基本图文组件对象 */

var H5ComponentBase = function(name, cfg){
	var cfg = cfg || {};
	var id = ('h5_c_' + Math.random()).replace('.', '_');
	var cls = 'h5_component_' + cfg.type + ' h5_component_name_' + name; //把当前的组件类型添加到样式中进行标记
	var component = $('<div class="h5_component '+cls+'" id="'+id+'">');
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url('+cfg.bg+')');

	if(cfg.center === true){
		component.css({
			marginLeft: (cfg.width/4 * -1) + 'px',
			left: '50%'
		});
	}
	return component;
}