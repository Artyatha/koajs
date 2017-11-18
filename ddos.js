const async = require('async');
const request = require('request');

const items = []
const q = async.queue((task, callback) => {
    request('http://apptitude.co.th/', (error, response, body) =>{
        if (error) {
            console.log(error);
            callback()
        }
        console.log('statusCode frp, apptitude:', response && response.statusCode);
        callback()
    });
    console.log('bar');
    
}, 100);

q.drain = () => {
    console.log('all item have been processed');
};

for(i = 0; i < 1000 ; i++) {
    items.push({number: i})
};

q.push(items, (err) => {
    console.log('finished procress item');
})
