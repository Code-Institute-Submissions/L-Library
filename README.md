## L-Library
# Milstone Project 2: Interacted Fronted Development - Code Institute

The project is made for general audience to use the site as inspirational and motivational start,
continuing with confidently using it as a source of knowledge, or to benefit one’s studies,
or to have some fun reading. The site is for the users to find quick and easy answers, 
when he/she wants to find a book using only a keyword.
The user can also search for presents as books when they know the theme or subject matter 
that person is interested in.
There is a form to fill or the links of social media to use and other options for user to contact the site
so he/she can report the issue on a site or get any other answer to any detailed question.

## UX

As the site was built to meet simple aims of communication and information, the structure is simple
and meeting the needs of those working on study projects as well as those who consider being just a reader.
The navigation is simple in leading the user through the site and the whole structure 
is not overcrowded for user to get the expectd result straight away.

## User Stories

User 1:
Me and my friends have a book club and we meet once a month to disscuss the books we are reading or read already, 
sometimes we go on playing mind games about books or writers.
I think the application like this would help us in any arguments as the search of books and authors 
gives the basic and quick results.

User 2:
I am a freelance writer and sometimes have to use a quick search just to confirm my assumptions on titles or authors, 
this site gives me an opportunity to easy find an answer.

User 3:
I am a passionate reader and this application is useful as sometimes I like to explore particular theme
or subject matter and a keyword search let me find the books that I am interested in just by one click.

User 4:
I noticedd it is very easy to use the site on a smartphone and i am excited to play around with it 
on my daily commute.

## Strategy

The goal in the design was to make it easy to navigate as well as to fill it with a useful features
(like adding advanced search or help form) and information for users.

## Scope

The site is structured to easily navigate the world of literature as well as find particular subject one searches for.

## Structure

The site structure is based on ergonomics, 
so it is to take the customer to the information one’s searching without having to scroll through
any unnecessary documents, reading texts that are advertising or filing the forms that appear to be unnecessary. 

## Sceleton

Using Balsamiq these wireframes were created to open up the idea how the site looks like in three sizes of screens.
https://drive.google.com/file/d/1WHe8Y-yPn44CRQOZCXqYZrR9lqtLl93O/view?usp=sharing

## Surface

The colour palette that was chosen for the project is deliberately contrasting and quite modest in the shades used. 
Pinterest platform is used to find out matching colour palette. The background gif was taken from giphy.com

## Technologies

HTML – to create the foundation of a site.
CSS – to create visually pleasant web page.
JavaScript – to make it more interactive.
API
jSon
Bootstrap – to make it responsive.
Balsamiq – to create sketches of a future site.


## Features

 ## Existing Features
As mentioned above the features of the project are quite modest to meet the goal of simplicity 
and encourage the users to find the answers quick and easy.
1. Navigation with a smooth scrolling is made for users to get to the section they search for.
2. The search uses keywords as a trigger and gets the user five responses that he can continue to manipulate.
3. The help form invites the regular user to report an issue if there is one, 
but lets the user to send an email message it can be anything.
4. The footer is used to put the contact and social media information 
for purposes of overall decency of aesthetics and to give a user an option 
to find further information of creators and site administrators.


## Features left to implement

The features that have to be added is: a possibility to chat (between members, or getting online consultation), 
possibility of becoming a member (that can be done just by signing in), 
possibility of becoming a sponsor or advanced member (that have to pay for membership and have some advanced benefits) or  patreon.
In the forseeable future this site overall can be(and hopfully will be) added to the bigger project as a feature itself.

## Testing

The application was run on different devices with different browsers all of them mentioned in a list below.
There were minor issues that you can read in Problems and Bugs about. 

HP elitebook - Firefox
Huawei p9 lite - chrome
Acer Swift - Chrome, Internet Explorer, Microsoft Edge
Huawei p20 - chrome
Mcbook - Saafari
IPhone 8 - Saafari
MSI 62 8RD - Chrome, Internet Explorer,
Huawei p10 - chrome
Samsung GalaxyS10 - Chrome 

 Html, css and JS were ran through the validators: -W3C HTML Validator: 
 This validator checks the markup validity of Web documents in HTML. 
 -W3C CSS Validator: This validator checks the markup validity of Web documents in CSS.
 https://jshint.com/
 for more go to Problems and Bugs.


## Deployement

This site was created using Gitpod and deployed to GitHub pages. The landing page has to be index.html, 
to correctly deploy it to GitHub.
The deployment process was used from the very begining of the project using command line,
adding new features step by step. The process went thoroughly except times when tI had to wait for th features to be deployed.

## Problems and Bugs

The Project was simple to write but adding position: flex in css made all the features to appear in a row and deleting that made everything look as it should using bootstrap grid.
The first issues where met trying to call API from a chosen website, and as I had the knowledge of begginer used different sources and advices to complete the task. 
Whatching Youtube videos and thinking about the lessons learnt about the JavaScript logic I managed to adjust the given code to call an API and make it work. The Problems were as listed:
-API gave a different result for response.docs[i].title[0] and response.docs[i].title, that was solved by myself with the help of Code Institute Tutor support.
-Mentor helped with using html in js file.
-took some time from deploying to actually working
-had minor problem with the confusion about HTTP and HTTPS, that could not be solved without a Slack community help, the advice to add S to HTTP source that I was trying to use for API was succesfully applied.
-playing around with URL of my API in a simple browser let me better understand the usage of API and CORB message led me to the documentation that was useful and got everything working.
The other JS file was created to get an email from a user and the Code Institute Course code was used for that and adjusted to meet the project goals.
the issue I had only with the Email.js template, though it was a minor problem of not puting right placeholders together and my mentor helped very much with that too. Was also confused abou using right semicolons in right places as can be seen in screenshots.
Both JS files had other minor issues that were solved by console.log command and dev tools console messages to find solutions. 
When running the code through Validators I got Parse Error Messgaes which were solved adding needed semicolons or other.

The error message screenshots can be found here - https://drive.google.com/drive/folders/1Jik9amBA8TfdhYH3Yz_X4ezPwsTFBEyx?usp=sharing

The idea to use a fast gif for the overall attractiveness of a site was a mistake as I thought I will be able to blur it easily and left this issue to the last minute.
But it was the most difficult thing to solve and that is why the web site can look unfinished.

## Acknowledgments

There were many sources used to create this website, such as openlibrary.org/developers/api, w3schools.com, 
getbootstrap.com, courses.codeinstitute.com. I also read some material in the websites like pinterest or Wikipedia.
Have to add that this project would not be possible without my mentor Aaron Sinnott, 
Code Institute tutors and Slack.

## Content

All content on this site is written by me or there are comments to follow where the basic code was taken from.
The background gif used - https://giphy.com/gifs/tamu-book-library-libraries-7E8lI6TkLrvvAcPXso
API used - https://openlibrary.org/developers/api