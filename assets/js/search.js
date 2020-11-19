function getInformation(){
    document.getElementById(`output`).innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById(`library_search`).value)
    .then(a=>a.json())
    .then(response=>{
        for(var i=0;i<5;i++){
            document.getElementById(`output`).innerHTML+="<h2>"+response.docs[i].title[0]+"</h2>"+response.docs[i].author_name[0]
        }
    });
   
}
   




