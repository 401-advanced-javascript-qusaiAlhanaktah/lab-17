/* eslint-disable strict */

'use strict';


const events = require('../src/events.js');


function log(event, payload) {
  let errorTime = new Date();
  console.log({ event, errorTime, payload });
}

events.on('error', log);