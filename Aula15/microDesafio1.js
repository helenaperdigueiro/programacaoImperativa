const fs = require('fs');
 
// forma convencional
    // fs.readFile('./Aula15/file.json', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(JSON.parse(data));
    //     }

    // });

    let readFilePromise = new Promise((resolve, reject) => {
            fs.readFile('./Aula15/file1.json',(error,data)=> {
                if(error){
                    reject(error)
                }else{
                    resolve(data)
                }
            });           
        }
    )

    readFilePromise.then((resolve) => {
        console.log(JSON.parse(resolve))
    }).catch((reject) => {
        console.log("Deu pau seu burro",reject)
    })




















// const {promises: {readFile}} = require('fs');

// readFile("./Aula15/filex.json").then(fileBuffer => {
//     console.log(fileBuffer.toString());
// }).catch(error => {
//     console.log(error.message);
// });

 
// // forma convencional
//     fs.readFile('./Aula15/file.json', (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(JSON.parse(data));
//         }
//     });
