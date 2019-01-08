// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//     if (startchange.length) {
//         $(document).scroll(function () {
//             scroll_start = $(this).scrollTop();
//             if (scroll_start > offset.top) {
//                 $(".navbar-default").css('background-color', 'red');
//             } else {
//                 $('.navbar-default').css('background-color', 'transparent');
//             }
//         });
//     }
// });