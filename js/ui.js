$(window).load(function(){
    var $grid = $('.grid_wrapper');
    $grid.masonry({
        itemSelector: '.grid_item',
        isAnimated:true,
        horizontalOrder:true
    });
});

function initLikedBtn(self){
   // console.log('aaaa')
   var $this = $(self);
   var likedBtn = $('.btn_like');

   if($this.hasClass('on') == false){
        $this.addClass('on').append("<span class='blind'>좋아요</span>");
   } else {
        $this.removeClass('on').find('span').remove();
   }
}


//popup
$(document).ready(function(){
	$('#layer').click(function(e){
        e.preventDefault();
		$('.popup_modal').show();	
	});
    $('.popup_modal').click(function() {
        $(this).hide();
    });
});

