Init Project
- npm init
- npm install --save express
- git init
- npm install --save nodemon

Deploy Heroku
- heroku login
- heroku create
- git push heroku master
- heroku open
- heroku logs (some deployment message)
- https://calm-shelf-29855.herokuapp.com/

Intro To Google OAuth
- need install passport and relative passport strategies
- passport setup
- npm install --save passport passport-google-oauth20
- go to console.developers.google.com create new project 
- enable google plus API (associate with oauth2.0)
- create relative credentials
![Image](https://github.com/weikee94/node-with-react/blob/master/images/googleauthone.png "Google AUth")
![Image](https://github.com/weikee94/node-with-react/blob/master/images/googleauthtwo.png "Google AUth")
![Image](https://github.com/weikee94/node-with-react/blob/master/images/googleauththree.png "Google AUth")

Tech Using
- Google Auth
- Passport JS
- Stripe

MongoDB Setup
- go to mlab create a remote database instead in local machine
- npm install --save mongoose
- create mongoURI in config keys

Create Model Class
![Image](https://github.com/weikee94/node-with-react/blob/master/images/modelClass.png "Model Class")

Saving Model Instances
![Image](https://github.com/weikee94/node-with-react/blob/master/images/savingModelInstance.png "Saving Model Instance")

Passport Callbacks Example
![Image](https://github.com/weikee94/node-with-react/blob/master/images/passportCallback.png "Passport Callback")

Enabling Cookies
- npm install --save cookie-session
![Image](https://github.com/weikee94/node-with-react/blob/master/images/enablecookie.png "Enable Cookie")

Heroku Env Variables
![Image](https://github.com/weikee94/node-with-react/blob/master/images/herokuconfig.png "Heroku Config")






