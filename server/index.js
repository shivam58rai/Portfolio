require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const api = express();
api.use(cors());
api.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;

// Optional MongoDB connection (falls back to in-memory data if not provided)
let mongoConnected = false;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      mongoConnected = true;
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.warn('MongoDB connection failed, using in-memory data. Error:', err.message);
    });
}

// Models (only used when mongoConnected)
const projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  tech: [String],
  github: String,
  demo: String,
});
const blogPostSchema = new mongoose.Schema({
  title: String,
  summary: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// In-memory fallback data
const fallbackProjects = [
  {
    title: 'StayNest',
    image: '/staynest-project.svg',
    description: 'Full-stack rental booking platform with modern UI and booking management system. Work in Progress.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/shivam58rai/StayNest',
    demo: 'https://github.com/shivam58rai/StayNest',
  },
  {
    title: 'Complain Management',
    image: '/complain-management-project.svg',
    description: 'A complaint management system built with HTML and modern web technologies for efficient issue tracking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shivam58rai/complain-managment',
    demo: 'https://github.com/shivam58rai/complain-managment',
  },
];

const fallbackPosts = [
  { title: 'First Post (Coming Soon)', summary: 'Blog system placeholder.', url: '#' },
];

// Routes
api.get('/api/health', (_req, res) => {
  res.json({ ok: true, mongoConnected });
});

api.get('/api/projects', async (_req, res) => {
  if (mongoConnected) {
    const items = await Project.find().sort({ _id: -1 }).lean();
    return res.json(items);
  }
  res.json(fallbackProjects);
});

api.get('/api/blog', async (_req, res) => {
  if (mongoConnected) {
    const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();
    return res.json(posts);
  }
  res.json(fallbackPosts);
});

api.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });
  if (mongoConnected) {
    await Message.create({ name, email, message });
  }
  res.json({ ok: true });
});

api.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});


