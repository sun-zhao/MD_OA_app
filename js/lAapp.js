var myScroll;			
$(document).ready(function(){
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	//表单ICON 点击
	$('.form_table td').off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$this.addClass('current');	
		setTimeout(function(){
			$this.removeClass('current');
		},300);
	});
	
	//筛选
	$('#search').off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$search = $('.search');
		$search.addClass('current');	
	});
});






























