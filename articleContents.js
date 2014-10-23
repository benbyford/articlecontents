/*
*   articleContents.js by @benbyford
*/
$.fn.createContents = function() {

    //
    // if no .article-contents on page add contents to start of article
    //

    if($('.article-contents')){
        $('.article-contents').append('<h3>Contents</h3>');
    }else{
        $(this).prepend('<div class="article-contents"></div>');
    }

    //
    //  Find headers
    //
    $headers = $(this).find('h1, h2, h3, h4, h5');

    $i = 0;
    $headers.each(function(){
        if($(this).html() != ''){ // don't use header if empty

            //
            // add id to headers matching anchor links in our contents
            //

            $(this).attr('id', 'h'+$i);

            // 
            // add headers to contents div
            //

            $('.article-contents').append('<a href="#h'+$i+'">'+$(this).html()+'</a>');
        }
        $i++;
    });
};
