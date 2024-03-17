//plugin

gsap.registerPlugin(ScrollTrigger) 

gsap.to("#lookbook-one", {
   trigger: "#lookbook-one",
    start: "top center",
   end: "bottom top",
    x: 700,
    duration: 3,
    scrub: true,
   endTrigger: "#lookbook-six",

    
    
  });


