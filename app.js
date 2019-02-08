var fs = require('fs');
var path = require('path');
var directory = './';

//    newFile = file.replace(/[^\x00-\x7F]/g, "_");
//    if(file != newFile) {
//        fs.rename(folder+file, folder+newFile, function (err) {
//            if (err) throw err;
//            console.log(newFile);
//        });
//    }

var loopThru = function(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            loopThru(fullPath);
        }
        else {
            if(path.extname(fullPath) === '.zip') {
                newPath = fullPath.replace(/[^\x00-\x7F]/g, "_");
                if(newPath != fullPath) {
                    fs.renameSync(fullPath, newPath)
                    console.log(path.basename(newPath));
                }
            }
        }  
    });
}

loopThru(directory);