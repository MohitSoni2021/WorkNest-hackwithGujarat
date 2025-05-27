require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./configs/db');
const PORT = 8080;

// Route files
const { userRoute, conversationRoute, gigRoute, messageRoute, orderRoute, reviewRoute, authRoute } = require('./routes');

const app = express();

// ✅ FIXED: Correct CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', process.env.PROD_CORS_ORIGIN], // Must match your frontend's URL
    credentials: true                // Allows cookies/auth headers
}));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

// Default routes
app.get('/', (request, response) => {
    response.send('Hello, Topper!');
});

app.get('/ip', (request, response) => {
    const list = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    const ips = list.split(',');
    return response.send({ ip: ips[0] });
});

// Start server
app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`✅ Backend running at http://localhost:${PORT}`);
    } catch ({ message }) {
        console.error('❌ Error connecting to database:', message);
    }
});
