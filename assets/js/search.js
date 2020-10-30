var libSearch;

var url = "http://openlibrary.org/search.json?q=title+author_name+edition_count+publisher";

function setup() {
    createCanvas (400, 200);
    getJSON (url, gotData);
}

function gotData(data) {
    printIn(data);
}

`function draw () {
    background (0);

}`


