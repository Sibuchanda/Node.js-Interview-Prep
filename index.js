import http from 'http';

const PORT = 5000;

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("Home page")
    }else if(req.url==='/getdata'){
          const data = {
            name: "Lester_101",
            course: "MCA",
            age: 23
        };
       res.writeHead(200,{"Content-Type": "application/json"});
       res.end(JSON.stringify(data));  // As res.end() accepts only (i) string (ii)Buffer (iii) unit8array .  If we simply pass res.end(data)  then we are actually passing object that is wrong. So we have to convert this object into string. That is why we use JSON.stringfy(). Because it converts the object into JSON and JSON itselt is a string.
    }
    else if(req.url==='/about'){
        res.writeHead(200,{"Content-Type" : "text/plain"});
        res.end("This is about page");
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 page not found!");
    }
});

server.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`);
})
