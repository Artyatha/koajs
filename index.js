const async = require('async');
const request = require('request')
const fs = require('fs');
const cheerio = require('cheerio')

const urls = [
    {
        name:'taara',
        url:'http://rov.wikia.com/wiki/Taara'
    },
    {
        name:'Zuka',
        url:'http://rov.wikia.com/wiki/Zuka'
    }

]

let i = 0

const q = async.queue((task, callback) => {
    request(task.url, (error, response, body) => {
        $ = cheerio.load(body)
        const text = $('#mw-content-text').text() 
        fs.writeFile(task.name+ ".txt", text, (err) => {
            if(err) {
                console.log(err);
                callback()
            }
            console.log("Save file complete");
            callback()
        })
    })
}, 1)

q.drain = () => {
    console.log("All process complete")
}

q.push(urls)