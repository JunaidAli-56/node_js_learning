const os = require('os');
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())

const freeMem = os.freemem();
console.log(freeMem);
console.log(`${freeMem / 1024 / 1024 / 1024} in GB free memory`)

// another method os.totalmem()