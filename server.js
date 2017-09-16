var express = require('express');       //used to create the web server and listen to ports or handle http connections
var morgan = require('morgan');         //used to output logs of a server   
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title:'Article One | Gurankas SIngh',
        heading:'Article One',
        date:'August 28, 2017',
        content:`<p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>`
    },
    'article-two' : {
        title:'Article Two | Gurankas SIngh',
        heading:'Article Two',
        date:'September 16, 2017',
        content:`<p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>`
    },
    'article-three' : {
        title:'Article Three | Gurankas SIngh',
        heading:'Article Three',
        date:'September 17, 2017',
        content:`<p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>
                <p>
                    Well, this is the first time I am adding webpages to my application. Its good to be developing software. Feels like I am contributing to sciety in my own way and can give shape to creation in my mind.
                </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content; 
    var HTMLTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
    <div class="container">
    <div>
        <a href = '/'>Home</a>
    </div>
    <br>
    <H3>${heading}</H3>
    <div>
        ${date}
    </div>
    <div>
      ${content}
    </div>
    </div>
    </body>
    
</html>`;
return HTMLTemplate;
}

app.get('/', function (req, res) {
  res.send(createTemplate(articles.'article-one'));
});

app.get('/:articleName', function(req,res)
{
    var articleName = req.params.articleName;   
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
