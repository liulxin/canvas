var canvas;
var stage;
var text;
var count  = 0;

window.onload = function () {
    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    text = new createjs.Text("Hello World +--> 0", "20px Arial", "#ff7700");
    stage.addChild(text);
    // stage.update();
    createjs.Ticker.addEventListener('tick',tick);
    function tick() {
        count ++;
        text.text = "Hello World +--> " + count;
        stage.update();
    }
};