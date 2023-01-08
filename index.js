const http = require("http");
const app = require("./app");
const fs = require("fs");
const colors = require("colors");
const data = require("./data");
const path = require("path");
const dirPath = path.join(__dirname)
// console.log(app.x);
console.log(dirPath);

// const input = process.argv;
// console.log(process.argv[2]);
// if ('add' == input[2]) {
//     fs.writeFileSync("hello.txt", "Concepts Learning"); // To Create a file with given text
// } else if ('remove' == input[2]) {
//     fs.unlinkSync("hello.txt"); // To Delete a file
// }

fs.readdir(dirPath, (err, files)=>{
    files.forEach((item) =>{
        console.log("file name:"+item);
    })
})
// console.log(__dirname);
// console.log(__filename);
// console.log("Hello".blue)

// console.log("code with concepts learning");

// const dataControl = (req, resp) => {
//     resp.writeHead(200, {'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);
