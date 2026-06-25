import express from 'express';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js'; 
const app = express();
// Global Middlewares
app.use(express.json());

// API Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);


// Health Check
app.get('/health', (req, res) => res.status(200).send('OK'));

export default app;