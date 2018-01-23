const fs = require('fs');
const path = require('path');
function explorer(path){
    fs.readdir(path, function(err, files){
        //err 为错误 , files 文件名列表包含文件夹与文件
        if(err){
            console.log('error:\n' + err);
            return;
        }
        files.forEach(function(file){
            fs.stat(path + '/' + file, function(err, stat){
                if(err){console.log(err); return;}
                if(stat.isDirectory()){
                    // 如果是文件夹遍历
                    explorer(path + '/' + file);
                }else{
                    // 读出所有的文件
                    // console.log('文件名:' + path + '/' + file);
                    if(file.endsWith('.js') || file.endsWith('.vue')) {
                        fs.readFile(path + '/' + file, {flag: 'r+', encoding: 'utf8'},function(err, data) {
                            data = data.replace(/@/g, '@/mobile');
                            fs.writeFile(path + '/' + file, data, (err) => {
                                if (err) throw err;
                                fs.readFile(path + '/' + file, {flag: 'r+', encoding: 'utf8'},function(err, newData) {
                                    console.log(111, newData);
                                })
                              });
                        })
                    }
                }
            });
            
        });
    });
}
    
explorer(path.resolve('./src'));