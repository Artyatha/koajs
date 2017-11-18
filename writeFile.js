const async = require('async');
const request = require('request');
const fs = require('fs')

const items = []
for(i = 1; i <= 100 ; i++) {
    items.push({number: i})
};

const q = async.queue((task, callback) => {
   fs.writeFile('mn'+task.number + '.txt', "this is from process: " + task.number, () => {
        console.log("Create File: " + task.number + "complete.");
        callback()
   });
}, 1);

q.drain = () => {
    console.log('all item have been processed');
};

q.push(items, (err) => {
    console.log('finished procress item');
})
