// 轮播区域
$.ajax({
    url: 'http://127.0.0.1:9091/api/getlunbo',
    dataType: 'json',
    success: function (data) {
        // console.log(data);
        $('.swiper-wrapper').html(template('template-swiper-slide',data));
        var swiper = new Swiper('.swiper-container', {
        	autoplay: 1000,
        	loop: true,
				// 如果需要分页器
			pagination: '.swiper-pagination',
			paginationClickable: true,
			slidesPerView: 1,
			autoplayDisableOnInteraction: false,
    	});
    }
})

// 人物列表
$.ajax({
	url:'http://127.0.0.1:9091/api/gethometab/1',
	success:function(data){
		// console.log(data);
		$('.people-list').html(template('template-people-list',data));
	}
})

//点击li请求数据
$('.list-nav li').on('click',function(){
	$('.list-nav li').removeClass('active');
	$(this).addClass('active');
	$.ajax({
		url:'http://127.0.0.1:9091/api/gethometab/'+$(this).attr('type'),
		success:function(data){
			console.log(data);
			$('.people-list').html(template('template-people-list',data));
		}
	})
})

//点击字体图标加载侧边栏
$('.icon-category').click(function(){
	$('.keep-out').fadeIn();
	$('.side-list').css({
		transform:'none',
		transtion:'all .5s',
	});

	$('.layout-out').css({
		transform:'translateX(70%)',
		transition:'all .5s',
	});
	$('body').css({
		overflow: 'hidden'
	})
})
$('.keep-out').on('click',function(){
	$('.keep-out').fadeOut();
	$('.side-list').css({
		transform:'translateX(-100%)',
		transtion:'all .5s',
	});
	$('.layout-out').css({
		transform:'none',
		transition:'all .5s'
	})
	$('body').css({
		overflow: 'visible'
	})
})