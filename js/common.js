(function ($) {
    $(function () {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {

        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        $('.phone-nav').on('click', function () {
            $('body').toggleClass('navShown')
        })

            $('.scroll-ico').click(function(e){
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'))
            })

        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-wrap",
                start: "0%",
                end: "100%",
                scrub: true,

            }
        });


        tl1.to(".skate-one", {
                duration: 2,
                y: -300,
                ease: "none",
            },
            "<"
        )

        tl1.to(".product-one", {
                duration: 2,
                y: -250,
                ease: "none",
            },
            "<"
        )

        tl1.to(".product-two", {
                duration: 2,
                y: -100,
                ease: "none",
            },
            "<"
        )

        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".jerseys-local-brand-wrap",
                start: "-10",
                end: "100%",
                scrub: true,

            }
        });


        tl2.fromTo(".single-product-jumpar", {
                duration: 2,
                opacity: 1,
                y: 200,
                ease: "none",
            }, {
                duration: 2,
                opacity: 1,
                y: -200,
                ease: "none",
            },
            "<"
        )


        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".find-us-wrap",
                start: "-100%",
                end: "50%",
                scrub: true,

            }
        });


        tl3.fromTo(".title-clothing", {
                duration: 2,
                opacity: 1,
                y: 250,
                ease: "none",
            }, {
                duration: 2,
                opacity: 1,
                y: -250,
                ease: "none",
            },
            "<"
        )

        tl3.fromTo(".title-skate", {
                duration: 2,
                opacity: 1,
                y: 110,
                ease: "none",
            }, {
                duration: 2,
                opacity: 1,
                y: -110,
                ease: "none",
            },
            "<"
        )

        if ($('.head-mover').length) {


            let products = document.querySelectorAll('.product-item');
            let head = document.querySelector('.head-mover');

            products.forEach(product => {
                product.addEventListener('mouseenter', () => {
                    let targetX = product.offsetLeft + product.offsetWidth / 1.5;
                    let targetY = product.offsetTop - head.offsetHeight / 2;

                    console.log(targetX, targetY)
                    gsap.to(head, {
                        duration: 0.5,
                        left: targetX,
                        top: targetY,
                        rotateX: 26,
                        rotateY: -12,
                        skewY: 20,
                        skewX: -2,
                        ease: "power1.inOut",
                    });
                });

                product.addEventListener('mouseleave', () => {
                    gsap.to(head, {
                        duration: 0.5,
                        left: "calc(50% - 76px)",
                        top: "-7%",
                        rotateX: 0,
                        rotateY: 0,
                        skewY: 0,
                        skewX: 0,
                        ease: "power1.inOut",
                    });
                });
            });

        }


    }) // End ready function.




})(jQuery)