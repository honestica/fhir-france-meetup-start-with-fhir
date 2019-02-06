#### FHIR Demo POC

### Requirements
- You need `java` for the server, and `node` (https://nodejs.org/en/) with `yarn`(https://github.com/yarnpkg/yarn) for the client

### Step to launch
- Run the hapi-fhir server: `./server/hapi-fhir-3.6.0-cli/hapi-fhir-cli run-server -v dstu3`
- After 1mn, go to http://localhost:8080 to check if the server is ready
- Run the client: `cd client && yarn && yarn start`
- You can go to http://localhost:3000

## Links

You can get the hapi-fhir-cli here: https://github.com/jamesagnew/hapi-fhir/releases