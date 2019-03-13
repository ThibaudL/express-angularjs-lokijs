const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');
const childProcess = require('child_process');
const fkill = require('fkill');

class MonService {

    constructor(app, db, ws) {
        this.db = db;
        this.ws = ws;

        app.route('/api/mon-service/test1')
            .get(this.getTest1.bind(this))
            .post(this.postTest1.bind(this))
        ;

        app.route('/api/mon-service/test2')
            .get(this.getTest2.bind(this))
            .post(this.postTest2.bind(this))
        ;

    }

    getTest1(request,response){
        response.send('Test 1')
    }

    postTest1(request,response){
        response.send(`Hello 1 ${request.body.name}`)
    }

    getTest2(request,response){
        response.send('Test 2')
    }

    postTest2(request,response){
        response.send(`Hello 2 ${request.body.name}`)
    }
}

module.exports = {
    MonService: MonService
};