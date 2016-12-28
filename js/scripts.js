$(document).ready(function(){

// UI
  // farming btns
  // $("#sunny_fish").hide();
  // $("#rainy_fish").hide();
  // $("#spring_fish").hide();
  // $("#summer_fish").hide();
  // $("#fall_fish").hide();
  // $("#winter_fish").hide();
  // $("#day_fish").hide();
  // $("#night_fish").hide();

  // fish btns
  $("#sunny_fish").hide();
  $("#rainy_fish").hide();
  $("#spring_fish").hide();
  $("#summer_fish").hide();
  $("#fall_fish").hide();
  $("#winter_fish").hide();
  $("#day_fish").hide();
  $("#night_fish").hide();

// fishing UX scripts
  $("#fishing_skill_btn").click(function(){
    var btn = $("[id*='_fish']");
    btn.fadeIn("slow");
    var btn = $("[id*='_farm']");
    btn.fadeOut("slow");
    var card = $("[class*='card-']");
    btn.fadeOut("slow");
  });
  $("#farming_skill_btn").click(function(){
    var btn = $("[id*='_farm']");
    btn.fadeIn("slow");
    var btn = $("[id*='_fish']");
    btn.fadeOut("slow");
    var card = $("[class*='card-']");
    card.fadeOut("fast");
  });

  $("#sunny_fish").click(function(){
    $("[class*='card-']").show()
    $("#Catfish").hide();
    $("#Eel").hide();
    $("#Red_Snapper").hide();
    $("#Shad").hide();
    $("#Walleye").hide();
  });
  $("#rainy_fish").click(function(){
    $("[class*='card-']").hide()
    $("#Catfish").show();
    $("#Eel").show();
    $("#Red_Snapper").show();
    $("#Shad").show();
    $("#Walleye").show();
  });
  $("#spring_fish").click(function(){
    $("[class*='card-']").hide()
    $("#Smallmouth_Bass").show();
    $("#Anchovy").show();
    $("#Eel").show();
    $("#Catfish").show();
    $("#Sardine").show();
    $("#Sunfish").show();
    $("#Shad").show();
    $("#Halibut").show();
    $("#Herring").show();
    // all-season fish
    $("#Carp").show();
    $("#Bream").show();
    $("#Largemouth_Bass").show();
    $("#Ghostfish").show();
    $("#Stonefish").show();
    $("#Ice_Pip").show();
    $("#Lava_Eel").show();
    $("#Sandfish").show();
    $("#Scorpion_Carp").show();
    $("#Bullhead").show();
    $("#Chub").show();
    $("#Woodskip").show();
    $("#Void_Salmon").show();
    $("#Slimejack").show();
  });
  $("#summer_fish").click(function(){
    $("[class*='card-']").hide()
    $("#Tuna").show();
    $("#Pike").show();
    $("#Red_Mullet").show();
    $("#Sturgeon").show();
    $("#Red_Snapper").show();
    $("#Sunfish").show();
    $("#Super_Cucumber").show();
    $("#Tilapia").show();
    $("#Halibut").show();
    $("#Dorado").show();
    $("#Octopus").show();
    $("#Rainbow_Trout").show();
    $("#Pufferfish").show();
    // all-season fish
    $("#Carp").show();
    $("#Bream").show();
    $("#Largemouth_Bass").show();
    $("#Ghostfish").show();
    $("#Stonefish").show();
    $("#Ice_Pip").show();
    $("#Lava_Eel").show();
    $("#Sandfish").show();
    $("#Scorpion_Carp").show();
    $("#Bullhead").show();
    $("#Chub").show();
    $("#Woodskip").show();
    $("#Void_Salmon").show();
    $("#Slimejack").show();
  });
  $("#fall_fish").click(function(){
    $("[class*='card-']").hide()
    $("#Red_Snapper").show();
    $("#Super_Cucumber").show();
    $("#Tilapia").show();
    $("#Shad").show();
    $("#Sardine").show();
    $("#Catfish").show();
    $("#Eel").show();
    $("#Anchovy").show();
    $("#Smallmouth_Bass").show();
    $("#Albacore").show();
    $("#Sea_Cucumber").show();
    $("#Tiger_Trout").show();
    $("#Walleye").show();
    $("#Salmon").show();
    // all-season fish
    $("#Carp").show();
    $("#Bream").show();
    $("#Largemouth_Bass").show();
    $("#Ghostfish").show();
    $("#Stonefish").show();
    $("#Ice_Pip").show();
    $("#Lava_Eel").show();
    $("#Sandfish").show();
    $("#Scorpion_Carp").show();
    $("#Bullhead").show();
    $("#Chub").show();
    $("#Woodskip").show();
    $("#Void_Salmon").show();
    $("#Slimejack").show();
  });
  $("#winter_fish").click(function(){
    $("[class*='card-']").hide()
    $("#Perch").show();
    $("#Lingcod").show();
    $("#Squid").show();
    $("#Tuna").show();
    $("#Pike").show();
    $("#Red_Mullet").show();
    $("#Sturgeon").show();
    // all-season fish
    $("#Carp").show();
    $("#Bream").show();
    $("#Largemouth_Bass").show();
    $("#Ghostfish").show();
    $("#Stonefish").show();
    $("#Ice_Pip").show();
    $("#Lava_Eel").show();
    $("#Sandfish").show();
    $("#Scorpion_Carp").show();
    $("#Bullhead").show();
    $("#Chub").show();
    $("#Woodskip").show();
    $("#Void_Salmon").show();
    $("#Slimejack").show()
  });
  $("#day_fish").click(function(){
    $("[class*='card-']").hide();
    $("#Albacore").show();
    $("#Scorpion_Carp").show();
    $("#Sandfish").show();
    $("#Octopus").show();
    $("#Tilapia").show();
    $("#Red_Mullet").show();
    $("#Red_Snapper").show();
    $("#Sturgeon").show();
    $("#Rainbow_Trout").show();
    $("#Dorado").show();
    $("#Sunfish").show();
    $("#Sardine").show();
    $("#Sea_Cucumber").show();
    $("#Tiger_Trout").show();
    $("#Salmon").show();
    $("#Largemouth_Bass").show();
  });
  $("#night_fish").click(function(){
    $("[class*='card-']").hide();
    $("#Bream").show();
    $("#Super_Cucumber").show();
    $("#Squid").show();
    $("#Albacore").show();
    $("#Scorpion_Carp").show();
    $("#Sandfish").show();
    $("#Eel").show();
    $("#Walleye").show();
    $("#Red_Mullet").show();
    $("#Red_Snapper").show();
    $("#Sturgeon").show();
    $("#Rainbow_Trout").show();
    $("#Dorado").show();
    $("#Sunfish").show();
    $("#Sardine").show();
    $("#Sea_Cucumber").show();
    $("#Tiger_Trout").show();
    $("#Salmon").show();
    $("#Largemouth_Bass").show();
  });

});

// Albacore
// Anchovy
// Bream
// Bullhead
// Carp
// Catfish
// Chub
// Dorado
// Eel
// Ghostfish
// Halibut
// Herring
// Ice_Pip
// Largemouth_Bass
// Lava_Eel
// Lingcod
// Octopus
// Perch
// Pike
// Pufferfish
// Rainbow_Trout
// Red_Mullet
// Red_Snapper
// Salmon
// Sandfish
// Sardine
// Scorpion_Carp
// Sea_Cucumber
// Shad
// Slimejack
// Smallmouth_Bass
// Sturgeon
// Squid
// Stonefish
// Sturgeon
// Sunfish
// Super_Cucumber
// Tiger_Trout
// Tilapia
// Tuna
// Void_Salmon
// Walleye
// Woodskip
