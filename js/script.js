var lastScrollTop = 0;
header = document.querySelector('header');
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
// courses Videos START
let listVideo = document.querySelectorAll('.next_up .video');
let bigVideo = document.querySelector('.big_video video');
let title = document.querySelector('.big_video .vid_title');
let download = document.querySelector('.big_video h2 .video_time')
let script = document.querySelector('.big_video .vid_script')
console.log(download.children)
listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            bigVideo.src = src;
            let poster = video.children[0].getAttribute('poster');
            bigVideo.poster = poster;
            let down = download.children[0].getAttribute('href');
            bigVideo.download = down;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
            let textt  = video.children[2].innerHTML;
            script.innerHTML =textt;
        };
    };
});
// courses Videos END


$(function () {
  $(window).resize(function () {
    $(".flip-card").height($(".flip-card-front").outerHeight());
  });
  $(window).resize();

  // ===============================================================

  // $("body").on("contextmenu", function (e) {
  //   return false;
  // });

  // $("body").bind("cut copy paste", function (e) {
  //   e.preventDefault();
  // });

  // ===============================================================

  let low_opacity = 0.6;
  $(".team-box.advisory-team").css("opacity", low_opacity);

  $(".team-box.advisory-team").click(function () {
    // $(".team #our-team").fadeOut(0);
    // $(".team #advisory-team").fadeIn();

    $(".flip-card-inner").addClass("rotate180");
    $(".empty-back").fadeOut();
    if (window.matchMedia("(max-width: 992px)").matches) {
      $(".empty-back-mobile").fadeOut();
    }

    // $(".team-box.our-team").toggleClass("low-opacity");
    $(".team-box.our-team").css("opacity", low_opacity);
    // $(".team-box.advisory-team").toggleClass("low-opacity");
    $(".team-box.advisory-team").css("opacity", 1);
  });

  $(".team-box.our-team").click(function () {
    // $(".team #advisory-team").fadeOut(0);
    // $(".team #our-team").fadeIn();

    $(".empty-back, .empty-back-mobile").fadeIn();
    $(".flip-card-inner").removeClass("rotate180");

    // $(".team-box.our-team").toggleClass("low-opacity");
    $(".team-box.our-team").css("opacity", 1);
    // $(".team-box.advisory-team").toggleClass("low-opacity");
    $(".team-box.advisory-team").css("opacity", low_opacity);
  });

  // ===============================================================

  // console.log('needed val: ', Math.round($("nav").offset().top + $("nav").outerHeight()));
  let nav_end_scroll = Math.round($("nav").offset().top + $("nav").outerHeight());
  // console.log(nav_end_scroll);
  $(window).on("scroll", function () {
    // console.log(Math.round($(window).scrollTop()));

    // if (Math.round($(window).scrollTop()) <= nav_end_scroll + 800 && Math.round($(window).scrollTop()) >= nav_end_scroll - 20) {
    if (Math.round($(window).scrollTop()) >= nav_end_scroll) {
      // console.log("scrolled");
      $("nav").addClass("shadow-sm");
    }

    if (Math.round($(window).scrollTop()) <= nav_end_scroll) {
      // console.log('top');
      $("nav").removeClass("shadow-sm");
    }
  });

  // let element = document.getElementById("nav");
  // if (element.scrollHeight + element.scrollTop === element.clientHeight) {
  //   console.log("scrolled");
  // }

  // ===============================================================

  let quote = "The first Bangladeshi journal run by the <span>youth</span> for the <span>youth</span>.";

  let i = 0;
  const myInterval = setInterval(() => {
    $("#quote").html(quote.substring(0, i + 1));
    if (quote[i] == "<") {
      if (quote[i + 1] == "/") {
        i += 7;
      } else {
        i += 6;
      }
    } else {
      i += 1;
    }
    if (i == quote.length) {
      clearInterval(myInterval);
    }
  }, 75);
});