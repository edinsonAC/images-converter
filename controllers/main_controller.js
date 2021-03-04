var fs = require('fs');

var controller = {
    converterImage: async(req, res, next) => {
        try {

            console.log(req.files);
            if (!req.files) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Not found images',
                })
            }
            let file = req.files.image
            let file_name = 'not'

            let file_path = file.path
            let file_split = file_path.split('\\')

            //linux o mac
            // let file_split = file_path.split('/')
            // file_name = file_split[0]
            //extension
            // let extension = file_name.split('\.')[1]

            file_name = file.name.split('.')[0]
            var oldpath = file.path;
            var newpath = './temp_file2/' + file_name + '.png';
            fs.rename(oldpath, newpath, function(err) {
                // if (err) throw err;
                // res.write('File uploaded and moved!');
                // res.end();
            });


            console.log(file_split);
            // const fileD = fs.createWriteStream(newpath);
            // res.pipe(fileD);
            return res.status(200).send({
                // status: extension,
                message: file_name,
                file
            })




            // res.write(fil, 'binary');
            // var file = fs.createWriteStream(fil);

            // res.pipe(file);
            // file.on('finish', function() {
            //     file.close(cb); // close() is async, call cb after close completes. });
            // });
            // return res.status(200).send({
            //     status: 'success',
            //     message: 'Funcionaas'
            // })

        } catch (error) {
            console.log("--------- catch--------", error)
            return res.status(400).send({
                status: 'error',
                message: 'No function',
                error: error
            })
        } finally {
            console.log("--------- FINALLY --------")
        }

    },
}

module.exports = controller