function getInformation(){
    document.getElementById(`output`).innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById(`library_search`).value)
    .then(a=>a.json())
    .then(response=>{
        for(var i=0;i<5;i++){
            document.getElementById(`output`).innerHTML+=`<h4 class="title">Title:</h4>`+response.docs[i].title+`<h4 class="author">Author:</h4>`+response.docs[i].author_name+`<h4 class="first">First Time Published In:</h4>`+response.docs[i].first_publish_year+`<h4 class="publisher">Publisher:</h4>`+response.docs[i].publisher
        }
    });
   
}
   




