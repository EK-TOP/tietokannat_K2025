var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test/:vallaton', (req, res) => {
    const n = req.params.vallaton;
    res.send("Ville Vallaton " + n);
});

app.get('/test/:Ville/:vallaton',
    function(request, response){
        response.send('Heipparallaa '+request.params.Ville+" "+request.params.vallaton);
    }
);

app.use(express.json());

app.use(function(req, res, next) {
    console.log('midleware sähläys');
    next();
});

app.use('/example', function(req, res, next) {
    console.log('The example middleware called');
    next();
});

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.get('/example/test', function(req, res) {
    res.send('Example test route');
});




module.exports = app;


