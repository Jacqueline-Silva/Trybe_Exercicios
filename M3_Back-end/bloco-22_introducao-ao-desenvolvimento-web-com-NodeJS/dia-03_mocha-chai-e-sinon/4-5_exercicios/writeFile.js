const fs = require('fs');

function whiteFile(fileName, content) {
  try {
    if(fileName !== '') {
      fs.writeFileSync(`./${fileName}`, content);
      return 'ok';
    }
  }
  catch (err) {
    console.error(err);
  }
};

module.exports = whiteFile;