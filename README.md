# OpenWeatherBack

Server made in Nodejs, Express and MongoDB using MongoDB Atlas. The server listen for a city forecast request, then get the actual data from https://openweathermap.org/forecast5, save the data in the database and send it back to the client. It also listen for a forecast id already requested and send it back, instead of making another roundtrip to openweather api.

## Development server

Run `npm run dev` for a dev server. The server start listening in http://localhost:4000 after connecting to MongoDb. The app will automatically reload if you change any of the source files.

## Deploy

The app is configured to be deployed in heroku, by only pushing the changes using the heroku CLI.
This app uses the frontend created in the other repo named: open-weather-front

# Sample Routes
http://localhost:4000/forecast?location=ANDORRA
http://localhost:4000/shared?id=60982fb7091e4842e49ec24f
