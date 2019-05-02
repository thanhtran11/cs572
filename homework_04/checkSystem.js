
const os = require('os');
function checkSystem() {
    console.log("Checking your system...");
    const availMem = os.freemem();
    let isEnough = true;
    if(availMem < 4000000){
        console.log("This app needs at least 4GB of RAM");
        isEnough = false;
    }

    const cpus = os.cpus();
    if(cpus.length <2) {
        console.log("Processor is not supported");
        isEnough = false;
    }

    if(isEnough) {
        console.log("System is checked successfully.");
    }
}


checkSystem();