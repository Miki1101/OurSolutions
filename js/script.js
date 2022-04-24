$(function () {

  $(document).on('click','a',function(event){
		event.preventDefault();
		var target= $(this).attr("href");
		$('html,body').animate({
	   scrollTop: $(target).offset().top
		},500);
	   
	  });

    $(document).ready(function () {
        // 捲軸偵測距離頂部超過 '數字' 才顯示按鈕
        $(window).scroll(function () {
          if ($(window).scrollTop() > 500) {
            if ($(".toTopBtn").hasClass("hide")) {
              $(".toTopBtn").toggleClass("hide");
            }
          } else {
            $(".toTopBtn").addClass("hide");
          }
        });
      
        // 點擊按鈕回頂部
        $(".toTopBtn").on("click", function (event) {
          $("html, body").animate(
            {
              scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
          );
        });
      });
    
})

