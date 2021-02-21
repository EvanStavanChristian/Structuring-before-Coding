class Game{
    constructor(){

    }
   getState(){
       var gamestateref = database.ref("gamestate");
       gamestateref.on('value', function(data){
           gamestate=data.val();
       })
   }
   update(state){
       database.ref('/').update({
           gamestate:state
       })
   }
   start(){
       if(gamestate===0){
           form=new Form();
           form.display();
           player=new Player();
           player.getCount()
       }
   }
}