function getInformation(){
    document.getElementById(`output`).innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById(`library_search`).value)
    .then(a=>a.json())
    .then(response=>{
        for(var i=0;i<10;i++){
            document.getElementById(`output`).innerHTML+="<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name
        }
    });
   
}
   




