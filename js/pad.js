$(document).ready(function() {

  new1(16, 16);




  $("body").on("click", ".b1", function() {
    // $(".acc").css("background-color", "black");
    var sqr = prompt("How many squares per side?");
  $(".acc").remove();
  new1(sqr, sqr);
  })

})





function new1(x, y) {
var square_size = $('#grid_container').width()/input - 2; 

  for (var j = 0; j < y; j++) {
    for (var i = 0; i < x; i++) {
      var div = $("<div></div>").addClass("acc grid" + j);

      $(".table").append(div);

      $(".grid" + j).css({
        "float": "left",
        "background-color": "black"
      });

    }
  }


  $(".acc").on("mouseenter", function() {
    var count = 0;

    if(count === 0){
        $(this).css("background-color", "#676567");
        count++;
    }
    else{

      $(this).css("background-color", "white");
    }
})




}
