import mongoose from 'mongoose';

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-2upbxql-shard-00-00.6brpqqz.mongodb.net:27017,ac-2upbxql-shard-00-01.6brpqqz.mongodb.net:27017,ac-2upbxql-shard-00-02.6brpqqz.mongodb.net:27017/?ssl=true&replicaSet=atlas-yv1ujj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;