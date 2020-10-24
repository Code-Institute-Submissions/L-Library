function userInformationHTML (user) {
    return `
            <h2>${user.name}
                <span class="small-name">
                    (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
                </span>
            </h2>
            <div class="gh-content">
                <div class="gh-avatar">
                    <a href="${user.html_url}" target="_blank">
                        <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}"/>
                    </a>
                </div>
            </div>`
}






function fetchGitHubInformation(event) {
    $("#gh-user-data").html("");

    var username = $("#gh-username").val();
    if(!username) {
        $("#gh-user-data").html(`<h2>Please enter the keyword</h2>`);
        return;

    }


    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            var userData = response[0];
            $("#gh-user-data").html(userInformationHTML(userData));     
        }, function(errorResponse) {
            if (errorRespose.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No Info Found ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorRespose.responseJSON.message}</h2>`);
            }

        })
    


}

$(document).ready(fetchGitHubInformation);