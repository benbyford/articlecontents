/*
*   articleContents by @benbyford
*/
$.fn.createContents = function() {
    if($('.article-contents')){
        $('.article-contents').append('<h3>Contents</h3>');
    }else{
        $(this).prepend('<div class="article-contents"></div>');
    }

    $headers = $(this).find('h1, h2, h3, h4, h5');

    $i = 0;
    $headers.each(function(){
        if($(this).html() != ''){

            $(this).attr('id', 'h'+$i);
            $('.article-contents').append('<a href="#h'+$i+'">'+$(this).html()+'</a>');
        }
        $i++;
    });
};
