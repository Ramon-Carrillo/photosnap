//* Landing Page *//
gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero__textbox', {
  duration: 1,
  opacity: 1,
  x: 0,
});

gsap.from('.solutions__textbox-a', {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: '.solutions__textbox-a',
    // markers: true,
    start: 'top 75%', //when top of herman passes 75% viewport height
    end: 'bottom 25%', //when bottom of herman passes 25% viewport height

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'play none none none',
    //options: play, pause, resume, reset, restart, complete, reverse,none
  },
});

gsap.from('.solutions__textbox-b', {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: '.solutions__textbox-b',
    // markers: true,
    start: 'top 75%', //when top of herman passes 75% viewport height
    end: 'bottom 25%', //when bottom of herman passes 25% viewport height

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'play none none none',
    //options: play, pause, resume, reset, restart, complete, reverse,none
  },
});
