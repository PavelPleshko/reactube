const config = {
	env:process.env.NODE_ENV,
	port:process.env.PORT,
	jwtSecret:process.env.JWT_SECRET,
	serverUrl: process.env.SERVER_URL,
	mongoUri:process.env.MONGO_URI,
	 cloudinary:{
	 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
	    api_key: process.env.CLOUDINARY_API_KEY, 
	    api_secret: process.env.CLOUDINARY_API_SECRET ,
	    preset:process.env.CLOUDINARY_PRESET
	 },
	  session: {
    type: 'mongo',
    secret: 'u+J%E^9!hx?piXLCfiMY.EDc',
    resave: false,
    saveUninitialized: true
  }
}

export default config;