var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = 'wuwu...网站丢失了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = '哈哈，被骗了吧！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });