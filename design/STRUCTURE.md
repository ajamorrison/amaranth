# Project Structure

## bin/

Binaries and executables for targeted platforms, built 
using electron packager.

## data/

Temporary: test data used to simulate storage for testing 
and validation purposes. Will be migrated to a larger
test folder soon.

## dist/

Distributable javascript code generated from typescript. 
Includes bundle file from Webpack and appropriate dependency
graphs.

## res/

Client side resources for the application, including any
stylesheets and external dependency javascript.

## src/

Production typescript code, which is the main working source
for the project.

### src/cacheStruct

Not yet implemented, handles caching for the server, preventing 
constant file reads from the system if none is needed.

### src/components/

Holds the React components used in rendering the interface.

### src/lambda/

Stateless functions designed to be used asynchronously in the 
applications flow or to assist in the execution of a higher-level
function. Think of it like a utils folder, but cooler.

### src/server/

Server components, mostly doing Express and request handling things.

## views/

HTML page views. This project is designed to work as a single-page
app that is dynamically loaded so might only be a general index file.

## design/

Design documents for the project, including wireframing and scoping.