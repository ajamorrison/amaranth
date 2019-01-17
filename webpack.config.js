const path = require('path');

module.exports = {
    entry: './dist/client.js', // Target client facing code only, leave 
                               // leave server side by itself.
    devtool: "source-map",
    stats: {
        warnings: false
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'res')
    }
};
