$(document).ready(function () {
  //button click event
  $("#btn").click(function () {
    // pushed form down
    $(".form").css("margin-top", "6px");
    // folds down envelope top
    $(".top").css({
      "transform": "rotatex(0deg)",
      "z-index": "3"
    });
    // rotates envelope
    $(".envelope").css("transform", "rotatey(180deg)");
    // stores first name text
    var ipt = document.getElementById('first').value;
    // enters text in to div
    $("#name").html(ipt);
    // adds box shadow to front of envelope
    $(".envelope__bottom--front").css("box-shadow", "0 0 30px black");
  });
});