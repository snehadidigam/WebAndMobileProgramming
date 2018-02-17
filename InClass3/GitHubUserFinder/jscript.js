var news;

var api = 'https://newsapi.org/v2/everything?q=';
var apiKey = '&apiKey=029ff94a1d7f4eeebd7f0268aabb442c';

var input;

function setup() {
    createCanvas(400, 200);

    var button = select('#submit');
    button.mousePressed(askTopic);

    input = select('#topic');
}

function askTopic() {
    var url = api + input.value() + apiKey;
    loadJSON(url, gotData);
}

function gotData(data) {
    news = data;

    var article = data.articles;

    for (var i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].title);
        createP(articles[i].description);
        $('.avatar').append(imgtag);
        $('.information').append("Id: "+user.id);
        $('.ref').append("Link to Profile:"+user.url);
    }

    //println(data.response.docs[0].headline.main);
}