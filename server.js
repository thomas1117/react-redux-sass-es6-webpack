var path = require('path');
const express = require('express')
const port = process.env.PORT || 8080
const app = express();

// serve static assets normally
app.use(express.static('./public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(port)
console.log("server started on port " + port)