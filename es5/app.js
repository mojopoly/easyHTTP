const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
  custom: 'custom'
};
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   posts
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   posts
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
