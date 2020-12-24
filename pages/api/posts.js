
const fs = require('fs')
const path = require('path');
const _get = require('lodash/get');

export default function postsHandler(req, res) {
  const dirRelativeToPublicFolder = 'mockData';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  
  const language = _get(req, 'headers.x-locale');
  const url = path.join('/', dir, `/posts-${language}.json`);
  const fileData = fs.readFileSync(url);


  res.send({ posts: JSON.parse(fileData) })
}