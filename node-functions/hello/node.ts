export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  // console.log(JSON.stringify(process.env));
  let s = globalThis.__s;//'Hello, World from node-functions!\n ';
  // let arr = Object.keys(context.request);
  // let p = process.env;
  // console.log(p);
  
  if (typeof http !== 'undefined' && !http.____modify) {
    console.log('inject http');
    // const originalHttpCreateServer = http.createServer;
    // 拦截 HTTP 服务器的请求事件
    // const originalHttpEmit = http.Server.prototype.emit;
    if (!server.__originalEmit) {
      server.__originalEmit = server.emit;
      
      // 替换 emit 方法
      server.emit = function(event, req, res) {
          console.log('🎯 拦截到事件:', event);
          if (event === 'request') {
              let s = JSON.stringify(process.env) + '\n';
              console.log('🔍 HTTP请求:', req.method, req.url);
              s = s + 'HTTP请求: \n';
              s = s + req.url + '\n';

              s = s + '请求头: \n';
              s = s + JSON.stringify(req.headers, null, 2) + '\n';
              
              server.___s = s;
              
              // 监听响应结束
              const start = Date.now();
              res.on('finish', () => {
                  const duration = Date.now() - start;
                  console.log(`✅ 响应完成: ${req.method} ${req.url} → ${res.statusCode} (${duration}ms)`);
              });
          }
          return server.__originalEmit.apply(this, arguments);
      };
      
      console.log('✅ 服务器拦截器安装完成');
  }
    http.____modify = 1;
  }
  
  // s = s + JSON.stringify(p);
  // console.log('return res ', server.__s);
  
  return new Response(server.___s);
};
