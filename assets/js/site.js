/**
 * Menu
 */
$('[data-js="menu-toggle"]').on("click", function(event) {
  event.preventDefault();
  var w = $('[data-js="menu"]');

  w.css({
    display: (w.css("display") === "none")
      ? "block"
      : "none"
  });
});

/**
 * Footer year
 */
$(document).ready(function() {
  $('[data-js="footer-year"]').text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function() {
  $('[data-js="email-link-cloaked"]').on("click", function(event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Moves WeChat widget
 */
function moveWidget(event) {
  var w = $('[data-js="wechat-widget"]');

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$('[data-js="wechat-link"]').on("mouseenter", function(event) {
  $('[data-js="wechat-widget"]').css({ display: "block" });

  moveWidget(event);
});

$('[data-js="wechat-link"]').on("mousemove", function(event) {
  moveWidget(event);
});

$('[data-js="wechat-link"]').on("mouseleave", function(event) {
  $('[data-js="wechat-widget"]').css({ display: "none" });
});
