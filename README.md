# COVID-19 Latest Statistics

I wrote a Node.js webserver to retrieve data about COVID-19, and show it to the users. 

## Used Technologies

For retrieving data, I used express and node-fetch. Also you can find the data [here](http://covid19api.xapix.io/v2/locations).

For showing the data on the webpage, I used bootstrap and ejs. Views are available in the *src/views* directory.

## Installing Requirements

(If you don't want to install it on your system, skip this part and go to *API* section.)

You have to install Node.js on your system. You can check if you already have it by typing this command:
```
node --version
```
If you don't have this package, just follow the instructions from [Node.js' official website](https://nodejs.org/en/download/).

Once you set up node, clone this project into your system. Open the project's folder from Terminal. Now you have to set up an environment file. Do it by typing ```echo 'PORT = 3000' >.env```.

Now you can install the Node.js requirements by typing ```npm install```. Wait for the process to finish. 

The program is now ready and can be started with ```npm start```. 

Now your webserver is ready. Open http://localhost:3000 on any browser to see the results. 

## API

You can also see the webpage in [this link](https://covid-19-latest-statistics.herokuapp.com/).
