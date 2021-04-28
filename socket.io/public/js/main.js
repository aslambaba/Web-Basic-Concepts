const socket = io();

// This is the listner of conformation messege that send form server side
socket.on('Conformation-Messege',msg=>{
    console.log(msg);
});

// This is the listner to alert everyone that new user is active
socket.on('Broadcase-Messege', msg=> {
    alert(msg);
})

// This is the simple listner that recieve the messege from server side
socket.on('messege', msg=>{
    console.log(msg);
});

// This function is called when button is pressed !
function Boradcast(){
    socket.emit('BroadCastMessege', "The Button Was Clicked !!");
}