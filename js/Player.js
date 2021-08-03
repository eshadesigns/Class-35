class Player{
 constructor(){

 }
 update(pname){
     var pIndex = "player" + playerCount;
    database.ref(pIndex).set({
        name: pname
    }) 
 }

 updateCount(count){
    database.ref('/').update({
    playerCount: count
    })
}
 
 getCount(){
     var pref = database.ref("playerCount");
     pref.on("value", function(data){
     playerCount=data.val();
     });
 }
}
