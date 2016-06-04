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

	// 水平网格线 100份－》10份
	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#ccc';

	window.ctx = ctx;
	for(var i=0; i<step+1; i++){
		var y = (h/step) * i;
		ctx.moveTo(0, y);
		ctx.lineTo(w, y);
	}

	// 垂直网格线(根据项目的个数去分)
	step = cfg.data.length+1;
	var text_w = w/step>>0;
	for(var i = 0; i<step+1;i++){
		var x = (w/step) * i;
		ctx.moveTo(x, 0);
		ctx.lineTo(x, h);

		if(cfg.data[i]){
			var text = $('<div class="text">');
			text.text(cfg.data[i][0]);
			text.css('width', text_w/2).css('left', x/2-text_w/4+text_w/2);

			component.append(text);
		}
	}
	
	ctx.stroke();

	// 加入一个画布（数据层）
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	// 绘制折线数据
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = '#ff8878';

	var x = 0;
	var y = 0;
	var row_w = w/(cfg.data.length+1);
	// 画点
	for(i in cfg.data){
		var item = cfg.data[i];

		x = row_w * i + row_w;
		y = h * (1-item[1]);

		ctx.moveTo(x, y);
		ctx.arc(x, y, 5, 0, 2*Math.PI);
		// ctx.stroke();
	}

	// 连线
	// 移动画笔到第一个数据的点位置
	ctx.moveTo(row_w, h * (1-cfg.data[0][1]));
	// ctx.arc(row_w, h * (1-cfg.data[0][1]), 20, 0, 2*Math.PI);
	// ctx.stroke();
	for(i in cfg.data){
		var item = cfg.data[i];
		x = row_w * i + row_w;
		y = h * (1-item[1]);
		ctx.lineTo(x, y);
	}

	ctx.stroke();
	ctx.lineWidth = 1;
	ctx.fillStyle = 'rgba(255, 135, 120, 0.2)';

	// 绘制阴影
	ctx.lineTo(x, h);
	ctx.lineTo(row_w, h);
	ctx.fill();

	// 写数据
	for(i in cfg.data){
		var item = cfg.data[i];
		x = row_w * i + row_w;
		y = h * (1-item[1]);
		ctx.fillStyle = item[2] ? item[2] : '#000';
		ctx.fillText(((item[1]*100) >> 0)+'%', x-10, y-10);
	}	


	ctx.stroke();


	return component;
}
