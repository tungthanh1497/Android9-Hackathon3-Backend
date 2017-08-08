var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Food = require('./models/food');
var app = express();

mongoose.connect('mongodb://admin:admin@ds161209.mlab.com:61209/cookmix_listfood'
, {useMongoClient: true});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/create', function(req, res){
  var body = req.body;

  var idValue = body.id;
  var nameValue = body.name;
  var authorValue= body.author;
  var imageShowValue= body.imageShow;
  var typeValue= body.type;
  var timeValue= body.time;
  var setsValue= body.sets;
  var levelValue= body.level;
  var ratingValue= body.rating;
  var materialValue = body.material;
  var cookValue = body.cook;

  var food = new Food({
      id:idValue,
      name:nameValue,
      author:authorValue,
      imageShow:imageShowValue,
      type: typeValue,
      time:timeValue,
      sets:setValue,
      level:levelValue,
      rating:ratingValue,
      material:materialValue,
      cook:cookValue
    });


  food.save(function(err, createdFood){
    if(err){
        res.json({success:0, message: "Could not add record: "+err});
    }else {
        res.json(createdFood);
    }
  });
});
app.get('/getFood', function(req, res){
  Food.find(function(err, foods){
    if(err){
      res.json({success: 0, message: "Could not get data from mlab"});
    }else {
      res.json(foods);
    }
  });
});
