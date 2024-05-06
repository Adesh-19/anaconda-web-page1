var menubutton = document.querySelector('.Sahil');
var Nav2 = document.querySelector('.nav2');


menubutton.addEventListener("click", function() {
    Nav2.classList.toggle('dropdown');
})
var tl= gsap.timeline()
tl.from('.nav1',{
    x:-300,
    opacity:0,
    duartion:0.1
})
tl.from('.nav2 a',{
    y:-200,
    opacity:0,
    duartion:0.1,
    delay:0.1,
    stagger:1

})
tl.from('.nav3 button',{
    y:-200,
    opacity:0,
    duartion:0.1,
    delay:0.1,
    stagger:1
})

tl.from('.main-content',{
    scale:0,
    opacity:0,
    duartion:0.3,
})

tl.from('.lower-content',{
    scale:0,
    opacity:0,
    duartion:0.3,
})

tl.from('.lower-lower-content',{
    scale:0,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.lower-lower-content',
        scroll:'body',
        end:"0 70%",
        scrub:1
    }
})

tl.from('.third-main-div',{
    x:200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.third-main-div',
        scroll:'body',
        end:"0 40%",
        scrub:1
    }
})

tl.from('.wrapper3',{
    x:-200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.wrapper3',
        scroll:'body',
        end:"0 40%",
        scrub:1
    }
})

tl.from('.wrapper4',{
    x:200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        marker:true,
        trigger:'.wrapper4',
        scroll:'body',
        end:"0 40%",
        scrub:1
    }
})

tl.from('.wrapper5',{
    x:-200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.wrapper5',
        scroll:'body',
        end:"0 40%",
        scrub:1
    }
})

tl.from('.package2',{
    scale:0,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.package2',
        scroll:'body',
        end:'0 70%',
        scrub:1
    }
})

tl.from('.package3',{
    scale:0,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.package3',
        scroll:'body',
        end:'0 70%',
        scrub:1
    }
})

tl.from('.left-second',{
    x:-200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.left-second',
        scroll:'body',
        end:'0 70%',
        scrub:1
    }
})

tl.from('.right-second',{
    x:200,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.right-second',
        scroll:'body',
        end:'0 70%',
        scrub:1
    }
})

tl.from('.wrapper8',{
    scale:0.1,
    opacity:0,
    duartion:0.3,
    scrollTrigger:{
        trigger:'.wrapper8',
        scroll:'body',
        end:'0 40%',
        scrub:1
    }
})