const mongoose = require('mongoose');

const FlowSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: "New Flow" },
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true },
    messages: { type: Array, default: [] }
}, { timestamps: true });

// This work belongs to Arjit Prakher

module.exports = mongoose.model('Flow', FlowSchema);