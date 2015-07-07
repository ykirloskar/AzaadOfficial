$(".profile").each(function(i, obj) {
  var side = Math.random()*$("#pictures").width();
    if (Math.random() > 0.5){side -= 50}
    else {side+=50}
  var up = 500;
  $(this).css({top:up, left:side});
})

for (var i=0; i<6; i++) {
  $(".profile").each(function(i, obj) {
    var time = 0;
    while (time <= 15000) {time=Math.random()*30000;}
    $(this).animate({top:"-3000px"}, time, function() {
    var side = Math.random()*$("#pictures").width();
    // if (side>$("#pictures").width()-550){side -= 550}
    // else if (side < $("#pictures").width()+50){side+=50}
    var up = 500;
    $(this).css({top:up, left:side});
  });})
}
