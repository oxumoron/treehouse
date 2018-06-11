$(document).ready( function () {

    let $button = $('.navigation-button'),
        $nav = $('.navigation-holder'),
        $navToggleClassName = 'navigation-holder--mobile-open',
        textOpen = 'Open nav',
        textClose = 'Close nav'


    $button.on('click', function(e) {
        e.preventDefault();

        if ( $nav.hasClass($navToggleClassName) ) {
            $nav.fadeOut();

            setTimeout ( function() {
                $nav.removeClass($navToggleClassName);
            }, 200 );
            $(this).text(textOpen);
        } else {
            $nav.hide().addClass($navToggleClassName).fadeIn();
            $(this).text(textClose);
        }
    });


})