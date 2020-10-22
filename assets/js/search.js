$("#search-form").submit(function(e) {
    e.preventDefault ()

    var query = $("#search").val()

    var url = "http://openlibrary.org/search.json?q=harry+potter"

    $.get(url,function(data) {
        console.log(data)
    })
})