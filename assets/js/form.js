  console.log("hi");
  
  /*function sendMail(helpForm) {
    emailjs.send("gmail", "template_rq2dfbn", {
        "from_name": helpForm.name.value,
        "message": helpForm.issueReport.value,
        "from_email": helpForm.emailaddress.value
        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}