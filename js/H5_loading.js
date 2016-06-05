/*loading动画*/

var H5_loading = function(images, firstPage){
	console.log('firstPage==', firstPage);

	if(this._images === undefined){//第一个进入
		this._images = (images || []).length;
		this._loaded = 0;

		var id = this.id;
		window[id] = this;//把当前对象存储在全局对象window中，用来进行某个图片加载完成之后的回调

		for(s in images){
			var item = images[s];
			var img = new Image;
			img.onload = function(){
				window[id].loader();
			}
			img.src = item;
		}

		$('#rate').text('0%');
		return this;

	}else{
		this._loaded ++;
		$('#rate').text( ((this._loaded / this._images * 100)>>0) + '%' );
		
		if(this._loaded < this._images){
			window[id] = null;
			return this;
		}

	}

	this.el.fullpage({
		onLeave: function(index, nextIndex, direction){
            // debugger
            $(this).find('.h5_component').trigger('onLeave');
        },
        afterLoad: function(anchorLink, index){
            // debugger
            $(this).find('.h5_component').trigger('onLoad');
        }
	});
	this.page[0].find('.h5_component').trigger('onLoad');
	this.el.show();

	if(firstPage){
		$.fn.fullpage.moveTo( firstPage );
	}
}