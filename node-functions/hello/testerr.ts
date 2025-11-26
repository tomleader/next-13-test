export const onRequest = (context) => {
  console.error('test error');
  return 404;
}
