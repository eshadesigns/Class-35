class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("car racing game");
        title.position(350, 100);
        var input = createInput("name");
        input.position(400, 200);
        var button = createButton("play");
        button.position(450, 230);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var pname = input.value();
        playerCount+=1;
        player.update(pname);
        player.updateCount(playerCount);
        var greeting = createElement("h2");
        greeting.html("hello " + pname);
        greeting.position(200, 260);
        })
    }
}