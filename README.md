Init Project
- npm init
- npm install --save express
- git init
- npm install --save nodemon

API endpoints Testing
- https://rallycoding.herokuapp.com/api/music_albums

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

Heroku Proxy Issues
- add proxy: true to google strategy

React App Generation
- inside root directory
- create-react-app theFolderName

Running Client and Server
- npm install --save concurrently
- prefix will go back client folder and search that command
![Image](https://github.com/weikee94/node-with-react/blob/master/images/runningbothserver.png "Running Both Server")

Link Frontend Server to Express
![Image](https://github.com/weikee94/node-with-react/blob/master/images/linktoexpress.png "Link to Express")

Client React Setup
- npm install --save redux react-redux react-router-dom

Redux store setup
![Image](https://github.com/weikee94/node-with-react/blob/master/images/storesetup.png "Store Setup")

Setup Auth Reducer
![Image](https://github.com/weikee94/node-with-react/blob/master/images/authreducer.png "Auth Reducer")

Combine Reducers
![Image](https://github.com/weikee94/node-with-react/blob/master/images/storesetup.png "Combine Reducers")

Install MeterializeCSS
- npm install materialize-css

Install Axios and Redux Thunk 
- npm install --save axios redux-thunk

Action Creator
![Image](https://github.com/weikee94/node-with-react/blob/master/images/actioncreator.png "Action Creator")

Return State
![Image](https://github.com/weikee94/node-with-react/blob/master/images/returnstate.png "Return State")

Connect To Component
![Image](https://github.com/weikee94/node-with-react/blob/master/images/connect.png "Connect")

Stripe API
- npm install --save react-stripe-checkout (frontend)
- npm install --save stripe (server)

ENV Variables with React
- create .env.development
- create .env.production

Body Parser Middleware
- parse incoming request bodies in a middlewares before handlers, available under the req.body
- npm install --save body-parser

Route Specific Middleware
- ![Image](https://github.com/weikee94/node-with-react/blob/master/images/requireLogin.png "requireLogin")

Express with Create-React-App Production
- ![Image](https://github.com/weikee94/node-with-react/blob/master/images/differentroute.png "different route")

Adding Heroku Build Step
- Can try CIRCLE CI
- ![Image](https://github.com/weikee94/node-with-react/blob/master/images/herokubuild.png "heroku build")