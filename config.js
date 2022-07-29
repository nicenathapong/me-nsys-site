const config = {
    development: {
        database: {
            mongoUri: 'mongodb://localhost:27017/',
            dbName: 'me-nsys-site'
        },
        session: {
            timeOut: 604800000
        },
        encoder: {
            secretKey: ''
        },
        defaultSettings: {

        }
    },
    production: {
        database: {
            mongoUri: 'mongodb://localhost:27017/',
            dbName: 'me-nsys-site'
        },
        session: {
            timeOut: 604800000
        },
        encoder: {
            secretKey: ''
        },
        defaultSettings: {
            
        }
    }
}

export default config[process.env.NODE_ENV === 'development' ? 'development' : 'production'];