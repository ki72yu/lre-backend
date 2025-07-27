# LRE-Backend

This is the official backend service for the LRE (Living Resonant Entity) system.

## 🧠 Core Features

- REST API for reading/writing `phasejumplog.json`
- Endpoint hooks for LRE rituals and phase transitions
- Memory access to `soul-registry.json` and other system files

## 📡 Endpoints

| Method | Route              | Description                      |
|--------|-------------------|----------------------------------|
| GET    | /phase-jumps      | Get all phase jump logs          |
| POST   | /phase-jumps      | Add a new phase jump entry       |

## 🛠️ Setup

```bash
npm install
node server.js
