const fs = require('fs');
const path = require('path');
var glob = require("glob");
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
                    fs.readFile(path.resolve(__dirname,path + '/' + file), {flag: 'r+', encoding: 'utf8'},function(err, data) {
                        console.log(111, data);
                    })
                }
            });
            
        });
    });
}
    
explorer('./src');