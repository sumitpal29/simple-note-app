const fs = require('fs');
console.log('udpate readme loaded!!')
// If the file is not in the directory it will create a 
// new file with given extension and write the content provided as param

const updateReadMeSync = () => {
    try{
        fs.writeFileSync('../readme.md', '## NodeJS Practise Course');
        // append text in the same file
        fs.appendFileSync('../readme.md', '\n### Created by Sumit!!');
        console.log('File updated!!')
    } catch (err) {
        console.error('App failed!!! - ', err)
    }
}

module.exports = updateReadMeSync;