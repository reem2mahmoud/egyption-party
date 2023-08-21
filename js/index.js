/**** HEADER-MENU
show and hide side-menu
*/

// (function ($) {
//   $(".menu-vertical").style({ left: -menu_width });
// })(jQuery);

let menu_width = $(".menu-vertical").innerWidth();
$(".menu-toggle").click(function (e) {
  $(".menu-vertical").animate({ left: 0 });
  $(".menu-toggle").animate({ left: menu_width });
});
$(".fa-xmark").click(function () {
  $(".menu-vertical").animate({ left: -menu_width });
  $(".menu-toggle").animate({ left: "20px" });
});

/**** SIGNER SECTION
show and hide paragraphs when click on header
*/

$(".singers h3").click(function () {
  $(".singers p").slideUp();
  $(this).next().slideToggle();
});

/****COUNT-DOWN
 * create count-down timer
 */
let eventDate = new Date("Jan 21, 2024 12:0:0").getTime();

let timer = setInterval(function () {
  let now = new Date().getTime();
  let distance = eventDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").text(days + "D");
  $("#hours").text(hours + "H");
  $("#minutes").text(minutes + "M");
  $("#seconds").text(seconds + "S");

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

/****FOTM-TEXTAREA
 * calculate numers written in textarea
 */
$(".send_message_btn").click(function (e) {
  e.preventDefault();
});
$("textarea").keyup(function () {
  let msg = "your available character finished";
  let length = 100 - $(this).val().length;
  length <= 0
    ? $(".character_number").text(msg)
    : $(".character_number").text(length);
});
