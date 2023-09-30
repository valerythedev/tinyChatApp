import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set up MongoDB connection using mongoose

// Define your API routes

// Set up WebSocket server

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
