var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 8082,function(){
    console.log('Listening on '+server.address().port);
});