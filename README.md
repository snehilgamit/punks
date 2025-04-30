
# 🧠 Punks Telegram Mini App

**Punks** is a popular cryptocurrency community app built using the **Telegram Mini Web-App** framework. This app serves as a lightweight yet powerful interface to engage users within Telegram, supporting features like authentication, UI animations, and secure API handling.

---

## 🚀 Features

- Built with **Next.js** for performance and scalability
- Seamless integration with **Telegram Mini App SDK**
- Secure user authentication via **NextAuth.js**
- Uses **Mongoose** for MongoDB database interactions
- Animated UI with **Animate.css**
- Toast notifications using **React Hot Toast**
- Fully responsive and icon-ready via **React Icons**

---

## 📦 Tech Stack

| Technology      | Description                          |
|------------------|--------------------------------------|
| Next.js          | React framework for SSR & SSG        |
| React            | JavaScript UI Library                |
| @twa-dev/sdk     | Telegram WebApp SDK                  |
| NextAuth.js      | Authentication library               |
| Mongoose         | MongoDB ORM                          |
| Animate.css      | CSS animations                       |
| Axios            | HTTP requests                        |
| React Hot Toast  | Beautiful toast messages             |
| React Icons      | Icon set for React                   |

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/snehilgamit/punks.git
   cd punks
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env.local` file in the root directory and add:**

   ```env
   BOT_TOKEN=bot_token
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
punks/
├── components/         # Reusable UI components
├── lib/                # Utility functions (e.g., db connection)
├── pages/              # Next.js routes and API
├── public/             # Static files
├── styles/             # CSS/SCSS files
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
└── package.json        # Project metadata and scripts
```

---


## 📲 Deployment

You can deploy this app on platforms like:

- [Vercel](https://vercel.com/) (best for Next.js)

Make sure to set the same environment variables in your deployment dashboard.

---

## 🔐 Security

- Always use HTTPS in production
- Use secure secrets and environment variables
- Use OAuth or JWT-based authentication if scaling

---

## 🤝 License

MIT License — feel free to fork, use, and contribute.

---

## ✉️ Contact

For support or collaboration, reach out via Telegram: [@snoxl](https://t.me/snoxl)
