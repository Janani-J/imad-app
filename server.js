var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles=
{ 
'article-one': {
    title :'Article One | Janani Jaganathan',
    heading:'Article One',
    date:'Aug 14 2017',
    content:`
                <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>`
},
'article-two': {
    title :'Article Two | Janani Jaganathan',
    heading:'Article Two',
    date:'Aug 15 2017',
    content:`
                <p>
                This is the content for my Second article.
                </p>`
    
},
'article-three': {
    title :'Article Three | Janani Jaganathan',
    heading:'Article Three',
    date:'Aug 15 2017',
    content:`
                <p>
                This is the content for my Third article.
                </p>`
}
};

function createTemplate(data)
{       
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;

        var htmlTemplate=`<html>
            <head>
                <title>${title}</title>
                
                <meta name="viewport" content="width=device-width ,initial-scale=1" />
                <link href ="ui/style.css" rel="stylesheet">
            </head>
            <body>
            <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
            </div>
            
             <div class="footer">
            //<input type="text" id="comment" placeholder="Comments Here!">
            <textarea rows="5" cols="75" type="text" name="Comments Here!" id="comment"></textarea>
            <input type="submit" id="submit_cmnt" value="Submit">
            <hr/>  
            <ul id="commentlist">
            </ul>
            </div>
            
            </body>
        </html>` ;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


 app.get('/:articleName', function (req,res) {
     var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
 })
 
 var comments=[];
 app.get('/articleName', function (req,res) {
     var comment=req.query.comment;
    res.send(createTemplate(articles[articleName]));
     comments.push(comment)
     res.send(JSON.stringify(comments));
 });
 

var counter=0;
app.get('/counter', function (req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res) {
    //get the name from the request
    var name=req.query.name;
    names.push(name);
     //JSON-JavaScript notation-for converting JS objects into strings
    res.send(JSON.stringify(names));
    
    });
 
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
