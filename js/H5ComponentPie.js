/* 饼图组件对象 */

var H5ComponentPie = function(name, cfg){
	var component = new H5ComponentBase(name, cfg);

	// 绘制网格线
	var w = cfg.width;
	var h = cfg.height;

	// 加入一个画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 1);
	component.append(cns);

	var r = w/2;
	// 加入一个底图层
	ctx.beginPath();
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.lineWidth = 1;
	ctx.arc(r, r, r, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();

	// 绘制一个数据层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 2);
	component.append(cns);

	var colors = ['red', 'green', 'blue', 'red', 'orange'];//备用颜色
	var sAngel = 1.5 * Math.PI;// 设置开始的角度在12点位置
	var eAngel = 0;//结束角度
	var aAngel = Math.PI*2;//100%的圆结束的角度2pi=360

	// ctx.beginPath();
	// ctx.fillStyle = '#f00';
	// ctx.strokeStyle = '#cc0';
	// ctx.lineWidth = 1;
	// ctx.moveTo(r, r);
	// ctx.arc(r, r, r, sAngel, aAngel);
	// ctx.fill();
	// ctx.stroke();

	var step = cfg.data.length;
	for(var i=0;i<step;i++){
		var item = cfg.data[i];
		var color = item[2] || ( item[2] = colors.pop() );
		
		eAngel = sAngel + aAngel * item[1];
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.lineWidth = .1;

		ctx.moveTo(r, r);
		ctx.arc(r, r, r, sAngel, eAngel);
		ctx.fill();
		ctx.stroke();

		sAngel = eAngel;
	}

	// 加入一个蒙板层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 3);

	component.append(cns);
	var r = w/2;

	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.lineWidth = 1;

	// 生长动画
	var draw = function(per){
		ctx.clearRect(0, 0, w, h);
		ctx.beginPath();

		ctx.moveTo(r, r);

		if(per <= 0){
			ctx.arc(r, r, r, 0, 2*Math.PI*per);		
		}else{
			ctx.arc(r, r, r, sAngel, sAngel + 2*Math.PI*per, true);			
		}
		
		ctx.fill();
		ctx.stroke();

	}

	// draw(0);

	component.on('onLoad', function(){
		var s = 0;
		for(i=0;i<100;i++){
			setTimeout(function(){
				s+=.01;
				draw(s);
			}, i*10+500);
		}
	});

	component.on('onLeave', function(){
		var s = 1;
		for(i=0;i<100;i++){
			setTimeout(function(){
				s-=.01;
				draw(s);
			}, i*10);
		}
	});

	return component;
}










