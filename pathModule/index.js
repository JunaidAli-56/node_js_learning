const path = require('path');
console.log(path.dirname('E:/Code/node_js_learning/pathModule/index.js'))
console.log(path.extname('E:/Code/node_js_learning/pathModule/index.js'))
console.log(path.basename('E:/Code/node_js_learning/pathModule/index.js'))
console.log(path.parse('E:/Code/node_js_learning/pathModule/index.js'))

const mypath = path.parse('E:/Code/node_js_learning/pathModule/index.js');
console.log(mypath.name)