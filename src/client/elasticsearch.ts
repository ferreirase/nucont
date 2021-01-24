/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import elasticsearch from 'elasticsearch';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const getClient = (): elasticsearch.Client => {
  const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
  });

  return client;
};
