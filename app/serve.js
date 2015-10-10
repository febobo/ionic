var express = require('express'),
    app = express();

var mongoose = require('mongoose');
var list = require('./router/app');
mongoose.connect('mongodb://localhost/ionic');
var Cat = mongoose.model('Cat' , {'name' : String});
var cat = new Cat({name : 'zhangbo'});
cat.save(function(err){
  if(err) console.log(err);
  console.log('success')
})
app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.set('port', process.env.PORT || 5000);

app.get('/list' ,list.findAll )
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
