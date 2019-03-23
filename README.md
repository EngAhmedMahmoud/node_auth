# JWT with node Application
## Definition
JWT is an object defined in a safe way to represent a set of information between two parties
the token is composed of a header and a payload also a signature.
## Requirements
- nodejs
- npm
## Installation 
Just download or clone the project then write the following commands
```
npm i 
```
## Running 
```
npm start
```
## Testing
Use the post man for calling login api to generate a token for you 
```
http://127.0.0.1:5000/login 
```
After getting the token add it into headers for posts api
```
http://127.0.0.1:5000/posts 
```
**Authorization Bearer PUT_HERE_TOKEN**

After 30 seconds the token is not valid because the expireation time