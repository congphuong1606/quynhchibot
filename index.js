var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()

var port = process.env.PORT || 3001
app.use(express.static(__dirname + "/"))
var server = http.createServer(app)
server.listen(port)
var wss = new WebSocketServer({server: server})

wss.on("connection", function (ws) {
    var id = setInterval(function () {
        ws.send(JSON.stringify(new Date()), function () {
        })
    }, 1000)

    ws.on("close", function () {
        clearInterval(id)
    })
});


const TelegramBot = require('node-telegram-bot-api');
const token = '633498972:AAFXxNEu0cOWgaNcazSH4Y9GDqWsuYNt3yk';
const bot = new TelegramBot(token, {polling: true});
var callapi = require('request');
var moment = require('moment');
var change_alias = require("./char.js");
var timeStamp = 0;
var parsed = [];
var baseUrl = "https://script.google.com/macros/s/AKfycbzh3oR1kj1MoieKw16Re4ee0TH76-khSMaovjOlSFrpUJtnp9k";



var lastMsgGroup = {id: null, lastMsg: null, timeStamp: null};
var listLastMsg = [];
var stopOtherGroup = false;


var userBoss = 398800833;
var userBoss1 = 612137896;
var groupBoss = -274967567;


function getMinSell(array) {
    let date = parseFloat(array[0].date);
    let buy = parseFloat(array[0].price);
    array.forEach(item => {
        if (date < parseFloat(item.date)) {
            date= parseFloat(item.date)
            buy = parseFloat(item.price);
        }
    });
    return buy;
}




function sendToGroupMe(msg) {
    console.log(msg)
    const GBUYSELLID=-343460402;


  let array =msg.text.split(' ');
    let flag =false;
    array.forEach(item=>{
        item=item.toLowerCase();
        if(item==='mua'||item==='ban'||item==='bán'||item==='buy'||item==='sell'){
            flag =true;
        }
    })
        if(flag){
            bot.forwardMessage(-274967567, msg.chat.id, msg.message_id);

        }



}

bot.on('message', (msg) => {
    sendToGroupMe(msg);
    /*var request = change_alias(msg.text.toString());
    var idChat = msg.chat.id;

    if (msg.chat.type === 'private' && msg.reply_to_message !== undefined) {

        if (msg.from.id === userBoss || msg.from.id === userBoss1) {
            let msgg = msg.text.toString();
            let iDD = msg.reply_to_message.forward_from.id;
            bot.sendMessage(iDD, msgg);

        }
    } else if (request === "reload data sheet") {
        reloadData();
    } else if (request === "/stopothergroup") {
        if (msg.from.id === userBoss || msg.from.id === userBoss1) {
            stopOtherGroup = true;
            bot.sendMessage(userBoss, "stoped other group");
            bot.sendMessage(userBoss1, "stoped other group");
        }

    } else if (request === "/openothergroup") {
        if (msg.from.id === userBoss || msg.from.id === userBoss1) {
            stopOtherGroup = false;
            bot.sendMessage(userBoss, "opened other group");
            bot.sendMessage(userBoss1, "opened other group");
        }

    } else if (request === "/chattoallgroup") {
        if (msg.from.id === userBoss || msg.from.id === userBoss1) {
            chatToALLGroup();
        } else {
            bot.sendMessage(msg.from.id, "Lệnh này không dành cho bạn (/chattoallgroup)");
        }
    }
    else if (request === "/testchattoallgroup") {
        if (msg.from.id === userBoss || msg.from.id === userBoss1) {
            testChatToALLGroup(idChat);

        } else {
            bot.sendMessage(msg.from.id, "Lệnh này không dành cho bạn (/chattoallgroup)");
        }
    } else if (request === '/remi') {
        getAPIREMI(msg);
    } else {

        switch (msg.chat.type) {
            case "private":
                if (idChat !== userBoss && idChat !== userBoss1) {
                    bot.forwardMessage(userBoss, msg.chat.id, msg.message_id);
                    bot.forwardMessage(userBoss1, msg.chat.id, msg.message_id);
                }
                handling(msg, request, 'user');
                break;
            case "group":
                sendToGroupMe(msg);
                if (stopOtherGroup) {
                    if (idChat === groupBoss) {
                        handling(msg, request, 'group');
                    }
                } else {
                    handling(msg, request, 'group');
                }
                updateGroupSheet(idChat, msg.chat.title, msg);

                break;
            case "supergroup":
                sendToGroupMe(msg);
                if (stopOtherGroup) {
                    if (idChat === groupBoss) {
                        handling(msg, request, 'group');
                    }
                } else {
                    handling(msg, request, 'group');
                }
                updateGroupSheet(idChat, msg.chat.title, msg);

                break;
            default:
                break;
        }

    }*/
});






















































