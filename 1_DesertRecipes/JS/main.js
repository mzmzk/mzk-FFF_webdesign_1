$(function () {

    /*
     * Slideshow
     */

    // slideshow クラスを持った要素ごとに処理を実行
    $('#slideshow').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 7500 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 7500);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });
    
    });

$(function(){

    var duration = 300;

    var $images = $('#images p')

    $images
     .on('mouseover', function() {

    $(this).find('strong, span').stop(true).animate( {
        opacity: 1
     }, duration);
    })

    .on('mouseout', function(){
        $(this).find('strong,span').stop(true).animate( {
            opacity:0
        }, duration);
    });

});


$(function(){
/*
*　cupcake画像のJavaScript
*/
    var duration = 400;

    var $images = $('#images p');

    $images
    .on('mouseover', function(){
        $(this).find('strong').stop(true).animate({
            opacity:1,
            left:'5%'
        }, duration);
        $(this).find('span').stop(true).animate({
            opacity:0.9
        }, duration);
    })
     .on('mouseout', function(){
        $(this).find('strong').stop(true).animate({
            opacity:0,
            left:'-100%'
        }, duration);
        $(this).find('span').stop(true).animate({
            opacity:0
        }, duration);
    });
 });




$(function(){

    /*
     * print
     */

  $('.print').click(function(){
    window.print();
  });
});


$(function(){
   /*
   *Back to top button
   */
  $('.back-to-top').each(function(){

    var el = scrollableElement('html','body');

    $(this).on('click', function(event){
        event.preventDefault();
        $(el).animate({scrollTop:0},450);
    });
  });

function scrollableElement(){
    var i, len, el, $el, scrollable;
    for(i = 0, len = arguments.length; i < len; i++){
        el = arguments[i],
        $el = $(el);
        if ($el.scrollTop() > 0){
            return el;
        } else {
            $el.scrollTop(1);
            scrollable = $el.scrollTop() > 0;
            $el.scrollTop(0);
            if (scrollable){
                return el;
            }
        }
    }
    return [];
    }
});
