//1. Convert 'www.mum.edu' domain name to equivalent IP address
const dns = require('dns');

dns.resolve4('www.mum.edu', function (err, addresses) {
    console.log("Callback option: ");
    console.log(addresses);
});

// 2. convert callback function to Promise object
const { promisify } = require('util');
const promiseResolve = promisify(dns.resolve4);
promiseResolve('www.mum.edu').then(function (addresses) {
    console.log("Promise option: ");
    console.log(addresses);
}).catch(function (err) {
    console.log(err);
});

//3. convert promise to async/await
async function asyncResolve() {
    try {
        let addresses = await promiseResolve('www.mum.edu');
        console.log("Async/await option: ");
        console.log(addresses);
    } catch (e) {
        console.log(e);
    }
}
asyncResolve();
