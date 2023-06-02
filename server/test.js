const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB', err);
    return;
  }

  console.log('Connected to MongoDB');

  const adminDb = client.db().admin();
  adminDb.listDatabases()
    .then((result) => {
      console.log('Databases:');
      result.databases.forEach((db) => {
        console.log(`- ${db.name}`);
      });
    })
    .catch((error) => {
      console.error('Error listing databases', error);
    })
    .finally(() => {
      client.close(); // Close the connection once the operation is complete
    });
});
