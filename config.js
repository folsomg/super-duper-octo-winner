// Configuration file
module.exports = { // updated
    port: process.env.PORT || 3000,
  // Update: commit 15
    env: process.env.NODE_ENV || 'development',
    db: { // updated
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
    },
};
