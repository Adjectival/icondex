$(document).ready(function(){
  $("[class*='card-']").hide();
  $("[class*='btn']").hide();
// UI / UX
  $("#fishing_skill_btn").click(function(){
    $("[class*='btn']").fadeOut("slow");
    $("[class*='card-']").fadeOut("fast");
    $("[id*='-fish']").fadeIn("slow");
    $("[id*='fish_btn']").fadeIn("fast");
  });
  $("#fighting_skill_btn").click(function(){
    $("[class*='btn']").fadeOut("slow");
    $("[class*='card-']").fadeOut("fast");
    $("[id*='-fight']").fadeIn("slow");
  });
  $("#mining_skill_btn").click(function(){
    $("[class*='btn']").fadeOut("slow");
    $("[class*='card-']").fadeOut("fast");
    $("[id*='-mine']").fadeIn("slow");
  });
  $("#foraging_skill_btn").click(function(){
    $("[class*='btn']").fadeOut("slow");
    $("[class*='card-']").fadeOut("fast");
    $("[id*='-forage']").fadeIn("slow");
  });
  $("#farming_skill_btn").click(function(){
    $("[class*='btn']").fadeOut("slow");
    $("[class*='card-']").fadeOut("fast");
    $("[id*='-farm']").fadeIn("slow");
  });


  // fishing UX scripts
  $("#sunny_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("[id*='-fish']").show()
    $("[class*='rainy']").hide();
  });
  $("#rainy_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("[class*='rainy']").show();
    $("[class*='any']").show();
  });
  $("#spring_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("#Smallmouth_Bass-fish").show();
    $("#Anchovy-fish").show();
    $("#Eel-fish").show();
    $("#Catfish-fish").show();
    $("#Sardine-fish").show();
    $("#Sunfish-fish").show();
    $("#Shad-fish").show();
    $("#Halibut-fish").show();
    $("#Herring-fish").show();
    // all-season fish
    $("#Carp-fish").show();
    $("#Bream-fish").show();
    $("#Largemouth_Bass-fish").show();
    $("#Ghostfish-fish").show();
    $("#Stonefish-fish").show();
    $("#Ice_Pip-fish").show();
    $("#Lava_Eel-fish").show();
    $("#Sandfish-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Bullhead-fish").show();
    $("#Chub-fish").show();
    $("#Woodskip-fish").show();
    $("#Void_Salmon-fish").show();
    $("#Slimejack-fish").show();
  });
  $("#summer_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("#Tuna-fish").show();
    $("#Pike-fish").show();
    $("#Red_Mullet-fish").show();
    $("#Sturgeon-fish").show();
    $("#Red_Snapper-fish").show();
    $("#Sunfish-fish").show();
    $("#Super_Cucumber-fish").show();
    $("#Tilapia-fish").show();
    $("#Halibut-fish").show();
    $("#Dorado-fish").show();
    $("#Octopus-fish").show();
    $("#Rainbow_Trout-fish").show();
    $("#Pufferfish-fish").show();
    // all-season fish
    $("#Carp-fish").show();
    $("#Bream-fish").show();
    $("#Largemouth_Bass-fish").show();
    $("#Ghostfish-fish").show();
    $("#Stonefish-fish").show();
    $("#Ice_Pip-fish").show();
    $("#Lava_Eel-fish").show();
    $("#Sandfish-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Bullhead-fish").show();
    $("#Chub-fish").show();
    $("#Woodskip-fish").show();
    $("#Void_Salmon-fish").show();
    $("#Slimejack-fish").show();
  });
  $("#fall_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("#Red_Snapper-fish").show();
    $("#Super_Cucumber-fish").show();
    $("#Tilapia-fish").show();
    $("#Shad-fish").show();
    $("#Sardine-fish").show();
    $("#Catfish-fish").show();
    $("#Eel-fish").show();
    $("#Anchovy-fish").show();
    $("#Smallmouth_Bass-fish").show();
    $("#Albacore-fish").show();
    $("#Sea_Cucumber-fish").show();
    $("#Tiger_Trout-fish").show();
    $("#Walleye-fish").show();
    $("#Salmon-fish").show();
    // all-season fish
    $("#Carp-fish").show();
    $("#Bream-fish").show();
    $("#Largemouth_Bass-fish").show();
    $("#Ghostfish-fish").show();
    $("#Stonefish-fish").show();
    $("#Ice_Pip-fish").show();
    $("#Lava_Eel-fish").show();
    $("#Sandfish-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Bullhead-fish").show();
    $("#Chub-fish").show();
    $("#Woodskip-fish").show();
    $("#Void_Salmon-fish").show();
    $("#Slimejack-fish").show();
  });
  $("#winter_fish_btn").click(function(){
    $("[class*='card-']").hide()
    $("#Perch-fish").show();
    $("#Lingcod-fish").show();
    $("#Squid-fish").show();
    $("#Tuna-fish").show();
    $("#Pike-fish").show();
    $("#Red_Mullet-fish").show();
    $("#Sturgeon-fish").show();
    // all-season fish
    $("#Carp-fish").show();
    $("#Bream-fish").show();
    $("#Largemouth_Bass-fish").show();
    $("#Ghostfish-fish").show();
    $("#Stonefish-fish").show();
    $("#Ice_Pip-fish").show();
    $("#Lava_Eel-fish").show();
    $("#Sandfish-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Bullhead-fish").show();
    $("#Chub-fish").show();
    $("#Woodskip-fish").show();
    $("#Void_Salmon-fish").show();
    $("#Slimejack-fish").show();
  });
  $("#day_fish_btn").click(function(){
    $("[class*='card-']").hide();
    $("#Albacore-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Sandfish-fish").show();
    $("#Octopus-fish").show();
    $("#Tilapia-fish").show();
    $("#Red_Mullet-fish").show();
    $("#Red_Snapper-fish").show();
    $("#Sturgeon-fish").show();
    $("#Rainbow_Trout-fish").show();
    $("#Dorado-fish").show();
    $("#Sunfish-fish").show();
    $("#Sardine-fish").show();
    $("#Sea_Cucumber-fish").show();
    $("#Tiger_Trout-fish").show();
    $("#Salmon-fish").show();
    $("#Largemouth_Bass-fish").show();
  });
  $("#night_fish_btn").click(function(){
    $("[class*='card-']").hide();
    $("#Bream-fish").show();
    $("#Super_Cucumber-fish").show();
    $("#Squid-fish").show();
    $("#Albacore-fish").show();
    $("#Scorpion_Carp-fish").show();
    $("#Sandfish-fish").show();
    $("#Eel-fish").show();
    $("#Walleye-fish").show();
    $("#Red_Mullet-fish").show();
    $("#Red_Snapper-fish").show();
    $("#Sturgeon-fish").show();
    $("#Rainbow_Trout-fish").show();
    $("#Dorado-fish").show();
    $("#Sunfish-fish").show();
    $("#Sardine-fish").show();
    $("#Sea_Cucumber-fish").show();
    $("#Tiger_Trout-fish").show();
    $("#Salmon-fish").show();
    $("#Largemouth_Bass-fish").show();
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
