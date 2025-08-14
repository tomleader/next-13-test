export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  // console.log(JSON.stringify(process.env));
  let s = 'Hello, World from node-functions!';
  let arr = Object.keys(context.request);
  s = JSON.stringify(arr);
  console.log(s);
  return new Response(s);
};
