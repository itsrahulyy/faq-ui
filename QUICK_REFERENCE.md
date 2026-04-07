# Quick Reference Guide

## 📋 Common Tasks

### Task 1: Add a New Image FAQ

1. Save image to `/public/images/your-image.jpg`
2. Add to `/data/faqs.json`:
```json
{
  "id": 6,
  "question": "Your question?",
  "answer": "Your answer...",
  "image": "/images/your-image.jpg",
  "video": null,
  "badge": "PHOTO"
}
```
3. Redeploy
4. Done! ✅

---

### Task 2: Add a Video FAQ

1. Save video to `/public/videos/your-video.mp4`
2. Add to `/data/faqs.json`:
```json
{
  "id": 7,
  "question": "Watch this?",
  "answer": "Amazing video content...",
  "image": "/images/thumbnail.jpg",
  "video": "/videos/your-video.mp4",
  "badge": "VIDEO"
}
```
3. Redeploy
4. Done! ✅

---

### Task 3: Update Existing FAQ Content

Edit `/data/faqs.json`:
- Change `question` ✅
- Change `answer` ✅
- Change `image` path ✅
- Change `video` path ✅
- Change `badge` ✅

No code changes needed! Just update JSON.

---

### Task 4: Change Badge Label

Current badges:
- `"PHOTO"` - Still photos
- `"NATURE"` - Nature/stock images
- `"VIDEO"` - Videos
- `"TEXT"` - Text only answer

Want custom badges? Edit `/components/FaqCard.jsx` line 44.

---

### Task 5: Test Before Deploying

```bash
npm run dev
# Visit: http://localhost:3000
# Test all slides, videos, swipe
# Check mobile view (F12 → device mode)
```

---

### Task 6: Deploy Updates

```bash
# If using Git + Vercel/GitHub
git add .
git commit -m "Update FAQs"
git push
# Auto-deploys!

# If manual deploy
npm run build
# Upload files to your server
```

---

### Task 7: Video Not Playing?

- ✅ Check file is in `/public/videos/`
- ✅ Use MP4 format
- ✅ Check browser console (F12) for errors
- ✅ Try different browser
- ✅ Check internet connection

---

### Task 8: Image Not Showing?

- ✅ Check file is in `/public/images/`
- ✅ Check JSON path matches filename
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Try JPG, PNG, or WebP formats

---

### Task 9: Swipe Not Working on Mobile?

- ✅ Test on actual phone (not browser emulation)
- ✅ Make sure you're touching the slide
- ✅ Try faster swipe
- ✅ Close mobile dev tools (they block touch)
- ✅ WhatsApp browser works! ✅

---

### Task 10: Change Order of FAQs

In `/data/faqs.json`, change `"id"` values:
```json
// Was: id 1, 2, 3, 4, 5
// Now: id 1, 3, 2, 4, 5  ← Reordered

// They display in order of id value
[
  { "id": 1, ... },   // Shows 1st
  { "id": 3, ... },   // Shows 2nd
  { "id": 2, ... },   // Shows 3rd
  { "id": 4, ... },   // Shows 4th
  { "id": 5, ... }    // Shows 5th
]
```

---

## 🗂️ File Paths Reference

### Image Folder
```
/public/images/
├── image1.jpg
├── photo.png
└── thumbnail.webp
```
→ Reference as: `/images/image1.jpg`

### Video Folder
```
/public/videos/
├── intro.mp4
├── tutorial.mp4
└── demo.webm
```
→ Reference as: `/videos/intro.mp4`

### FAQ Data
```
/data/faqs.json
```
→ Only file you need to edit for content!

---

## 🎨 CSS Customization Guides

### Change Colors

Edit `/app/globals.css`:

```css
/* Orange accent → Change #f97316 to your color */
.faq-swiper .swiper-pagination-bullet-active {
  background: #f97316;  ← Your color here
}
```

### Change Dark Background

Edit `/app/page.js` line 19:

```javascript
// Current: from-slate-900 via-slate-800 to-slate-900
// Change to: from-slate-950 (darker) or slate-800 (lighter)
<div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
```

### Add More Spacing

Edit `/app/page.js` and add Tailwind classes:
- `py-16` = more vertical space
- `px-8` = more horizontal space
- `gap-8` = more gap between items

---

## 🔍 JSON Validation

Make sure your `/data/faqs.json` is valid:

```json
[
  {
    "id": 1,                             ✅ Must be number
    "question": "String?",               ✅ Must be string
    "answer": "String",                  ✅ Must be string
    "image": "/images/file.jpg" or null, ✅ Must be string path or null
    "video": "/videos/file.mp4" or null, ✅ Must be string path or null
    "badge": "PHOTO"                     ✅ Must be string
  }
]
```

**Common mistakes:**
- ❌ Missing comma between properties
- ❌ Extra comma after last item
- ❌ Wrong quotes (use `"` not `'`)
- ❌ Missing closing bracket `}`
- ❌ Missing closing bracket `]`

**Validate here:** https://jsonlint.com/

---

## 📊 Recommended Media Sizes

### Images
- **Dimensions:** 800×450px (or 16:9 aspect ratio)
- **Format:** JPG or PNG
- **Size:** < 500KB (use compression)
- **Tool:** tinypng.com

### Videos
- **Duration:** < 2 minutes (recommended)
- **Format:** MP4 (H.264 codec)
- **Bitrate:** 1-3 Mbps
- **Size:** < 10MB
- **Tool:** handbrake.fr

### Why These Settings?
- Optimized for mobile loading
- Fast initial page load
- Works in WhatsApp browser
- Reduced bandwidth usage

---

## 🚀 Deployment Options

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repo
4. Deploy (1-click)
5. Every `git push` auto-deploys ✅

### Option 2: Netlify
1. Build locally: `npm run build`
2. Upload to Netlify
3. Set build command: `npm run build`
4. Deploy

### Option 3: Any Server
1. Install Node.js on server
2. Upload project files
3. Run: `npm install && npm run build`
4. Run: `npm start`
5. Use PM2 to keep running

---

## 🐛 Troubleshooting Checklist

| Problem | Solution |
|---------|----------|
| Blank page | Check console (F12) for errors |
| Images broken | Verify path: `/images/filename.ext` |
| Videos black | Try MP4 format, check file size |
| Swipe not working | Test on real phone (not emulator) |
| Can't find file | Check `/public/` folder structure |
| Old content showing | Clear cache: Ctrl+Shift+Delete |
| Build fails | Run `npm run lint` to find errors |
| Dev server won't start | Kill process: `taskkill /F /IM node.exe` |

---

## 📱 Mobile Testing

### Test Swipe & Touch
1. Add to home screen (PWA)
2. Test on actual phone
3. Test in WhatsApp browser (share link)
4. Test landscape/portrait modes
5. Test on different phones

### Browser DevTools for Mobile
```
Chrome: F12 → Device Toggle → Select Phone
```
⚠️ Note: Touch emulation is not 100% accurate - test on real device!

---

## 🔐 Security Checklist

- ✅ No user input fields (safe)
- ✅ No backend access (safe)
- ✅ No database (safe)
- ✅ No cookies (safe)
- ✅ No tracking (safe)
- ✅ Static content only (safe)
- ✅ Can deploy anywhere (safe)

---

## 📈 Performance Tips

1. **Use WebP for images** (smaller file size)
2. **Compress videos** (use HandBrake)
3. **Limit to 10-20 FAQs** (fast loading)
4. **Deploy on CDN** (Vercel/Netlify default)
5. **Enable browser caching** (automatic with Next.js)

---

## 🆘 Need Help?

### Check These First:
1. `/README_SETUP.md` - Full setup guide
2. `/IMPLEMENTATION_SUMMARY.md` - What was done
3. Browser console (F12) - Error messages
4. Validate JSON at jsonlint.com

### Common Questions:
- Q: Can I add more FAQs?
  A: Yes! Add to JSON, increment ID ✅

- Q: Can I use different colors?
  A: Yes! Edit `/app/globals.css` ✅

- Q: Can I remove video feature?
  A: Yes! Set `"video": null` for all FAQs ✅

- Q: How many FAQs can I add?
  A: Unlimited! (Performance good up to ~100)

- Q: Can I use external URLs?
  A: Yes! Just use full URL instead of `/images/` path

---

**Keep it simple. Just JSON + files. Done!** ✅
