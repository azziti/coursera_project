$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  //lorsqu'on enleve le focus sur le boutton cette fct va s'executer
  $(".navbar-toggle").blur(function (event) {
    var screenWidth = window.innerWidth;//viewport width
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');//collapse methode du j querry
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $(".navbar-toggle").click(function (event) {
    $(event.target).focus();
  });
});
