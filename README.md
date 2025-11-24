# AI Note Taking Assistant 🤖📝

An intelligent note-taking application powered by AI that helps you write, organize, and enhance your notes with smart autocomplete features.

## ✨ Features

- **AI-Powered Autocomplete**: Press `Shift + A` to get intelligent text suggestions based on your writing context
- **Rich Text Editor**: Full-featured editor with formatting options powered by TipTap
- **Real-time Saving**: Your notes are automatically saved as you type
- **User Authentication**: Secure login/signup with Clerk
- **Image Generation**: AI-generated cover images for your notebooks using DALL-E
- **Cloud Storage**: Images stored securely in Firebase
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Editor**: TipTap (ProseMirror-based)
- **AI**: OpenAI GPT-3.5 Turbo for text completion
- **Authentication**: Clerk
- **Database**: PostgreSQL with Drizzle ORM
- **Cloud Storage**: Firebase Storage
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Clerk account
- Firebase project

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# OpenAI
OPENAI_API_KEY="your_openai_api_key"

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_firebase_project_id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id"
NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aideation-yt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run db:push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating Notes
1. Sign in to your account
2. Click "Get Started" to access your dashboard
3. Click the "New Note Book" button
4. Enter a name for your notebook
5. Start writing with AI assistance!

### AI Autocomplete
- While writing, press `Shift + A` to trigger AI autocomplete
- The AI will analyze your last 30 words and suggest relevant continuations
- Suggestions appear in real-time as you type

### Managing Notes
- All notes are displayed on your dashboard with cover images
- Click any note to open and edit it
- Notes are automatically saved as you type
- Delete notes using the delete button in the editor

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   │   ├── completion/    # AI text completion
│   │   ├── createNoteBook/# Create new notebooks
│   │   ├── saveNote/      # Save note content
│   │   └── uploadToFirebase/ # Image upload
│   ├── dashboard/         # Dashboard page
│   ├── notebook/[noteId]/ # Individual note pages
│   └── sign-in/sign-up/   # Authentication pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── CreateNoteDialog.tsx
│   ├── TipTapEditor.tsx  # Rich text editor
│   └── TipTapMenuBar.tsx # Editor toolbar
├── lib/                  # Utilities and configurations
│   ├── db/              # Database schema and connection
│   ├── firebase.ts      # Firebase configuration
│   ├── openai.ts        # OpenAI configuration
│   └── utils.ts         # Helper functions
└── middleware.ts        # Clerk authentication middleware
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the GPT-3.5 Turbo API
- [TipTap](https://tiptap.dev/) for the rich text editor
- [Clerk](https://clerk.dev/) for authentication
- [Drizzle ORM](https://orm.drizzle.team/) for database management
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Built with ❤️ using Next.js and AI