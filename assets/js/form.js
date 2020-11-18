  function sendMail(helpForm) {
    emailjs.send("gmail", "template_rq2dfbn", {
        from_name: helpForm.name.value,
        from_email: helpForm.emailaddress.value,
        message: helpForm.issueReport.value
        
            
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
  
 