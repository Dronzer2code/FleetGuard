# FleetGuard - Project Context & Progress Tracker

## Project Overview

**FleetGuard** is an enterprise-grade fleet management and vehicle diagnostics platform built with modern web technologies. It provides AI-powered vehicle inspection, real-time fleet monitoring, and predictive maintenance capabilities.

---

## Tech Stack

- **Frontend Framework**: Next.js 16 (React 19)
- **Styling**: CSS (globals.css with CSS variables)
- **Fonts**: Inter, Montserrat (Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Backend/Database**: Firebase (Firestore, Auth, Storage)
- **AI Integration**: Google Generative AI (Gemini 2.0)

---

## Project Structure

```
FleetGuard/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles (1500+ lines)
│   ├── layout.js                 # Root layout with fonts
│   ├── page.js                   # Landing page (home)
│   ├── login/
│   │   └── page.js               # Authentication (Login/Signup)
│   ├── dashboard/
│   │   └── page.js               # Vehicle management dashboard
│   ├── analysis/
│   │   ├── page.js               # Static analysis demo page
│   │   └── [id]/
│   │       └── page.js           # Dynamic analysis results page
│   └── vehicle/
│       └── [id]/
│           └── page.js           # Vehicle inspection form (750+ lines)
├── lib/
│   └── firebase.js               # Firebase configuration & exports
├── package.json                  # Dependencies & scripts
└── README.md                     # Project documentation
```

### Legacy Files (to be reviewed/removed)

- `analysis.html`, `dashboard.html`, `form.html`, `index.html`, `login.html` - Static HTML files
- `auth.js`, `dashboard.js`, `firebase-config.js` - Legacy JS files
- `formstyle.css` - Legacy styles

---

## Core Features

### 1. Authentication (`/login`)

- Email/Password signup and signin
- Google OAuth integration
- User profile management in Firestore
- Protected routes with auth state management

### 2. Dashboard (`/dashboard`)

- Display user's vehicles
- Add new vehicles (name + license plate)
- Delete vehicles
- Real-time updates via Firestore `onSnapshot`
- Navigate to vehicle inspection

### 3. Vehicle Inspection (`/vehicle/[id]`)

Comprehensive vehicle health form covering:

- **Sounds**: Engine, braking, turning sounds
- **Vibrations**: Steering, high-speed, braking
- **Smells**: Burning, fuel, coolant, rotten egg
- **Leaks**: Oil, coolant, brake fluid, AC water
- **Driving Behavior**: Power, pulling, gear shifting, stalling
- **Dashboard Warnings**: Check engine, ABS, oil pressure, battery, temp, TPMS
- **Tyres & Brakes**: Wear, pressure, squeaky brakes, pedal feel
- **Electrical Issues**: Headlights, AC, windows, battery, start
- **Fluids Condition**: Engine oil, coolant, brake fluid
- **Service History**: Dates for service, oil, brakes, tyres, battery
- **EV Specific**: Range, charging, battery, inverter

### 4. AI Analysis (`/analysis/[id]`)

- Fetches inspection data from Firestore
- Displays AI-generated analysis:
  - Overall health score (0-100)
  - Cost summary (immediate, upcoming, total)
  - Critical issues with priority
  - System health breakdown
- Uses Google Gemini AI for analysis generation

### 5. Landing Page (`/`)

- Marketing/promotional page
- Feature highlights
- Trust badges
- CTA to login/signup

---

## Firebase Collections

### `users`

```javascript
{
  name: string,
  email: string,
  createdAt: timestamp,
  lastLogin: timestamp (optional, for Google users)
}
```

### `vehicles`

```javascript
{
  userId: string,
  vehicleName: string,
  licensePlate: string,
  createdAt: timestamp
}
```

### `inspections`

```javascript
{
  userId: string,
  vehicleId: string,
  vehicleName: string,
  licensePlate: string,
  formData: object,
  imageUrls: object,
  analysis: object (AI-generated),
  submittedAt: timestamp
}
```

---

## Dependencies

```json
{
	"@google/generative-ai": "^0.24.1",
	"firebase": "^12.6.0",
	"next": "^16.0.4",
	"react": "^19.2.0",
	"react-dom": "^19.2.0"
}
```

---

## Environment Variables (Required)

The following API keys are currently hardcoded and should be moved to environment variables:

- Firebase configuration (in `lib/firebase.js`)
- Gemini API key (in `app/vehicle/[id]/page.js`)

---

## Progress Log

### November 26, 2025 - Initial Setup

- [x] Analyzed project structure
- [x] Created context.md for progress tracking
- [x] Installed dependencies (`npm install`) - 107 packages installed, 0 vulnerabilities
- [x] Verified project initialization - Next.js 16.0.4 (Turbopack) running on http://localhost:3000

### November 26, 2025 - Bug Fixes

- [x] **Fixed dropdown label overlap issue** (`app/globals.css`)

  - Added CSS rules for `.input-group select ~ label` to always float labels above select elements
  - Select elements don't support `:placeholder-shown`, so labels need to be permanently elevated
  - Affected dropdowns: "Sound while braking?", "Sound while turning?", "Car pulling left/right", "Brake pedal feel"

- [x] **Improved Gemini API error handling** (`app/vehicle/[id]/page.js`)
  - Added specific error detection for 429 rate limit errors
  - User-friendly error message explaining the quota issue
  - Provides guidance on waiting and checking API quota

### November 26, 2025 - Environment & Styling Improvements

- [x] **Created `.env.local` file for API keys**

  - Added `NEXT_PUBLIC_GEMINI_API_KEY` environment variable
  - Prepared placeholders for Firebase config (to be moved later)

- [x] **Updated Gemini API key usage** (`app/vehicle/[id]/page.js`)

  - Changed from hardcoded API key to `process.env.NEXT_PUBLIC_GEMINI_API_KEY`

- [x] **Fixed dropdown label spacing** (`app/globals.css`)

  - Increased `.input-group` margin-top to 1.5rem and added padding-top
  - Moved select labels higher (top: -1.6rem) for better separation
  - Added margin-top to select elements for cleaner visual spacing
  - Labels no longer appear crowded with dropdown text

- [x] **Fixed dropdown label overlap with checkboxes above** (`app/globals.css`)

  - Changed from absolute positioning to flexbox with `column-reverse`
  - Labels now render above dropdowns without overlapping other content
  - Uses `:has(select)` selector for targeted styling

- [x] **Fixed "Objects are not valid as React child" error** (`app/analysis/[id]/page.js`)
  - `upcomingMaintenance` items are objects with {title, severity, description, etc.}
  - Updated rendering to properly extract object properties instead of rendering object directly
  - Added proper display for title, description, and timeline fields
  - Added CSS styles for new maintenance details layout

---

## Upcoming Tasks

- [x] Move API keys to environment variables
- [ ] Clean up legacy HTML/JS files
- [ ] Add proper error handling
- [ ] Implement loading states consistently
- [ ] Add responsive design improvements
- [ ] Add unit tests
- [ ] Set up CI/CD pipeline

---

## Notes

- The project uses Next.js App Router (not Pages Router)
- Firebase is initialized with singleton pattern to prevent multiple instances
- Gemini AI model used: `gemini-2.0-flash-exp`
- All protected pages use `onAuthStateChanged` for auth checking
