class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(150, 10)
        var input=createInput('Enter Your Name Here');
        input.position(150, 100);
        var button=createButton('PLAY');
        button.position(150, 200);
        var greeting=createElement('h4');
        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name=input.value();
                playercount = playercount+1;
                player.update(name);
                player.updateCount(playercount);
                greeting.html('HELLO '+ name);
                greeting.position(150, 50);
            }
        )

        

    }
}