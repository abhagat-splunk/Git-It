var async = require('async');
var http = require('http');


var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];


function curling(url, callback){
	http.get(url,function(response){
		var s = '';
		response.on('data',function(d){
			d = d.toString();
			s = s + d;
		})
		response.on('end',function(){
			callback(null,s);
		})
	})
};



async.map([process.argv[2],process.argv[3],process.argv[4]], curling,function(err,results){
	if(err){
		console.log(err);
	}
	else{
		for(var i=0;i<results.length;i++){
			console.log(results[i]);
		}
	}
} )
