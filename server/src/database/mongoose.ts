import { connect } from 'mongoose';
import { uri_bbdd } from '../env-variables.js';
import { uri_bbdd_test } from '../env-variables.js';
import { uri_bbdd_dev } from '../env-variables.js';

let bbdd = uri_bbdd_test;
if (process.argv[2] === 'test') {
  bbdd = uri_bbdd_test;
} else if (process.argv[2] === 'dev') {
  bbdd = uri_bbdd_dev;
} else if (process.argv[2] === 'deploy') {
  bbdd = uri_bbdd;
}


try {
  console.log(bbdd);
  await connect(bbdd);
} catch (error) {
  console.error(error);
}

