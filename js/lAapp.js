var myScroll;			
$(document).ready(function(){
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $radio_ico= $('.radio_ico'),
		$choose_some = $('#choose_some'),
		$search = $('#search'),
		$form_table_td = $('.form_table td'),
		$btn_items_bt = $('.btn_items_bt');
	//表单ICON 点击
	$form_table_td.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$this.addClass('current');	
		setTimeout(function(){
			$this.removeClass('current');
		},300);
	});
	
	//筛选
	$search.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$search = $('.search');
		$search.addClass('current');	
	});
	//批量操作
	$choose_some.off('touchstart').on('touchstart',function(){
		$list = $('.list');
		if($list.hasClass('choose')){
			$list.removeClass('choose');
			$radio_ico.removeClass('current');
			$btn_items_bt.removeClass('current');
		}else{
			$list.addClass('choose');	
		}
	});
	$radio_ico.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		if($this.hasClass('current')){
			$this.removeClass('current');
			$btn_items_bt.removeClass('current');
		}else{
			$this.addClass('current');	
			$btn_items_bt.addClass('current');
		}
	});
	
});






























