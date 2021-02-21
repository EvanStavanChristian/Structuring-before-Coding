class Player{
    constructor(){

    }
    getCount(){
        var playercountref = database.ref("playercountref");
        playercountref.on('value', function(data){
        playercount=data.val();
        })
    }
    update(name){
        var pIndex='player'+ playercount;
        database.ref(pIndex).set({
            name:name
        })
    }
    update(count){
        database.ref('/').update({
            playercount:count
        })
    }
}