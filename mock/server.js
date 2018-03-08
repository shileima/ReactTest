const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const get = ctx => {
  ctx.response.body = 'get 请求';
};

app.use(route.get('/', main));
app.use(route.get('/ api/get', get));

app.listen(3000);
