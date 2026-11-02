# TechTriview 🎯

[![Live Demo](https://img.shields.io/badge/Live_Demo-tech--triview.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tech-triview.vercel.app)

🌐 **Live Application:** [https://tech-triview.vercel.app](https://tech-triview.vercel.app)

A modern, full-stack **remote technical interview platform** designed to streamline the hiring process with real-time video consultation, collaborative coding, interactive whiteboarding, and comprehensive feedback collection.

---

## 🌟 Overview

TechTriview is a comprehensive solution for conducting technical interviews remotely. It brings together candidates and interviewers in a unified workspace featuring live video, collaborative code editing, real-time whiteboarding, and structured feedback workflows.

Whether you're assessing candidates for engineering positions, conducting pair programming sessions, or evaluating problem-solving skills, TechTriview provides all the tools needed in one seamless platform.

---

## 📸 Application Preview

| **Dashboard & Quick Actions** | **Meeting Setup Screen** |
|:---:|:---:|
| <img src="./public/screenshots/1%20Dashboard.png" alt="Dashboard" width="100%"/> | <img src="./public/screenshots/2%20Start%20meeting%20screen.png" alt="Start Meeting Screen" width="100%"/> |

| **Live Video & Collaborative Code Editor** | **Interactive Whiteboard** |
|:---:|:---:|
| <img src="./public/screenshots/3%20Live%20meeting%20screen.png" alt="Live Meeting & Code Editor" width="100%"/> | <img src="./public/screenshots/4%20Whiteboard%20screen.png" alt="Interactive Whiteboard" width="100%"/> |

| **Scheduled Interviews & Management** | **Candidate / Interviewee View** |
|:---:|:---:|
| <img src="./public/screenshots/5%20past%20scheduled%20interviews.png" alt="Scheduled Interviews" width="100%"/> | <img src="./public/screenshots/6%20interviewee%20screen%20(interview%20scheduled).png" alt="Candidate View" width="100%"/> |

---

## ✨ Core Features

### 🎥 **Video Interviews**
- Real-time video conferencing powered by Stream Video SDK
- Crystal-clear audio and video with low-latency communication
- Instant meeting creation with shareable invite links
- Join flow for candidates and interviewers

### 💻 **Collaborative Code Editor**
- Monaco editor with real-time synchronization (Yjs + Liveblocks)
- Multi-user editing with cursor tracking
- Syntax highlighting for multiple languages
- Code persistence during the interview

### 🎨 **Interactive Whiteboard**
- Freehand drawing tools for explaining concepts
- Shape tools (rectangles, ellipses, paths)
- Multi-user collaboration with real-time updates
- Layer management and color picking
- Perfect for algorithm walkthroughs and architecture discussions

### 📅 **Interview Scheduling**
- Schedule interviews with flexible date and time selection
- Assign candidates and interviewers to scheduled slots
- Calendar view for managing interview schedules
- Automatic reminders and notifications

### 📹 **Recording & Playback**
- Automatic recording of all interview sessions
- Secure access to recorded interviews
- Past recordings listed with metadata
- Review previous interviews for quality assurance

### 💬 **Feedback & Ratings**
- Post-interview comment system for detailed feedback
- 5-star rating system for candidate evaluation
- Interview status tracking (upcoming, completed, succeeded, failed)
- Dashboard view for reviewing all interviews

### 👥 **Role-Based Access**
- **Candidate View**: See assigned interviews, join meetings, view feedback
- **Interviewer View**: Create interviews, schedule candidates, manage ratings, access dashboard
- Secure authentication powered by Clerk

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui (Radix components) |
| **Authentication** | Clerk |
| **Backend & Database** | Convex (Real-time database with GraphQL-like API) |
| **Video** | Stream Video SDK |
| **Real-time Collaboration** | Liveblocks + Yjs + y-monaco |
| **UI Components** | Radix UI, Lucide React icons |
| **Code Editor** | Monaco Editor React |
| **Utilities** | date-fns, react-hot-toast, perfect-freehand |

---

## 📁 Project Structure

```
TechTriview/
├── convex/                          # Backend: schemas, queries, mutations
│   ├── schema.ts                    # Data model (users, interviews, comments)
│   ├── http.ts                      # HTTP actions (Clerk webhook, token provider)
│   ├── interviews.ts                # Interview queries and mutations
│   ├── users.ts                     # User management
│   ├── comments.ts                  # Feedback and ratings
│   └── auth.config.ts               # Authentication configuration
│
├── src/
│   ├── app/                         # Next.js routes and layouts
│   │   ├── (admin)/
│   │   │   └── dashboard/           # Interview management dashboard
│   │   ├── (root)/
│   │   │   ├── (home)/              # Home/dashboard page
│   │   │   ├── meeting/[id]/        # Live interview room
│   │   │   ├── schedule/            # Interview scheduling UI
│   │   │   ├── recordings/          # Recorded interviews list
│   │   │   └── layout.tsx
│   │   └── landing/                 # Landing page
│   │
│   ├── components/
│   │   ├── providers/               # Context providers
│   │   │   ├── ConvexClerkProvider.tsx
│   │   │   ├── StreamClientProvider.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── Whiteboard/              # Collaborative whiteboard
│   │   │   ├── components/          # Shape components, tools
│   │   │   └── hooks/               # Whiteboard logic
│   │   ├── ui/                      # Reusable UI components
│   │   ├── MeetingRoom.tsx          # Main meeting interface
│   │   ├── CodeEditor.tsx           # Collaborative code editor
│   │   ├── Navbar.tsx               # Navigation
│   │   └── ... (other components)
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useGetCallById.ts        # Fetch interview by ID
│   │   ├── useGetCalls.ts           # Fetch user's interviews
│   │   ├── useMeetingActions.ts     # Meeting operations
│   │   └── useUserRole.ts           # Check user role
│   │
│   ├── actions/                     # Server actions
│   │   └── stream.actions.ts        # Stream token generation
│   │
│   ├── constants/                   # Static data
│   │   └── index.ts
│   │
│   ├── lib/                         # Utilities
│   │   ├── utils.ts
│   │   └── liveblocksDefaults.ts
│   │
│   ├── middleware.ts                # Next.js middleware
│   └── liveblocks.config.ts        # Liveblocks configuration
│
├── public/                          # Static assets
│   └── screenshots/                 # Application screenshots
├── .env.example                     # Environment variable template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed and configured:

- **Node.js**: v18 or higher
- **npm**: Latest version
- **Git**: For version control

### Required External Services

1. **Clerk** (Authentication)
   - Create account at [clerk.com](https://clerk.com)
   - Get your **Publishable Key** and **Secret Key**

2. **Convex** (Backend & Database)
   - Create account at [convex.dev](https://convex.dev)
   - Get your **Deployment URL** and **API Key**

3. **Stream Video** (Video Conferencing)
   - Create account at [Stream.io](https://getstream.io/)
   - Get your **API Key** and **Secret Key**

4. **Liveblocks** (Real-time Collaboration)
   - Create account at [liveblocks.io](https://liveblocks.io)
   - Get your **Public Key**

---

## ⚙️ Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MayurSoni2003/TechTriview
cd TechTriview
```

### 2. Copy Environment Variables

```bash
cp .env.example .env.local
```

### 3. Fill in Environment Variables

Edit `TechTriview/.env.local` with your credentials:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex (Backend)
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Stream Video
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Liveblocks (Real-time Collaboration)
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
```

### 4. Configure Convex Environment

Set `CLERK_WEBHOOK_SECRET` in your Convex dashboard:
- Go to your Convex project
- Navigate to Settings → Environment Variables
- Add `CLERK_WEBHOOK_SECRET` with the value from your Clerk dashboard

### 5. Set Up Clerk Webhook

In Clerk Dashboard:
- Go to Webhooks
- Create a new endpoint pointing to your Convex HTTP endpoint
- Subscribe to `user.created` and `user.updated` events
- Copy the signing secret to `CLERK_WEBHOOK_SECRET`

---

## 💻 Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Convex (Backend)

In a new terminal:

```bash
npx convex dev
```

This starts the Convex backend in development mode and watches for schema changes.

### 3. Start Next.js Development Server

In another terminal:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Access the Application

- Open [http://localhost:3000](http://localhost:3000) in your browser
- Sign in with Clerk authentication
- Select your role: **Candidate** or **Interviewer**

---

## 📱 Application Routes

| Route | Purpose | Role |
|-------|---------|------|
| `/` | Home dashboard with quick actions and interview list | Both |
| `/meeting/[id]` | Live interview room (video + code editor/whiteboard) | Both |
| `/schedule` | Schedule new interviews | Interviewer |
| `/recordings` | View past interview recordings | Both |
| `/dashboard` | Review and rate interviews | Interviewer |
| `/landing` | Public landing page | Public |

---

## 🎯 Using the Platform

### For Interviewers

1. **Schedule an Interview**
   - Navigate to `/schedule`
   - Select a candidate and time slot
   - Add interview title and description

2. **Conduct Interview**
   - Click "Start Meeting" on scheduled interview
   - Use tools:
     - **Video**: Talk with candidate
     - **Code Editor**: Write and review code collaboratively
     - **Whiteboard**: Sketch diagrams and explain concepts
   - End the call when finished (auto-recorded)

3. **Provide Feedback**
   - Visit `/dashboard`
   - View completed interviews
   - Add comments and ratings (1-5 stars)
   - Mark as Pass/Fail

### For Candidates

1. **View Interviews**
   - See assigned interviews on home page
   - Join upcoming meetings with one click

2. **Participate**
   - Use code editor for live coding
   - Draw on whiteboard for visual explanations
   - Communicate via video during interview

3. **Review Feedback**
   - Check comments and ratings from interviewers
   - Review recordings of your interviews

---

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

---

## 📊 Data Model Overview

### Users Table
- **Fields**: `name`, `email`, `image`, `role` (candidate/interviewer), `clerkId`
- **Indexes**: `by_clerk_id`

### Interviews Table
- **Fields**: `title`, `description`, `startTime`, `endTime`, `status`, `streamCallId`, `candidateId`, `interviewerIds`
- **Indexes**: `by_candidate_id`, `by_stream_call_id`

### Comments Table
- **Fields**: `content`, `rating`, `interviewerId`, `interviewId`
- Stores feedback for each interview

---

## 🤝 Key Features Implementation

### Real-time Collaboration
- **Liveblocks**: Manages real-time state and presence
- **Yjs**: CRDT (Conflict-free Replicated Data Type) for data synchronization
- **y-monaco**: Bindings between Yjs and Monaco editor

### Video Infrastructure
- **Stream Video SDK**: Handles video conferencing, recording, and playback
- Automatic session recording with Cloud storage
- Token-based authentication for security

### Authentication Flow
1. User signs in with Clerk
2. Clerk webhook syncs user to Convex `users` table
3. User assigned role (candidate/interviewer)
4. Role determines available features and routes

---

## 🐛 Troubleshooting

### "Convex Error: No deployment found"
- Ensure `CONVEX_DEPLOYMENT` is correct in `.env.local`
- Run `npx convex dev` to initialize Convex development

### "Clerk webhook not triggering"
- Verify webhook endpoint is configured in Clerk dashboard
- Check `CLERK_WEBHOOK_SECRET` matches in both Clerk and Convex
- Test webhook in Clerk dashboard testing interface

### "Stream Video not working"
- Confirm `NEXT_PUBLIC_STREAM_API_KEY` is correct
- Verify Stream account is active with appropriate billing
- Check browser permissions for camera/microphone

### "Liveblocks not syncing"
- Clear browser cache and localStorage
- Verify `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` is correct
- Check Liveblocks project is active

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Authentication Docs](https://clerk.com/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Stream Video Documentation](https://getstream.io/video/docs/)
- [Liveblocks Documentation](https://liveblocks.io/docs)

---

## 📝 License

This project is provided as-is for educational and commercial use.

---

## 🤝 Support

For issues, questions, or feature requests, please create an issue in the repository or contact the development team.

---

**Happy interviewing! 🚀**
