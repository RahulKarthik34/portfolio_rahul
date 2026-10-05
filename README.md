# Rahul Karthik Mugachintala — Portfolio Website

A modern, production-ready, recruiter-focused personal portfolio website built with **React (Vite)**, **Tailwind CSS**, **Google Fonts (Sora & Inter)**, and custom **React Bits** atmospheric and interactive components (**BorderGlow**, **ParticleText**, **DepthCarousel**, and **AeroShards**).

Targeted at recruiters and hiring managers for **Full-Stack Developer / Software Engineer (entry-level)** roles, with secondary alignment for Python/backend and data-adjacent positions.

---

## 🚀 Live Tech Stack

- **Core**: React 18, Vite 6, JavaScript (ES6+)
- **Styling**: Tailwind CSS (Dark mode default `#0F172A`, optional light mode `#FFFFFF`)
- **Typography**: Sora (headings) & Inter (body)
- **Visuals & 3D**:
  - `AeroShards`: Subtle atmospheric shard visual for hero background with progressive enhancement
  - `ParticleText`: Interactive text particle gather & pointer repel effect for hero name
  - `BorderGlow`: Pointer-proximity edge glow on cards and sections
  - `DepthCarousel`: 3D perspective project showcase powered by GSAP
- **Icons**: Lucide React
- **Contact Integration**: Configurable with Formspree or EmailJS

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                               # Brand monogram favicon
│   ├── images/
│   │   ├── profile/
│   │   │   └── rahul1.jpeg                       # Rahul Karthik profile photo
│   │   ├── projects/
│   │   │   ├── bus-attendance.jpg                # QR / Barcode Bus Attendance System
│   │   │   ├── movie-website.jpg                 # MovieHub Modern Movie Website
│   │   │   └── ai-mock-interview.jpg             # Intervexa 3D Avatar Mock Interview System
│   │   └── og-image.png                          # Social share preview (1200x630)
│   └── resume/
│       └── Rahul-Karthik-Mugachintala-Resume.pdf # Official downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                            # Responsive navigation with ThemeToggle
│   │   ├── Hero.jsx                              # Developer hero with ParticleText & AeroShards
│   │   ├── About.jsx                             # Bio & 4 strength cards with BorderGlow
│   │   ├── Skills.jsx                            # Categorized skill pills
│   │   ├── Projects.jsx                          # 3 featured project cards & case study modal
│   │   ├── ProjectCard.jsx                       # Individual project card with BorderGlow
│   │   ├── ProjectCaseStudy.jsx                  # Full technical case study modal dialog
│   │   ├── ProjectShowcase.jsx                   # Interactive 3D DepthCarousel
│   │   ├── Certifications.jsx                    # IBM & Great Learning certifications
│   │   ├── Resume.jsx                            # Embedded PDF viewer & direct download
│   │   ├── Contact.jsx                           # Formspree contact form & direct info
│   │   ├── Footer.jsx                            # Semantic footer & back to top
│   │   ├── ThemeToggle.jsx                       # Dark/Light mode toggle with persistence
│   │   └── react-bits/
│   │       ├── BorderGlow.jsx & .css
│   │       ├── ParticleText.jsx & .css
│   │       ├── DepthCarousel.jsx & .css
│   │       └── AeroShards.jsx & .css
│   ├── data/
│   │   └── projects.js                           # Centralized project data & case studies
│   ├── App.jsx                                   # Root layout with smooth anchor scrolling
│   ├── index.css                                 # Tailwind base & light mode styling
│   └── main.jsx                                  # React entry point
├── index.html                                    # SEO & Open Graph meta tags
├── tailwind.config.js                            # Tailwind design tokens
└── vite.config.js                                # Vite bundler config
```

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build production bundle**:
   ```bash
   npm run build
   ```

4. **Preview production bundle**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel

1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rahul Karthik Portfolio"
   git branch -M main
   git remote add origin https://github.com/RahulKarthik34/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Configure Build & Output:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. (Optional) Add Environment Variables:
   - `VITE_FORMSPREE_ENDPOINT`: Your Formspree form URL (e.g., `https://formspree.io/f/your_id`)
7. Click **Deploy**.

---

### Option 2: Deploy to Netlify

1. Push your code to GitHub.
2. Log in to [Netlify](https://www.netlify.com) and select **"Import from Git"**.
3. Select your repository.
4. Configure Build settings:
   - **Base directory**: `.`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Under **Site configuration > Environment variables**, add `VITE_FORMSPREE_ENDPOINT` if using Formspree.
6. Click **Deploy Site**.

---

## 📌 Updating Placeholders

When your actual project repositories and live demos become publicly accessible:
- Open [`src/data/projects.js`](src/data/projects.js)
- Update `GITHUB_URL` and `LIVE_DEMO_URL` or set them per project.
- Replace placeholder screenshots in `public/images/projects/` with real application captures.
- Replace `public/resume/Rahul-Karthik-Mugachintala-Resume.pdf` with your final PDF resume.
