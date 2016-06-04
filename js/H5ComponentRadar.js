/* 雷达图组件对象 */

var H5ComponentRadar = function(name, cfg){
	var component = new H5ComponentBase(name, cfg);

	var w = cfg.width;
	var h = cfg.height;

	// 加入一个画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	var r = w/2;
	var step = cfg.data.length;

	// ctx.beginPath();
	// ctx.arc(r, r, 5, 0, 2*Math.PI);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(r, r, r-5, 0, 2*Math.PI);
	// ctx.stroke();

	// 计算一个圆周上的坐标（计算多边形的顶点坐标）
	// 已知：圆心坐标（a,b）\半径 r；角度deg
	// rad = (2*Math.PI/360)*(360/step)*i
	// x = a + Math.sin(rad) * r;
	// y = b + Math.cos(rad) * r;

	// 绘制网格背景（分面绘制，分为10份）
	var isBlue = false;
	for(var s = 10; s>0; s--){
		ctx.beginPath();

		for(var i=0;i<step;i++){
			var rad = (2*Math.PI/360)*(360/step)*i;
			var x = r + Math.sin(rad) * r*(s/10);
			var y = r + Math.cos(rad) * r*(s/10);

			// ctx.beginPath();
			// ctx.arc(x, y, 5, 0, 2*Math.PI);
			// ctx.moveTo(r, r);
			ctx.lineTo(x, y);

		}
		ctx.closePath();
		ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
		ctx.fill();
		// ctx.stroke();
	}

	// 绘制伞骨
	for(var i=0; i< step;i++){
		var rad = (2*Math.PI/360)*(360/step)*i;
		var x = r + Math.sin(rad) * r;
		var y = r + Math.cos(rad) * r;
		ctx.moveTo(r, r);
		ctx.lineTo(x, y);
	}
	ctx.strokeStyle = '#e0e0e0';
	ctx.stroke();

	// 数据层的开发
	// 加入一个画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	ctx.strokeStyle = '#f00';

	var draw = function(per){
		ctx.clearRect(0, 0, w, h);
		// 输出数据的折线
		for(var i=0;i<step;i++){
			var rad = (2*Math.PI/360)*(360/step)*i;
			
			var rate = cfg.data[i][1] * per;

			var x = r + Math.sin(rad) * r * rate;
			var y = r + Math.cos(rad) * r * rate;

			ctx.lineTo(x, y);
			// ctx.arc(x, y, 5, 0, 2*Math.PI);
			// ctx.fill();
		}
		ctx.closePath();
		ctx.stroke();

		// 输出数据的点
		ctx.fillStyle = '#ff7677';
		for(var i=0;i<step;i++){
			var rad = (2*Math.PI/360)*(360/step)*i;
			var rate = cfg.data[i][1] * per;

			var x = r + Math.sin(rad) * r * rate;
			var y = r + Math.cos(rad) * r * rate;

			ctx.beginPath();
			ctx.arc(x, y, 5, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
		}
	}

	component.on('onLoad', function(){
		//雷达图的生长动画
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
				// draw(s);
			}, i*10+500);
		}

	});
	return component;
}