$(document).ready(function(){
  $("#sunny_tog").click(function(){
    $("#Albacore").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();

  });
  $("#rainy_tog").click(function(){
    $("#Albacore").toggle();
    $("#Catfish").toggle();
    $("#Eel").toggle();
    $("#Shad").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });

  $("#spring_tog").click(function(){
    $("#Catfish").toggle();
    $("#Eel").toggle();
    $("#Shad").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });
  $("#summer_tog").click(function(){
    $("#Chub").toggle();
    $("#Octopus").toggle();
    $("#Red_Mullet").toggle();
    $("#Shad").toggle();
    $("#Sturgeon").toggle();
    $("#Tilapia").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });
  $("#fall_tog").click(function(){
    $("#Albacore").toggle();
    $("#Catfish").toggle();
    $("#Eel").toggle();
    $("#Salmon").toggle();
    $("#Shad").toggle();
    $("#Tilapia").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });
  $("#winter_tog").click(function(){
    $("#Albacore").toggle();
    $("#Red_Mullet").toggle();
    $("#Sturgeon").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });

  $("#day_tog").click(function(){
    $("#Albacore").toggle();
    $("#Tilapia").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });
  $("#night_tog").click(function(){
    $("#Albacore").toggle();
    $("#Eel").toggle();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
    $("#").hide();
    $("#").show();
  });

  $("#names_tog").click(function(){
    $("span").toggle();

  });



});

// Spring:{Anchovy,Sardine,Smallmouth,Catfish,Sunfish,Herring,Eel,Shad,Halibut,}
//
// Summer:{Pufferfish,Tuna,Rainbow,Catfish,Pike,Sunfish,Red_Mullet,Octopus,Red_Snapper,Supercuke,Sturgeon,Tilapia,Dorado,Shad,Halibut}
//
// Fall:{Anchovy, Sardine, Smallmouth, Salmon, Walleye,Catfish,Eel, Red_Snapper, Seacuke, Supercuke, Tiger_Trout, Tilapia, Albacore, Shad}
//
// Winter:{Tuna, Sardine, Perch, Carp, Pike, Red_Mullet, Herring, Squid, Seacuke, Sturgeon, Tiger_Trout, Albacore, Halibut, Lingcod}
//
// Any:{Woodskip,Slimejack,Void_Salmon}
