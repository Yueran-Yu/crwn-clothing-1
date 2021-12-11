### Deploy Project to Heroku

- ```heroku create hawaii-clothing --buildpack mars/create-react-app ```
- ```heroku create $APP_NAME --buildpack mars/create-react-app```
  #### Link: [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack)
- ***Buildpack***
  - It is essentially a specific configuration for the build that we want so that it deploys our react as a static website. 
  - It's the best, and most efficient way for us to host our project created with create-react-app
    

- ```$ git add . ```
- ```$ heroku git:remote -a hawaii-clothing```
- ```set git remote heroku to https://git.heroku.com/hawaii-clothing.git```
- ```$ git commit -am "make it better"```
- ```$ git push heroku master```
    
    
