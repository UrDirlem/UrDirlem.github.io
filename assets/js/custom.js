
            //hide menu on click when collapsed
            $(document).ready(function () {
                $(".navbar-nav li a").click(function(event) {
                    $(".navbar-collapse").collapse('hide');
                });
            });

            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $(function() {
                $('.page-scroll a').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - 140
                    }, 700);
                    event.preventDefault();
                });
            });


            visible = true;

            // scroll top button: check to see if the window is top if not then display button or home
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                        if (visible) {
                              $('.intro-section').fadeOut(900,function() {
                                  $(this).show().css({visibility: "hidden"});
                              });
                             visible = false;
                        };
                    } else {
                        if (!visible) {
                            $('.intro-section').hide().css({visibility: "visible"}).fadeIn(900);
                            visible = true;
                    };
                }
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            });

            //jQuery for about section: show extra information and swap text on button on click
            $(document).ready(function(){
                $(".read-more-button").on("click", function() {
                    $(".read-more-text").slideToggle();
                    var el = $(this);
                    if (el.text() == el.data("text-swap")) {
                        el.text(el.data("text-original"));
                    } else {
                        el.data("text-original", el.text());
                        el.text(el.data("text-swap"));
                    }
                });
            });

