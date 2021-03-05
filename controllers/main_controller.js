var fs = require('fs');

var controller = {
    converterImage: async(req, res, next) => {
        try {
            console.log(req.files);
            let newExt = req.body.ext
            if (!req.files) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Not found images',
                })
            }
            let file = req.files.image
            let file_name = file.name.split('.')
            if (file_name[1] != newExt) {
                file_name = file_name[0]
                var oldpath = file.path;
                var newpath = './temp_file/' + file_name + '.' + newExt;
                fs.rename(oldpath, newpath, function(err) {
                    var files = fs.createReadStream(newpath);
                    res.writeHead(200, { 'Content-disposition': 'attachment; filename=' + file_name + '.' + newExt }); //here you can add more headers
                    files.pipe(res)
                    fs.unlinkSync(newpath)
                });
            } else {
                return res.status(400).send({
                    status: 'info',
                    message: 'Posee la misma extension',
                })
            }


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