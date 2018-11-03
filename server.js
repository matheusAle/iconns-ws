var express = require('express');
var consign = require('consign');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'))

consign({ cwd: 'src' })
  .include('integrations')
  .then('utils')
  .then('services')
  .then('routes')
  .into(app);

app.get('/', function (req, res) {
  return res.send('works!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});