var express = require('express'),
    app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ionic');
app.use(express.static('www'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extenden : true}));
app.use(bodyParser.json());
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,  Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

require('./server/api')(app);
