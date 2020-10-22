const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
      { x: 0, y: 0 },
      { x: window.screen.width/3, y: 50 },
      { x: window.screen.width/2, y: 0 },
      { x: window.screen.width/1.5, y: -100 },
      { x: window.screen.width, y: -300 },
    ],
  };
  
  const tween = new TimelineLite();
  
  tween.add(
    TweenLite.to(".bird", 1, {
      bezier: flightPath,
      ease: Power1.easeOut,
    })
  );
  
  const controller = new ScrollMagic.Controller();
  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 2000,
    triggerHook: 0,
  })
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);
  