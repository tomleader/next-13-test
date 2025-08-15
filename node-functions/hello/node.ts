export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  // console.log(JSON.stringify(process.env));
  let s = 'Hello, World from node-functions!\n ';
  let arr = Object.keys(context.request);
  let p = process.env;
  console.log(p);
  if (typeof http !== 'undefined') {
    // 拦截 HTTP 服务器的请求事件
    const originalHttpEmit = http.Server.prototype.emit;
    http.Server.prototype.emit = function (event, req, res) {
      if (event === 'request') {
        s = s + req.url;
        s = s + '\n'
      }
      return originalHttpEmit.apply(this, arguments);
    };
    
    // 拦截 HTTPS 服务器的请求事件
    const originalHttpsEmit = https.Server.prototype.emit;
    https.Server.prototype.emit = function (event, req, res) {
      if (event === 'request') {
        s = s + req.url
        s = s + '\n'
      }
      return originalHttpsEmit.apply(this, arguments);
    };
  }
  s = s + JSON.stringify(p);
  //console.log(s);
  return new Response(s);
};
