// Imports the Google Cloud client library
const {Spanner} = require('@google-cloud/spanner');

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const projectId = 'exalted-cogency-337616';
const keyFileName = './config/exalted-cogency-337616-5a6dd06dbf77 .json'
const instanceId = 'proyectobases38199';
const databaseId = 'aerolinia';

// Creates a client
const spanner = new Spanner({
  projectId: projectId,
  keyFilename: keyFileName
});

// Gets a reference to a Cloud Spanner instance
const instance = spanner.instance(instanceId);

module.exports = instance.database(databaseId);