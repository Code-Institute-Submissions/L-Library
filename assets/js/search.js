function getInformation(){
    document.getElementById(`output`).innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById(`library_search`).value)
    .then(a=>a.json())
    .then(response=>{
        for(var i=0;i<5;i++){
            document.getElementById(`output`).innerHTML+=`<h4 class="title">`+response.docs[i].title+`<h4 class="author">`+response.docs[i].author_name+`<h4 class="first">`+response.docs[i].first_publish_year+`<h4 class="publisher">`+response.docs[i].publisher
        }
    });
   
}
   




