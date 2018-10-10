const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')));


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
  console.log('Server is running on port' +app.get('port'));
});
