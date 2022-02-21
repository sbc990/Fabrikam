var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("CEO : XYZ");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam pvt. ltd. </h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>About Fabrikam : 24 Offices all over world</li>"+
                    " <li>HR Login</li>"+
                    " <li>ACcount Login </li>"+
                    " <li>Project Login</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
