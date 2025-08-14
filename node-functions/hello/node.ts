export const onRequest = (context) => {
  console.log('121212121212121212121212121');
  console.log(JSON.stringify(process.env));
  console.log(JSON.stringify(context));
  return new Response('Hello, World from node-functions!');
};
