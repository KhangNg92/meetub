# Dev Social Connector
<img src="githubImg/dev-social.png"/>

## Description

- A full-stack web application using (MongoDB, Express.JS, React.JS,Node.Js) to help developers build their profile/portfolio, share posts and get help from other developers Responsive front-end design done with Bootstrap

View the <a href = "https://dev-social-connect.herokuapp.com/">site</a>

## Technologies & Tools

* React

* Bootsrap

* MongoDB

* Node.JS

* HTML

* CSS 

## Installation and Usage

### Requirements:

* Node.js installed
* mongoURI (can create 1 on mlab.com)
### Steps:
1. Clone repo on your local machine:
```
$ git clone https://github.com/mkavo92/dev-social
```
2. Install back-end dependencies:
```
$ cd dev-social
$ npm install
```
3. Install front-end dependencies:

$ cd client
$ npm install

4. Create a keys_dev.js file in config directory then apply this code:

```
module.exports = {
    mongoURI: "<your mongoURI",  
    secretOrKey: '<your secret'
}
``` 
5. Execute the app:<br/>
```
$ npm run dev
```

4. App now running on localhost:3000