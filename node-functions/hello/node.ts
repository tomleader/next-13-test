export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  // console.log(JSON.stringify(process.env));
  let s = 'Hello, World from node-functions!';
  s = JSON.stringify(context.server);
  console.log(s);
  return new Response(s);
};
