import * as Express from 'express';
import sampleController from './controllers/sampleController';

const app = Express();
app.use('/js', Express.static('./dist/js'));
app.get('/', sampleController);

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});