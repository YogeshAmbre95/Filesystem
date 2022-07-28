// // file handling ??
// // testing ??


const fs = require('fs');

const dirpath = "./file-repo/";
const filepath = "./file-repo/hello.txt"


// // sync and async ---->  
// // sync -- blocking 
// // asyn --  non blocking

//program 1

//reading the file

let a=fs.readFileSync(filepath,{encoding:"utf8"})
console.log(a)

//program2

//to check the whether file exist

console.log(fs.existsSync(filepath))

if (fs.existsSync(filepath)) {
    let c = fs.readFileSync(filepath, { encoding: "utf8" });
    console.log(c)
}
else {
    console.log(`${filepath} not found`)
}

//program 3

// program 3 (.npmrc)

if (fs.existsSync(dirpath)) {
    fs.writeFileSync(dirpath + "/hello2.text", "i am learning js")
}
else {
    console.log(`${dirpath} not found`)
}

if (fs.existsSync(dirpath)) {
    fs.writeFileSync(dirpath + "/hello2.text", "\n i am learning python", { flag: "a" })
}
else {
    console.log(`${dirpath} not found`)
}

// program 4 (to append the filesystem)

if (fs.existsSync(dirpath)) {
    fs.appendFileSync(dirpath + "/hello2.text", "\n i am learning Java")
}
else {
    console.log(`${dirpath} not found`)
}

// program 5(rename operation)
if (fs.existsSync(dirpath)) {
    fs.renameSync(dirpath + "/hello2.text", dirpath + "/imp.text")
}
else {
    console.log(`${dirpath} not found`)
}

//Program6 (file delete operation)
if (fs.existsSync(dirpath)) {
    fs.unlinkSync(dirpath+"/hello.txt")
}
else {
    console.log(`${dirpath} not found`)
}