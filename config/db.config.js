// Imports the Google Cloud client library
const {Spanner} = require('@google-cloud/spanner');

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const projectId = 'proyectobda-336817';
const keyFileName = './config/proyectobda-336817-b136ce86f25d.json'
const instanceId = 'proyectobda-spanner';
const databaseId = 'cloud-spanner';

// Creates a client
const spanner = new Spanner({
  projectId: projectId,
  keyFilename: keyFileName
});

// Gets a reference to a Cloud Spanner instance
const instance = spanner.instance(instanceId);

module.exports = instance.database(databaseId);