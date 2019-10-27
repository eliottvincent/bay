function moveWidget(event) {
  var w = $("#wechat-widget");
  w.css({ left: event.pageX - 25, top: event.pageY - w.height() - 60 });
}

$("a#wechat-link").on("mouseenter", function(event) {
  var w = $("#wechat-widget");
  w.css({ display: "block" });
  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});
