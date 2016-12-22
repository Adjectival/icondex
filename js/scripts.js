$(document).ready(function(){
  $("#sunny_tog").click(function(){
    $("#albacore").toggle();

  });
  $("#rainy_tog").click(function(){
    $("#albacore").toggle();
    $("#catfish").toggle();
    $("#eel").toggle();
    $("#shad").toggle();

  });

  $("#spring_tog").click(function(){
    $("#catfish").toggle();
    $("#eel").toggle();
    $("#shad").toggle();

  });
  $("#summer_tog").click(function(){
    $("#chub").toggle();
    $("#octopus").toggle();
    $("#redmullet").toggle();
    $("#shad").toggle();
    $("#sturgeon").toggle();
    $("#tilapia").toggle();

  });
  $("#fall_tog").click(function(){
    $("#albacore").toggle();
    $("#catfish").toggle();
    $("#eel").toggle();
    $("#salmon").toggle();
    $("#shad").toggle();
    $("#tilapia").toggle();

  });
  $("#winter_tog").click(function(){
    $("#albacore").toggle();
    $("#redmullet").toggle();
    $("#sturgeon").toggle();

  });

  $("#day_tog").click(function(){
    $("#albacore").toggle();
    $("#tilapia").toggle();

  });
  $("#night_tog").click(function(){
    $("#albacore").toggle();
    $("#eel").toggle();

  });

  $("#names_tog").click(function(){
    $("span").toggle();


  });



});

// $("#albacore").toggle();
// $("#catfish").toggle();
// $("#chub").toggle();
// $("#eel").toggle();
// $("#octopus").toggle();
// $("#redmullet").toggle();
// $("#salmon").toggle();
// $("#shad").toggle();
// $("#sturgeon").toggle();
// $("#tilapia").toggle();
