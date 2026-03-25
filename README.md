# 📚 Nova Books

A visual, audio-supported reading companion app for teens and young adults who benefit from structured learning.

**Current Book:** Harry Potter and the Sorcerer's Stone

## 🎯 Features

- **Character Cards** - Visual character guides with real photos
- **Icon System** - Simple 4-icon framework (👤 Who, 📍 Where, ⚡ What happened, ❓ Confusing)
- **Chapter Summaries** - All 17 chapters broken down
- **Audio Support** - 🔊 Every screen reads aloud
- **Progress Tracking** - Visual progress bar
- **No Reading Required** - Designed for audio-first learning

## 🚀 Live Demo

Visit: `https://yourusername.github.io/NovaBooks/`

## 📁 Project Structure

```
NovaBooks/
├── index.html          # Main app file
├── app.js              # All JavaScript logic
├── images/             # Character images
│   ├── hagrid.jpg
│   └── dumbledore.jpg
└── README.md           # This file
```

## 🎨 Design Philosophy

Nova Books follows the **Brio App Design Philosophy**:

- ✅ **Visual First** - Images before text
- ✅ **Minimal Words** - 1-2 word labels, icons over paragraphs
- ✅ **Audio Support** - Every screen can be heard
- ✅ **Teen-Friendly** - Modern, not childish
- ✅ **No Therapy Language** - Respectful, empowering tone
- ✅ **Micro-Lessons** - Small, digestible content
- ✅ **Progress Visible** - Always see where you are

## 🛠️ Setup

### Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/NovaBooks.git
   cd NovaBooks
   ```

2. **Add missing images:**
   - Create an `images` folder
   - Add `hagrid.jpg` and `dumbledore.jpg`
   - See below for instructions

3. **Open in browser:**
   ```bash
   open index.html
   ```

### Deploy to GitHub Pages

1. Go to your repo settings
2. Navigate to **Pages**
3. Set source to `main` branch
4. Your app will be live at `https://yourusername.github.io/NovaBooks/`

## 🖼️ Adding Character Images

Two images are currently missing: **Hagrid** and **Dumbledore**

### Option 1: Local Images (Recommended)

1. Create an `images` folder in your project
2. Download images:
   - **Hagrid:** Find a clear portrait photo (150×200px ideal)
   - **Dumbledore:** Find a clear portrait photo (150×200px ideal)
3. Save as:
   - `images/hagrid.jpg`
   - `images/dumbledore.jpg`
4. Commit and push

### Option 2: Use Working External URLs

In `app.js`, replace the image paths with working URLs:

```javascript
{
    name: 'Hagrid',
    image: 'YOUR_HAGRID_IMAGE_URL_HERE',
    // ...
},
{
    name: 'Dumbledore',
    image: 'YOUR_DUMBLEDORE_IMAGE_URL_HERE',
    // ...
}
```

## 📱 How It Works

### For Users (Like Tina)

1. **Tap "Characters"** → Swipe through 7 character cards
2. **Tap 🔊** → Hear the character description
3. **Tap "Icon Guide"** → Learn the 4-icon system
4. **Tap "Chapters"** → See all 17 chapters in a grid
5. **Tap any chapter** → See summary using the 4 icons
6. **Swipe left/right** → Navigate between chapters
7. **Progress bar** shows completion

### Key Interactions

- **Swipeable cards** (like Instagram stories)
- **Big tap targets** (thumb-friendly)
- **Audio on every screen** (no reading required)
- **Non-linear navigation** (jump to any chapter)

## 🎓 Built For

Teens and young adults (ages 13-21) who:
- Learn more slowly but are capable
- Benefit from visual learning
- Prefer audio support
- Want structured, bite-sized content
- Appreciate modern, respectful design

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks
- **Mobile-first responsive design**
- **Web Speech API** for text-to-speech
- **LocalStorage** for progress tracking
- **Works offline** (once loaded)

## 📚 Future Books

NovaBooks is designed to support multiple books. To add a new book:

1. Create a new data file (e.g., `data-chamber-of-secrets.js`)
2. Update character and chapter arrays
3. Add a book selector to the home screen

## 🤝 Contributing

This is a personal project for Tina, but suggestions are welcome!

## 📄 License

Personal use only. Harry Potter content © Warner Bros.

## 🙏 Acknowledgments

- Inspired by Duolingo, Elevate, and Headspace
- Part of the **Brio** educational app suite
- Built with love for learners who think differently

---

**Made with ❤️ for Tina**
