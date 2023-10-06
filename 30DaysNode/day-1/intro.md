# Day - 1
## basic
- Just tried out the basic console.log
## Create Server
- Created a server instance 
- Used http to create it
- And listened to it on 3000 port
## Served String
- Created Instance of Server
- Added Content-Type as plain/Text
- With write method wrote the text directly to response
## Served Html
- Created Instance of Server
- Added Content-Type as text/html
- Loaded the html file with fs module
- Sent the html data in the response
## Served JSON
- Created Instance of Server
- Added Content-Type as application/json
- Loaded the json file with fs module
- Sent the sting format of the json data in the response
## Served PDF
- Created Instance of Server
- Added Content-Type as application/pdf
- Loaded the pdf file with fs module
- Sent the pdf data in the response
## Served Audio and Video
- Created Instance of Server
- Added Content-Type as audio/mp3 and video/mp3 respectively
- Checked whether file exists
- If exists reading the data with fs modules createReadStream method
- Sent the streaming data with the help of PIPE(Need to learn more about it)
