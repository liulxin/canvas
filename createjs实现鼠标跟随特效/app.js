var canvas;
var stage;
var img = new Image();
var sprite;
var spkls;
window.onload = function () {
    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);

    stage.addEventListener('stagemousedown',clickCanvas);
    stage.addEventListener('stagemousemove',moveCanvas);

    var data = {
        images : ['spritesheet_sparkle.png'],
        frames:{width:20,height:20,regX:10,regY:10}
    };



    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));

    spkls = new createjs.Container();
    stage.addChild(spkls);


    createjs.Ticker.addEventListener('tick',tick);

};
function tick(e) {
    var t =  spkls.numChildren;

    console.log(t);
    for(var i = t-1;i>0;i--){
        var s = spkls.getChildAt(i);

        s.vY += 2;
        s.vX += 1;
        s.x += s.vX;
        s.y += s.vY;

        // s.scaleX = s.scaleY =   s.scaleX + s.vS;
        s.alpha += s.vA;

        if(s.alpha <= 0  || s.y > canvas.height){
            spkls.removeChildAt(i)
        }
    }

    stage.update(e);
}

function clickCanvas(e) {
    addFir(Math.random() * 200 + 100 | 0,stage.mouseX ,stage.mouseY ,2);
}
function moveCanvas(e) {
    addFir((Math.random() * 4 + 2) | 0,stage.mouseX ,stage.mouseY ,1);
}
function addFir(count, x, y,speed) {
    for(var i = 0;i < count ;i++){
        var s = sprite.clone();
        s.x = x;
        s.y = y;
        s.alpha = Math.random() * 0.5 + 0.5;
        s.scale = Math.random() + 0.6;

        var a = Math.PI * 2 * Math.random();
        var v = (Math.random() - 0.5 ) * 30 * speed;
        s.vX = Math.cos(a) * v;
        s.vY = Math.sin(a) * v;
        s.vS = (Math.random() - 0.5) * 0.2; // scale
        s.vA =  Math.random() * 0.05 - 0.01; // alpha

        spkls.addChild(s);
    }
}
