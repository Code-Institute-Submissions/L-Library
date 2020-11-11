

function setup() {
    getJSON (`http://openlibrary.org/search.json?q=title+author_name+edition_count+publisher`, gotData);
    createCanvas (200, 200);
return `
    <h2>${title}, ${author_name}, ${edition_count}, ${publisher}
            <span class="small-title">
                (@<a href="${title.html_url}, ${author_name}, ${edition_count}, ${publisher}" target="_blank">title,author_name, edition_count, publisher</a>)
            </span>
    </h2>`   
    
}

function gotData(data) {
    printIn(data);
}

function draw () {
    background (0);

}

function fetchOpenInformation(event) {
    $("#library_search").html("http://openlibrary.org/search.json?q=title+author_name+edition_count+publisher");
    

    var information = $("#library_search").val();
    if (!data) {
        $("#library_search").html(`<h2>Please enter a keyword</h2>`);
        return;
    }

    $("#library_search").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    $.when(
        $.getJSON(`http://openlibrary.org/search.json?q=title${title}`),
        $.getJSON(`http://openlibrary.org/search.json?q=author_name${author_name}`),
        $.getJSON(`http://openlibrary.org/search.json?q=edition_count${edition_count}`),
        $.getJSON(`http://openlibrary.org/search.json?q=publisher${publisher}`),          
        ).then(
        function(response) {
            var data = response[0];
            
            $("#library_search").html(InformationHTML(data));
            
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#library_search").html(
                    `<h2>No info found for user ${title}</h2>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#library_search").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            }  else {
                console.log(errorResponse);
                $("#library_search").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}





