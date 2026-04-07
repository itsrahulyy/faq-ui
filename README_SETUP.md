# FAQ Carousel - Setup & Maintenance Guide

A modern, responsive FAQ carousel built with Next.js, React, Tailwind CSS, and Swiper.js. Optimized for mobile browsers including WhatsApp's in-app browser.

---

## 📁 Project Structure

```
FAQ_UI/
├── app/
│   ├── page.js              # Main carousel page
│   ├── layout.js            # Root layout
│   └── globals.css          # Global styles
├── components/
│   └── FaqCard.jsx          # FAQ card component (video/image handler)
├── data/
│   └── faqs.json            # FAQ content & media configuration
├── public/
│   ├── images/              # Store your images here (*.jpg, *.png, *.webp)
│   └── videos/              # Store your videos here (*.mp4, *.webm)
├── package.json
└── README_SETUP.md          # This file
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit: **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📝 How to Add/Update FAQs

### Step 1: Add Media Files

#### For Images:
1. Save your image files to: `/public/images/`
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 800×450px
   - Example: `meetup-01.jpg`

#### For Videos:
1. Save your video files to: `/public/videos/`
   - Supported formats: MP4, WebM
   - Recommended: Keep videos under 10MB for fast loading
   - Example: `intro.mp4`

### Step 2: Update FAQ Data

Edit `/data/faqs.json`:

```json
[
  {
    "id": 1,
    "question": "What is this meetup about?",
    "answer": "This meetup is about connecting developers and designers...",
    "image": "/images/meetup-01.jpg",
    "video": null,
    "badge": "PHOTO"
  },
  {
    "id": 2,
    "question": "Where and when?",
    "answer": "Downtown tech hub, every second Tuesday...",
    "image": null,
    "video": "/videos/location-tour.mp4",
    "badge": "VIDEO"
  }
]
```

### Field Descriptions:

| Field | Required | Values | Description |
|-------|----------|--------|-------------|
| `id` | ✅ | Number | Unique identifier (1, 2, 3...) |
| `question` | ✅ | String | FAQ question |
| `answer` | ✅ | String | FAQ answer text |
| `image` | ⭕ | String or null | Path to image: `/images/filename.jpg` or `null` |
| `video` | ⭕ | String or null | Path to video: `/videos/filename.mp4` or `null` |
| `badge` | ✅ | String | "PHOTO", "NATURE", or "VIDEO" |

### Media Priority (What Shows First):

1. **If `video` exists** → Video player with controls
2. **Else if `image` exists** → Image display
3. **Else** → "No media available" message

---

## 💡 Media Examples

### Text Only (No Media)
```json
{
  "id": 3,
  "question": "Any questions?",
  "answer": "Contact us at email@example.com",
  "image": null,
  "video": null,
  "badge": "TEXT"
}
```

### Image Only
```json
{
  "id": 1,
  "question": "What is this meetup?",
  "answer": "A community gathering...",
  "image": "/images/community.jpg",
  "video": null,
  "badge": "PHOTO"
}
```

### Video Only
```json
{
  "id": 4,
  "question": "See our last meetup?",
  "answer": "Check out the highlights...",
  "image": null,
  "video": "/videos/meetup-highlights.mp4",
  "badge": "VIDEO"
}
```

### Video + Image Fallback (Image shows if video fails)
```json
{
  "id": 5,
  "question": "How to get there?",
  "answer": "Here's a quick guide...",
  "image": "/images/location-map.jpg",
  "video": "/videos/directions.mp4",
  "badge": "VIDEO"
}
```

---

## 🎮 User Interactions

### Desktop:
- ⬅️ **Left Arrow** - Previous FAQ
- ➡️ **Right Arrow** - Next FAQ
- ⌨️ **Arrow Keys** - Navigate slides
- 🖱️ **Dots** - Jump to specific FAQ
- 🖱️ **Swipe** - Drag to navigate

### Mobile/WhatsApp:
- 👆 **Swipe Left/Right** - Navigate slides
- 🖱️ **Tap Dots** - Jump to specific FAQ
- ⬅️ **Tap Arrows** - Previous/Next
- ⌨️ **Arrow Keys** (with keyboard) - Navigate

---

## ⚡ Performance Tips

1. **Image Optimization**
   - Use WebP format for smaller file sizes
   - Recommended max dimension: 800×450px
   - Compress before uploading: [TinyPNG](https://tinypng.com/)

2. **Video Optimization**
   - Keep videos short (< 2 minutes recommended)
   - Use MP4 H.264 codec for best compatibility
   - Target bitrate: 1-3 Mbps
   - Use free tools like [HandBrake](https://handbrake.fr/) to compress

3. **Lazy Loading**
   - Images and videos use `loading="lazy"` attribute
   - They only load when needed (smoother initial page load)

4. **Caching**
   - Next.js automatically optimizes static assets
   - Deployed on platforms like Vercel handle CDN automatically

---

## 🔧 Deployment

### Option 1: Vercel (Recommended - uses Next.js)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your GitHub repo
4. Deploy (automatic)
5. Update is automatic when you push changes

### Option 2: Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Option 3: Self-Hosted (any server)

```bash
npm run build
npm start
```

Then run with PM2 or supervisor to keep it running.

---

## 🐛 Troubleshooting

### Issue: Images not showing
- ✅ Check file is in `/public/images/`
- ✅ Check path in JSON is correct: `/images/filename.jpg`
- ✅ Clear browser cache: `Ctrl+Shift+Delete`

### Issue: Videos not playing
- ✅ Check file is in `/public/videos/`
- ✅ Video format should be MP4
- ✅ Browser developer console (F12) for error messages

### Issue: Carousel not working on mobile
- ✅ Test on actual device/browser
- ✅ Check internet connection
- ✅ Swiper works in WhatsApp's in-app browser (tested)

### Issue: Build fails
```bash
npm run lint          # Check for errors
npm run build         # Try building again
```

---

## 📊 Badge Options

Use these badges in your FAQ JSON:

| Badge | Use Case |
|-------|----------|
| `"PHOTO"` | Real photographs (from camera) |
| `"NATURE"` | Nature/stock photos |
| `"VIDEO"` | Video content |
| `"TEXT"` | Text-only answers |

Custom badges can be added in `components/FaqCard.jsx` if needed.

---

## 🔒 Security

- ✅ **No backend** - All content is static (safe)
- ✅ **No database** - JSON only (no vulnerabilities)
- ✅ **No tracking** - No analytics or cookies
- ✅ **CORS friendly** - Works anywhere

---

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **Swiper.js** - Touch carousel
- **Tailwind CSS 4** - Styling

All optimized for size and performance.

---

## 💬 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for code issues
npm run lint
```

---

## 🎯 Next Steps

1. ✅ Add your images to `/public/images/`
2. ✅ Add your videos to `/public/videos/`
3. ✅ Update `/data/faqs.json` with your content
4. ✅ Test locally: `npm run dev`
5. ✅ Deploy to Vercel or your server
6. ✅ Share the link!

---

## 💡 Examples

### Example 1: Simple Text + Image FAQ
```json
{
  "id": 1,
  "question": "How do I register?",
  "answer": "Visit our website and click 'Register' button.",
  "image": "/images/register.jpg",
  "video": null,
  "badge": "PHOTO"
}
```

### Example 2: Video Tutorial
```json
{
  "id": 2,
  "question": "Watch our intro video",
  "answer": "This is our 2-minute intro to the meetup",
  "image": "/images/intro-thumbnail.jpg",
  "video": "/videos/intro.mp4",
  "badge": "VIDEO"
}
```

### Example 3: Text Only
```json
{
  "id": 3,
  "question": "Contact information?",
  "answer": "Email: hello@meetup.com | Phone: +1-555-0000",
  "image": null,
  "video": null,
  "badge": "TEXT"
}
```

---

## 📞 Support

If you have questions:
1. Check file paths are correct
2. Verify JSON syntax is valid
3. Check browser console for errors (F12)
4. Clear cache and reload

---

**Made with ❤️ using Next.js**

Last updated: April 2026
