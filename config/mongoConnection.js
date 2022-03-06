const mongoose = require('mongoose');
const config = require('config');

const mongoDbConnection = process.env.MONGO_URI || config.get('mongoURI');

const connectToDB = async () => {
	try {
		await mongoose.connect(mongoDbConnection, { useNewUrlParser: true });
		console.log('Connected to Mongo DB...');
	} catch (error) {
		console.error({ Message: error.message });
		// exit failure
		process.exit(1);
	}
};

module.exports = connectToDB;
