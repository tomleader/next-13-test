export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  // console.log(JSON.stringify(process.env));
  let s = 'Hello, World from node-functions!';
  let arr = Object.keys(context.request);
  let p = process.env;
  console.log(p);
  if (typeof http !== 'undefined') {
    console.log(http.createServer)
  }
  s = JSON.stringify(p);
  //console.log(s);
  return new Response(s);
};
