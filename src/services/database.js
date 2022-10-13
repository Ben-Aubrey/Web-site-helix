require('dotenv').config()
const { MongoClient } = require("mongodb");

// Connection URI
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);  // Create a new MongoClient

module.exports.connectDB = async () => {
    await client.connect();  // Connect the client to the server (optional starting in v4.7)
    // await client.db("helix")  // Establish and verify connection
    console.log("Successfully connected to Cluster");
}

module.exports.getDB = () => {
  return client.db('Helix') 
}

module.exports.close = () => {
  return client.close();  // Ensures that the client will close when you finish/error
}
