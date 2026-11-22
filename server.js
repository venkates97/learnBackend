const { createServer } = require("node:http");



const server= createServer((req, res) => {

  console.log(`Method: ${req.method}, 
              URL: ${req.url}, 
              Headers: ${JSON.stringify(req.headers)}`);
res.writeHead(200, { 'Content-Type': 'application/json' });

res.end(JSON.stringify([{"Title": "Todo 1", "Description": "This is the first todo item.","isDone": false}, {"Title": "Todo 2", "Description": "This is the second todo item.","isDone": false}])
);
  
});


server.listen(3000, 'localhost', () => {
  console.log('Listening on localhost:3000');
} 
);












// // server.mjs
// // import { createServer } from 'node:http';


// const { createServer } = require("node:http");


// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/json' });
//   res.end(JSON.stringify([{"Title": "Todo 1", "Description": "This is the first todo item."}, {"Title": "Todo 2", "Description": "This is the second todo item."}]));
// console.log(req.method, req.url, req.headers) ;


// });



// // starts a simple http server locally on port 3000
// server.listen(3000, 'localhost', () => {
//   console.log('Listening on localhost:3000');
// });

// // run with `node server.mjs`
