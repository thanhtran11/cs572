const fs = require('fs');

process.on('message', (path) => {
    fs.readFile(path, 'utf8',
        function(err, content) {
            process.send(content);
    });
});