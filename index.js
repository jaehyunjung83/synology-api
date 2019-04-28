// const path = require('path');

require('dotenv').config();
const Synology = require('./src');

const { USERNAME, PASSWORD } = process.env;

const synology = new Synology({
    host: '192.168.1.4',
    port: 5000,
});

async function init() {
    try {
        const { Auth, FileStation } = synology;
        // login
        await Auth.auth({
            username: USERNAME,
            password: PASSWORD,
        });
        /**
         * ------------- FileStation --------------
         */
        // info
        // await FileStation.info();
        // list
        await FileStation.list({ limit: 5 });
        // const res = await FileStation.upload({
        //     path: '/home',
        //     overwrite: 'true',
        //     file: path.join(__dirname, './example.jpg'),
        // });
        // console.log(res.body);
    } catch (err) {
        console.error(err);
    }
}

init();
