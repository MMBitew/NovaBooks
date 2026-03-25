# 🚀 NovaBooks - GitHub Deployment Guide

Follow these steps to get NovaBooks live on GitHub Pages.

---

## 📋 Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `NovaBooks`
3. Description: `Visual reading companion for Harry Potter`
4. Set to **Public**
5. Click **"Create repository"**

---

## 📁 Step 2: Copy Files to Your Computer

Create a folder called `NovaBooks` and copy these files into it:

```
NovaBooks/
├── index.html
├── app.js
├── README.md
├── .gitignore
└── images/
    └── README.md
```

---

## 🖼️ Step 3: Add Character Images (Optional)

**Option A - Add images now:**
1. Download Hagrid and Dumbledore images
2. Save as `hagrid.jpg` and `dumbledore.jpg`
3. Place in the `images/` folder

**Option B - Add images later:**
- The app will show purple placeholder boxes until you add images
- You can add them anytime and commit later

---

## 💻 Step 4: Push to GitHub

### Using Git Bash (Windows) or Terminal (Mac/Linux)

```bash
# Navigate to your NovaBooks folder
cd /path/to/NovaBooks

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - NovaBooks app"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/NovaBooks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click **Save**

**Your app will be live at:**
```
https://YOUR_USERNAME.github.io/NovaBooks/
```

*(It may take 1-2 minutes to deploy)*

---

## ✅ Step 6: Test Your App

1. Visit `https://YOUR_USERNAME.github.io/NovaBooks/`
2. Test all 3 menu options:
   - Characters (swipe through 7 characters)
   - Icon Guide (learn the system)
   - Chapters (tap any chapter 1-17)
3. Test audio 🔊 buttons
4. Check if images load

---

## 🔧 Troubleshooting

### Images Don't Load

**Problem:** Hagrid and Dumbledore show purple boxes

**Solutions:**
1. Check that images are in the `images/` folder
2. Check file names are exactly: `hagrid.jpg` and `dumbledore.jpg`
3. Make sure you committed and pushed the images folder

**Quick Fix:**
```bash
git add images/
git commit -m "Add character images"
git push
```

### Page Shows 404

**Problem:** GitHub Pages shows "404 Not Found"

**Solutions:**
1. Wait 2-3 minutes - GitHub Pages takes time to build
2. Check that `index.html` is in the root folder (not in a subfolder)
3. Make sure GitHub Pages is enabled in Settings → Pages

### Audio Doesn't Work

**Problem:** 🔊 buttons don't speak

**Solutions:**
1. Check browser compatibility (works best in Chrome/Safari)
2. Make sure device volume is on
3. Some browsers require user interaction first - tap the button once, then it should work

---

## 🔄 Making Changes

After your initial deployment, here's how to update:

```bash
# Make your changes to files

# Add changes
git add .

# Commit with a message
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

GitHub Pages will automatically update within 1-2 minutes.

---

## 📱 Share Your App

Once live, share the link:
```
https://YOUR_USERNAME.github.io/NovaBooks/
```

**Perfect for:**
- Phones (iPhone/Android)
- Tablets (iPad)
- Computers (any browser)

**Tip:** On iPhone/iPad, you can "Add to Home Screen" to make it feel like a native app!

---

## 🎯 Next Steps

1. ✅ Add Hagrid and Dumbledore images
2. 📱 Test on a phone/tablet
3. 👥 Share with Tina to test
4. 📊 Watch the GitHub repo for any issues
5. 🔧 Make improvements based on feedback

---

## 💡 Quick Reference Commands

```bash
# Check status
git status

# See what changed
git diff

# Undo changes to a file
git checkout -- filename

# Pull latest from GitHub
git pull

# See commit history
git log
```

---

## 🆘 Need Help?

- **Git Issues:** https://docs.github.com/en/get-started
- **GitHub Pages:** https://docs.github.com/en/pages
- **JavaScript Errors:** Open browser console (F12) and check for errors

---

**You're all set! 🎉**

Your NovaBooks app is now live and ready to help Tina (and others) follow along with Harry Potter!
