setTimeout(function(){ 
    var msg = document.getElementsByClassName("abertura");
    while(msg.length > 0){
        msg[0].parentNode.removeChild(msg[0]);
    }
}, 4000);