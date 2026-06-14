const mysql = require('mysql2');

// Create connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',  
    database: 'task_manager_db1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Convert pool to use promises
const promisePool = pool.promise();

// Test connection
const testConnection = async () => {
    try {
        const [result] = await promisePool.query('SELECT 1');
        console.log('✅ MySQL Database connected successfully!');
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
    }
};

testConnection();

module.exports = promisePool;