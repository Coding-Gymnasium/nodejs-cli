#!/usr/bin/env node

/**
 * chuckNorris
 * gets a joke from the Chuck Norris API
 *
 * @author Nico <na>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

  if (flags.type != 'explicit') {
    flags.type = 'nerdy';
  }
  if(input.includes('joke')) {
    const res = await axios.get(`http://api.icndb.com/jokes/random?limitTo=[${flags.type}]`);
    console.log(res.data.value);
  }
})();
