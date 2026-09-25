$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 500, 250, 20, "hotpink");
createPlatform(450, 400, 200, 20, "purple");
createPlatform(750, 300, 200, 20, "blue");
createPlatform(1050, 400, 200, 20, "green");
createPlatform(1350, 300, 250, 20, "orange");
    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 450);
createCollectable("grace",550, 350);
createCollectable("steve", 850, 250);


    
    // TODO 4 - Create Cannons
createCannon("left", 300, 2500);
createCannon("right", 500, 3000);
createCannon("top", 800, 3500);

    
   //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
