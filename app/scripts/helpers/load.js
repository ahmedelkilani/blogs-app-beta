/**
 * Content all loading function
 */

jQuery(document).ready(function($) {

    /**
     * [$content_loading]
     * insert After content_loading
     */
    var $content_loading = $('.loading');
    $('<div class="dima-isotope-loading"><span class="loading-top"></span><span class="loading-bottom"></span><span class="spin-2"><p>LOADING</p></span><a href="#" class="load-close">X</a></div>').insertAfter($content_loading);

    /**
     * [animated page transitions]
     * @param  {[type]} event) { var hrefVal [description]
     * @return {[type]} [animated]
     */
    $('.animsition-link').click(function(event) {
        var hrefVal = $(this).attr('href'),
            transitions = $(this).attr('data-animated') || 'fadeOut';

        if (hrefVal.length > 2) {
            $('.all_content').addClass('animated ' + transitions);
            setTimeout(function() {
                window.location = hrefVal;
            }, 800);
            return false;
        }
    });

    /**
     * CliCK to load
     */

    $('.load-close').click(function() {
        $('.dima-isotope-loading').each(function(i) {
            $('.spin-2').fadeOut('slow', function() {
                $('.loading-top,.loading-bottom').delay(150).slideUp('300', function() {
                    $.when($('.dima-isotope-loading').fadeOut(150)).done(ShowLoading());
                });
            });
        });
    });

    function ShowLoading() {
        var l = $('.isotope-item').attr('data-animate');
        //Loading section
        $('.all_content').each(function() {
            //$(this).addClass('animated fadeIn');
            $(this).addClass('show');
        });
        //delet loading class ( ajax issues)
        $content_loading.removeClass('loading');
    }

    /**
     * [load]
     */
    $(window).load(function() {
        /**
         * Open Slide
         * FadeOut the content
         * Call ShowLoading() function when HideLoading() done.
         */
        function HideLoading() {
                $('.dima-isotope-loading').each(function(i) {
                    $('.spin-2').fadeOut('slow', function() {
                        $('.load-close').hide(200);
                        $('.loading-top,.loading-bottom').delay(150).slideUp('300', function() {
                            $.when($('.dima-isotope-loading').fadeOut(150)).done(ShowLoading());
                        });
                    });
                });
            }
            /**
             * Show content (opacity 1)
             * Show isotope-item one by one
             */
        function ShowLoading() {
            var l = $('.isotope-item').attr('data-animate');
            //Loading section
            $('.all_content').each(function() {
                //$(this).addClass('animated fadeIn');
                $(this).addClass('show');
            });
            //First hide all Items
            if (!l) {
                $('.isotope-item').each(function(i) {
                    $(this).css({
                        'opacity': 0
                    });
                });
                //loading items one by one
                $('.isotope-item').each(function(i) {
                    $(this).delay(i * 100).animate({
                        'opacity': 1
                    });
                });
            }
            //delet loading class ( ajax issues)
            $content_loading.removeClass('loading');
        }


        /**
         * Call the HideLoading
         */
        HideLoading();
    });

});
