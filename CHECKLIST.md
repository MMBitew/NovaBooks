# ✅ NovaBooks Setup Checklist

Use this checklist to deploy NovaBooks step-by-step.

---

## Before You Start

- [ ] You have a GitHub account
- [ ] You have Git installed on your computer
- [ ] You have Git Bash (Windows) or Terminal (Mac/Linux) open

---

## Deployment Steps

### 1️⃣ Create Repository
- [ ] Go to https://github.com/new
- [ ] Name it `NovaBooks`
- [ ] Make it Public
- [ ] Click "Create repository"

### 2️⃣ Prepare Files
- [ ] Create a folder on your computer called `NovaBooks`
- [ ] Copy these files into it:
  - [ ] `index.html`
  - [ ] `app.js`
  - [ ] `README.md`
  - [ ] `.gitignore`
- [ ] Create `images` folder inside `NovaBooks`
- [ ] Copy `images/README.md` into the `images` folder

### 3️⃣ Add Images (Optional - can do later)
- [ ] Download Hagrid image → save as `images/hagrid.jpg`
- [ ] Download Dumbledore image → save as `images/dumbledore.jpg`

### 4️⃣ Push to GitHub
Open Git Bash/Terminal in your `NovaBooks` folder and run:

```bash
git init
git add .
git commit -m "Initial commit - NovaBooks app"
git remote add origin https://github.com/YOUR_USERNAME/NovaBooks.git
git branch -M main
git push -u origin main
```

- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Ran `git remote add origin` (with YOUR username)
- [ ] Ran `git push -u origin main`

### 5️⃣ Enable GitHub Pages
- [ ] Go to your NovaBooks repository on GitHub
- [ ] Click **Settings**
- [ ] Click **Pages** (left sidebar)
- [ ] Set Source to `main` branch
- [ ] Click **Save**
- [ ] Wait 2 minutes

### 6️⃣ Test Your App
- [ ] Visit `https://YOUR_USERNAME.github.io/NovaBooks/`
- [ ] Test Characters section
- [ ] Test Icon Guide section
- [ ] Test Chapters section
- [ ] Test audio 🔊 buttons
- [ ] Check if all images load

---

## ✅ You're Done!

Your app is live at:
```
https://YOUR_USERNAME.github.io/NovaBooks/
```

---

## 🔧 If Something Doesn't Work

**Purple boxes instead of Hagrid/Dumbledore?**
→ Add the images to the `images/` folder and push again

**404 error?**
→ Wait 2-3 minutes, GitHub Pages takes time to deploy

**Audio doesn't work?**
→ Try Chrome or Safari browser, check device volume

---

## 📝 To Make Changes Later

```bash
# Make your changes
git add .
git commit -m "What you changed"
git push
```

The site updates automatically in 1-2 minutes!

---

**Need the full guide?** See `DEPLOYMENT.md` for detailed instructions.
