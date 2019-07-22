require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.options('*', cors());

const apiClient = axios.create({
  baseURL: `${process.env.API_HOST}/${process.env.API_VERSION}`,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json',
  },
});

app.get('/people', cors(), (req, res) => {
  apiClient.get('/people.json')
    .then(response => res.send(response.data.data))
    .catch((error) => {
      console.log('ERROR', error);
      throw new Error('REQUEST_ERROR');
    });
});

app.listen(port, () => console.log('Start api app'));
