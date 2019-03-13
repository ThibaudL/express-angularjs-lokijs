# Dependencies :
- express : for the server side (serving the web app & exposing REST API)
- angularjs : for the web application
- lokijs : for a simple JSON database

# Getting started : 

- go inside your workspace (a folder named "express-angularjs-lokijs" will be created afterward)
- launch commands :
````sh
git clone https://github.com/ThibaudL/express-angularjs-lokijs.git
cd express-angularjs-lokijs
npm install
````
- inside 2 distinct terminals, launch commands : 
````sh
npm start
````
and
````sh
npm run server:dev
````
- open url : http://localhost:8082/webpack-dev-server/ 


## Be careful :
- There is Hot reload for the web app, but not for the server. Be sure to kill & re-launch ``npm run server:dev`` anytime you change it.
