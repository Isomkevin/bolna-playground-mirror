
# AfriCopilot AI – AI Assistant Platform Dashboard

This project serves as the front-end dashboard for **AfriCopilot AI**, a smart AI assistant platform tailored for Africa. Built using React, TypeScript, and Tailwind CSS, this dashboard provides a clean, responsive UI foundation for managing AI assistants, provider integrations, usage metrics, and more. It simulates live data interactions using centralized dummy data, paving the way for seamless backend API integration in future releases.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The AfriCopilot AI Dashboard includes:

- A top header with brand, notifications, user profile, and settings.
- Sidebar navigation for managing AI Assistants, Provider Keys, Usage Stats, and the Voice Lab.
- A modular, mobile-responsive layout optimized for expansion.
- The **Voice Lab**, a prototype area for testing and simulating AI assistant behavior.
- Centralized dummy data used throughout the UI, designed to be replaced with live APIs.

This dashboard enables developers, system admins, and stakeholders to visualize and manage AI-driven workflows at scale.

## Features

- **Interactive AI Assistant Dashboard** – Manage AI agent flows, routes, and provider keys.
- **Centralized Mock Data** – Easily swap dummy content with real-time API responses.
- **Responsive Layout** – Optimized for both mobile and desktop users.
- **Voice Lab** – Test environment for real-time simulations or speech AI integration.
- **Modular Codebase** – Reusable components, consistent structure, and scalable logic.
- **Production-Ready UI** – Clean, maintainable TypeScript + Tailwind implementation.

## Tech Stack

- **React.js** – Front-end framework for building interactive UIs.
- **TypeScript** – Ensures type safety and improved code maintainability.
- **Tailwind CSS** – Utility-first CSS for rapid styling and responsiveness.
- **Shadcn UI** – Easy-to-integrate UI elements.

## Folder Structure

```
/src
  ├── components/       # Reusable UI components (e.g., Header, Sidebar, Panels)
  ├── context/          # Dummy data context for simulation
  ├── pages/            # Main route pages like Dashboard and Voice Lab
  ├── styles/           # Tailwind configuration and global styles
  └── App.tsx           # Main entry point
```

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/africopilot-dashboard.git
   cd africopilot-dashboard
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Dev Server:**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Navigation:** Use the sidebar to access all core modules.
- **Voice Lab:** Interact with placeholder AI assistant workflows.
- **Data Source:** All content is driven by centralized dummy data—ideal for API integration in future versions.

## Future Enhancements

- 🔌 **Live API Integration** – Replace mock data with live backend data via REST or GraphQL.
- 🧠 **Conversational AI Hooks** – Integrate with AI engines like Deepgram, Whisper, or VAPI.
- 🌍 **Local Language Support** – Expand to simulate or demo interactions in Swahili, Hausa, Amharic, etc.
- 📈 **Analytics Dashboard** – Visualize assistant performance, call data, and language usage metrics.
- 🎛️ **AI Flow Builder** – Drag-and-drop interface for creating conversational AI flows.

## Contributing

Contributions are welcome!

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your code.
4. Push to GitHub (`git push origin feature/YourFeature`)
5. Submit a pull request 🚀

Make sure your code follows the style guide and includes helpful comments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
