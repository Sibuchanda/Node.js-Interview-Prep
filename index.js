import http from 'http';

const PORT = 5000;

const server = http.createServer((req,res)=>{
    res.end("Response from server side");
});

server.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`);
})

