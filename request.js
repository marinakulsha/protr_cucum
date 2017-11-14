let request= require('request');
 request('http://foodbank.d5.aisnovations.com/', function(err, response,body){
     if(err){
         throw Err(err);
     }
     console.log(response.statusCode);
     console.log(response.headers['content-type']);
     console.log(response.headers['cache-control']);
     console.log(response.headers)

 });
