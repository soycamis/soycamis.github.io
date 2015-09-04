"use strict";

$(function() {
  $("p").on("mouseover", function() {
    $(this)
    .removeClass("animated zoomIn")
    .addClass("animated hinge")
    .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
      $(this)
      .removeClass("animated hinge")
      .addClass("animated fadeIn")
    });
  });
});
