### Deploy Project to Heroku

- ```heroku create Hawaii-clothing --buildpack mars/create-react-app ```
- ```heroku create $APP_NAME --buildpack mars/create-react-app```
  #### Link: [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack)
- ***Buildpack***
  - It is essentially a specific configuration for the build that we want so that it deploys our react as a static website. 
  - It's the best, and most efficient way for us to host our project created with create-react-app
    

- ```$ git add . ```
- ```$ git commit -am "make it better"```
- ```$ heroku git:remote -a hawaii-clothing```
- ```$ git push heroku master```
    
    
