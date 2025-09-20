const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(xscale,yscale) {
  window.addEventListener("mousemove", function(dets) {
    document.querySelector("#minicircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
function firstPageAnim() { 
    var tl = gsap.timeline(); 
    
    tl.from("#nav", {
         y: '+10', 
         opacity: 0, 
         duration: .8, 
         ease: Expo.easeInOut 
        })

    .to(".boundingelem", {
         y: '0', 
         ease: Expo.easeInOut, 
         duration: 2,
         delay: -1,
         stagger: .2 
        })
    .from("#herofooter",{
        y: +10,
        opacity: 0,
        duration: 1,
        delay: -1,
        stagger: .2,
        ease: Expo.easeInOut
    }) 
    }
function circleChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;
        
        xscale = gsap.utils.clamp(.8, 1.2, xdiff)
        yscale = gsap.utils.clamp(.8, 1.2, ydiff)
        
        circleMouseFollower(xscale,yscale);
        // console.log(gsap.utils.clamp(.8,1.2,xdiff));
    })
}


circleChaptaKaro();
// circleMouseFollower();
firstPageAnim();