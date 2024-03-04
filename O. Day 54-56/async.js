const fs = require("fs/promises");

async function readFile() {
    let fileData;

    //   fs.readFile("data.txt", function(error, fileData){
    // if(error){
    //     ...
    // }
    //     console.log("File read successfully!");
    //     console.log(fileData.toString());
    //     // start another async task that sends the data to a database
    //   });
    // console.log("Hi there!");


    //   fs.readFile("data.txt")
    //     .then(function (fileData) {
    //       console.log("File read successfully!");
    //       console.log(fileData.toString());
    //       // return anotherAsyncOperation;
    //     })
    //     .then(function () {});
    //     .cath(function (error) {
    //         console.log(error);
    //     });
    // console.log("Hi there!");


    try {
        fileData = await fs.readFile("data.txt");
    } catch(error) {
        console.log(error);
    }

    console.log("File read successfully!");
    console.log(fileData.toString());
    // return anotherAsyncOperation;
    console.log("Hi there!");
}

readFile();