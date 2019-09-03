import * as Express from 'express';
import controller from './controllers/index';

const app = Express();

app.use('/js', Express.static('./dist/js'));
app.get('/', controller);

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});