var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","5383c8e5-c9f3-4c7c-8632-76e5bbdecba0","36e88714-67ac-4644-b5fc-d3326596cc0c","719b9cef-05a6-4324-93bd-71b67e68328a","4a3c7f85-2c03-4a31-9ea3-83779a2d35d6","d34f3ca7-d695-4f9b-baf0-622ea3d81743","86f2282b-b336-496d-a470-a4e5b5ef4233","cfec58e3-deaa-408c-a4cc-08d33249d051"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"aaa","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"o62b9MP98YqVPQ8CRWzJgF8QsWKPZU69","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"AbFHs8wQKQlKu0g3RJCFdIVsKaVi.vWV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"abb","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"QkaX3SIKCxVUKnCpEjWvKEZDbGvpjHRi","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"5383c8e5-c9f3-4c7c-8632-76e5bbdecba0":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"36e88714-67ac-4644-b5fc-d3326596cc0c":{"name":"c","sourceUrl":null,"frameSize":{"x":395,"y":262},"frameCount":1,"looping":true,"frameDelay":12,"version":"VXAM5vxCNrZPv6z107khvtXhyzZZ8D2z","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":262},"rootRelativePath":"assets/36e88714-67ac-4644-b5fc-d3326596cc0c.png"},"719b9cef-05a6-4324-93bd-71b67e68328a":{"name":"aa","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"seAJES4.jbGKE8Z2jjm.z3gNF2RZbm7c","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/719b9cef-05a6-4324-93bd-71b67e68328a.png"},"4a3c7f85-2c03-4a31-9ea3-83779a2d35d6":{"name":"","sourceUrl":"assets/api/v1/animation-library/gamelab/MVFn28R_CImOTTFhErwa2uI0MOm1bCSD/category_vehicles/ship16.png","frameSize":{"x":296,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"MVFn28R_CImOTTFhErwa2uI0MOm1bCSD","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MVFn28R_CImOTTFhErwa2uI0MOm1bCSD/category_vehicles/ship16.png"},"d34f3ca7-d695-4f9b-baf0-622ea3d81743":{"name":"e","sourceUrl":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png","frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":2,"version":"16swvA_atz8z1bmx9elbnfkygyuHWDMs","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png"},"86f2282b-b336-496d-a470-a4e5b5ef4233":{"name":"d","sourceUrl":"assets/api/v1/animation-library/gamelab/Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ/category_vehicles/ufoBlue.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":2,"version":"Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ/category_vehicles/ufoBlue.png"},"cfec58e3-deaa-408c-a4cc-08d33249d051":{"name":"a","sourceUrl":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="lightblue";

var goal =0;
var death = 0;

hero.setAnimation("a");
hero.scale=.1;
enemy1.setAnimation("c");
enemy1.scale=.2;
enemy2.setAnimation("d");
enemy2.scale=.7;
enemy3.setAnimation("e");
enemy3.scale=.2;

enemy1.setVelocity(-15,0);
enemy2.setVelocity(20,0);
enemy3.setVelocity(-18,0);


function draw() {
background("purple");
//plano de fundo(b);
createEdgeSprites();

hero.bounceOff(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-6;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+6;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-6;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+6;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death=death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
} 
if(death>5){
 fill("maroon");
textSize(18);
 text("PERDEU",170,160);
 hero.destroy();
 enemy1.destroy();
 enemy2.destroy();
 enemy3.destroy();
 goal.destroy;
 death.destroy;
}  
stroke("lightgreen");
fill("lightgreen");
textSize(17,17);
 text("Wins: "+goal,250,300);
  strokeWeight(0);
  fill("lightblue");
  fill("yellow");
  
 stroke("lightgreen");
fill("lightgreen");
textSize(18,18);
 text("Mortes: "+death,60,300);
  strokeWeight(0);
  fill("lightblue");
  fill("yellow");
 

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
