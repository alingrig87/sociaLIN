## sociaLIN 😊

Social media project using React and Node JS

## Initial config ✍️

### Add a default.json file in config folder with the following

```json
{
	"mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
	"jwtSecret": "secret"
}
```

### Install server dependencies 🧑‍🔧

```bash
npm install
```

### Install client dependencies 🧑‍🔧

```bash
cd client
npm install
```

### Run both Express & React from root 💻

```bash
npm run dev
```

### Deploying on Heroku

- Download and install heroku cli --> [here](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

- check if heroku cli is properly installed:
  Using gitBash run: `heroku --version`
- Expected output: heroku/7.59.2 win32-x64 node-v12.21.0
- Login to heroku from CLI using: `heroku login`
- Use the following code to configure server port:

```javascript
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

- Use the following code to configure mongo connection URI and set the corresponding env var for heroku project:

```javascript
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
```

- Add the following scripts in package.json is order to configure heroku to start the node.js server and build the react app: (the "start" and "heroku-postbuild" keywords are mandatory):

```javascript
		"start": "node server.js",
		"build": "cd client && npm run build",
		"install-client": "cd client && npm install",
		"heroku-postbuild": "npm run install-client && npm run build"
```
