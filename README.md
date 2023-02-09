# Cat Facts

#### An API focused website here to generating Cat Facts for users made during Week 6 at Epicodus Coding School

#### By Eliot Gronstal, E Luckie, and Sarah Andyshak

## Technologies Used

* Javascript
* CSS
* HTML
* API
* Github
* Webpack
* Node
* Lint

## Description
An API focused website that generates cat facts for users made during Week 6 at Epicodus Coding School 2-Day Project focusing on API calls and async code.

## Setup/Installation Requirements

* Clone this repository
* Please note the Meowfacts API does not require an API key
* In order to begin using the Petfinder API, you need:
* A Petfinder account; if you do not have one, create an account.
* A Petfinder API Key (otherwise called Client ID) and Secret. (Visit www.petfinder.com/developers to request one.)
* A way of sending requests to our server along with information that will tell it you are allowed to do so. We recommend cURL for testing.
* Once you have your API Key and your Secret, you can use these to request an access token. This token will enable you to receive information from our servers.
* To get a token, make the following request, replacing {CLIENT-ID} and {CLIENT-SECRET} with your own information:
* curl -d "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token
* Create a file '.env' and place it in the root folder of the downloaded repository.
* Include API_KEY={your API key} in the text of the .env file.
* Navigate to the root folder of this downloaded repo in your terminal.
* Run npm install.
* Run npm run start to open the page in your default browser.

* Worth noting for non-Mac users: in the package.json "scripts" for lint: line 9's has an extra " ' " surrounding src:... which allows es lint to access files recursively  "lint": "'eslint src/*.js'"

## Known Bugs

* If a negative number is entered in the form input all available facts will be listed.

* Please reach out to Eliot, Luckie, or Sarah with any questions or concerns at: eliot.lauren@gmail.com, eluckie.d@gmail.com, sarah.andyshak@gmail.com

## License

MIT

Copyright (c) 2023 Eliot Gronstal, E Luckie, Sarah Andyshak