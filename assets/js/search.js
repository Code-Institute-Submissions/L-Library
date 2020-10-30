var libSearch;

var url = "http://openlibrary.org/search.json?q=sherlock+holmes";

function setup() {
    createCanvas (400, 200);
    getJSON (url, gotData);
}

function gotData(data) {
    printIn(data);
}

function draw () {
    background (0);

}


