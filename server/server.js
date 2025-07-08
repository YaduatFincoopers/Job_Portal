import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import routerA from './routes/authRoutes.js';
import routerJ from './routes/jobApplicationRoutes.js';
import cors from 'cors';

config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true,                  
}));
app.use(json());

connect(process.env.MONGODB_URI || "mongodb+srv://user:VcXDSrpH97AmxVo5@cluster0.tmfdszp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', routerA);
app.use('/api/jobapplication', routerJ);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
