// Character Data
const characters = [
    {
        name: 'Harry Potter',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
        clue: 'Scar + glasses',
        who: 'Main character',
        personality: 'Brave, curious',
        hint: 'Harry = the one we follow'
    },
    {
        name: 'Ron Weasley',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        clue: 'Red hair',
        who: 'Best friend',
        personality: 'Funny, loyal',
        hint: 'Ron = the fun friend'
    },
    {
        name: 'Hermione Granger',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg',
        clue: 'Loves books',
        who: 'Smart friend',
        personality: 'Organized, confident',
        hint: 'Hermione = the smart helper'
    },
    {
        name: 'Hagrid',
        image: 'images/hagrid.jpg',
        clue: 'Big + beard',
        who: 'Helper',
        personality: 'Kind',
        hint: 'Hagrid = big and kind'
    },
    {
        name: 'Dumbledore',
        image: 'images/dumbledore.jpg',
        clue: 'Long beard',
        who: 'Leader',
        personality: 'Wise',
        hint: 'Dumbledore = wise guide'
    },
    {
        name: 'Snape',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg',
        clue: 'Serious face',
        who: 'Teacher',
        personality: 'Strict',
        hint: 'Snape = not very friendly'
    },
    {
        name: 'Voldemort',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg',
        clue: 'Scary, hidden',
        who: 'Villain',
        personality: '',
        hint: "He's the danger behind everything"
    }
];

// Chapter Data
const chapters = [
    {
        number: 1,
        who: 'Harry (baby), Dumbledore, Hagrid',
        where: 'Outside a house',
        what: 'Harry survives, parents are gone',
        confusing: 'Why is he special?',
        hint: '👉 Big event at the beginning'
    },
    {
        number: 2,
        who: 'Harry, aunt, uncle, Dudley',
        where: 'House, zoo',
        what: 'Harry treated badly, strange magic happens',
        confusing: 'How did the glass disappear?',
        hint: '👉 Harry is different'
    },
    {
        number: 3,
        who: 'Harry, uncle',
        where: 'House, cabin',
        what: 'Letters keep coming',
        confusing: 'Who sent them?',
        hint: '👉 Letters are important'
    },
    {
        number: 4,
        who: 'Harry, Hagrid',
        where: 'Cabin',
        what: 'Harry learns he is a wizard',
        confusing: "Why didn't he know before?",
        hint: '👉 Life changes here'
    },
    {
        number: 5,
        who: 'Harry, Hagrid',
        where: 'Diagon Alley',
        what: 'Buys school supplies, gets wand',
        confusing: 'Why did wand choose him?',
        hint: '👉 Magic world begins'
    },
    {
        number: 6,
        who: 'Harry, Ron',
        where: 'Train',
        what: 'Meets Ron, goes to school',
        confusing: 'Will they stay friends?',
        hint: '👉 Friendship starts'
    },
    {
        number: 7,
        who: 'Harry, students',
        where: 'Hogwarts',
        what: 'Sorted into Gryffindor',
        confusing: 'What are houses?',
        hint: '👉 House matters'
    },
    {
        number: 8,
        who: 'Harry, Snape',
        where: 'Classroom',
        what: 'Snape is strict',
        confusing: "Why doesn't he like Harry?",
        hint: '👉 Important teacher'
    },
    {
        number: 9,
        who: 'Harry, Ron, Hermione',
        where: 'Castle at night',
        what: 'Finds 3-headed dog',
        confusing: 'What is it guarding?',
        hint: '👉 Mystery begins'
    },
    {
        number: 10,
        who: 'Harry, Ron, Hermione',
        where: 'School',
        what: 'Troll attack → friendship grows',
        confusing: 'Why did they help each other?',
        hint: '👉 Friends now'
    },
    {
        number: 11,
        who: 'Harry',
        where: 'Quidditch field',
        what: 'First game, Harry does great',
        confusing: 'Is someone trying to hurt him?',
        hint: '👉 Harry is talented'
    },
    {
        number: 12,
        who: 'Harry',
        where: 'Hidden room',
        what: 'Mirror shows his parents',
        confusing: 'Is it real?',
        hint: '👉 Shows feelings'
    },
    {
        number: 13,
        who: 'Harry, friends',
        where: 'School',
        what: "Learn about Sorcerer's Stone",
        confusing: 'Why is it important?',
        hint: '👉 Main mystery'
    },
    {
        number: 14,
        who: 'Hagrid, Harry',
        where: 'Hut',
        what: 'Dragon causes trouble',
        confusing: 'Was this a good idea?',
        hint: '👉 Breaking rules'
    },
    {
        number: 15,
        who: 'Harry',
        where: 'Forest',
        what: 'Sees something scary drinking blood',
        confusing: 'What is it?',
        hint: '👉 Danger growing'
    },
    {
        number: 16,
        who: 'Harry, Ron, Hermione',
        where: 'Trapdoor area',
        what: 'Go through challenges',
        confusing: 'Who helped most?',
        hint: '👉 Teamwork'
    },
    {
        number: 17,
        who: 'Harry, teacher',
        where: 'Final room',
        what: 'Villain revealed, Harry wins',
        confusing: 'Were you surprised?',
        hint: '👉 Harry saves the day'
    }
];

// State
let currentCharacterIndex = 0;
let currentChapterIndex = 0;
let viewedCharacters = new Set();
let viewedChapters = new Set();

// Initialize
function init() {
    renderChapterGrid();
    updateProgress();
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showMenu() {
    showScreen('menuScreen');
}

function showCharacters() {
    currentCharacterIndex = 0;
    renderCharacter();
    showScreen('characterScreen');
}

function showIconGuide() {
    showScreen('iconGuideScreen');
}

function showChapterSelect() {
    showScreen('chapterSelectScreen');
}

function showChapter(index) {
    currentChapterIndex = index;
    renderChapter();
    viewedChapters.add(index);
    updateProgress();
    renderChapterGrid();
    showScreen('chapterScreen');
}

// Character Functions
function renderCharacter() {
    const char = characters[currentCharacterIndex];
    const imgElement = document.getElementById('charImage');
    
    // Handle image loading with fallback to placeholder
    imgElement.onerror = function() {
        this.style.display = 'none';
        let placeholder = document.getElementById('charPlaceholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.id = 'charPlaceholder';
            placeholder.className = 'card-image placeholder';
            this.parentNode.insertBefore(placeholder, this);
        }
        placeholder.textContent = char.name;
        placeholder.style.display = 'flex';
    };
    
    imgElement.onload = function() {
        this.style.display = 'block';
        const placeholder = document.getElementById('charPlaceholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    };
    
    imgElement.src = char.image;
    
    document.getElementById('charName').textContent = char.name;
    document.getElementById('charClue').textContent = char.clue;
    document.getElementById('charWho').textContent = char.who;
    
    const personalitySection = document.getElementById('personalitySection');
    if (char.personality) {
        personalitySection.style.display = 'block';
        document.getElementById('charPersonality').textContent = char.personality;
    } else {
        personalitySection.style.display = 'none';
    }
    
    document.getElementById('charHint').textContent = char.hint;
    
    viewedCharacters.add(currentCharacterIndex);
    updateProgress();
}

function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    renderCharacter();
}

function prevCharacter() {
    currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length;
    renderCharacter();
}

function speakCharacter() {
    const char = characters[currentCharacterIndex];
    const text = `${char.name}. Clue: ${char.clue}. Who: ${char.who}. ${char.personality ? 'Personality: ' + char.personality + '.' : ''} ${char.hint}`;
    speak(text);
}

// Chapter Functions
function renderChapterGrid() {
    const grid = document.getElementById('chapterGrid');
    grid.innerHTML = '';
    
    chapters.forEach((chapter, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'chapter-bubble';
        if (viewedChapters.has(index)) {
            bubble.classList.add('completed');
        }
        bubble.onclick = () => showChapter(index);
        
        const num = document.createElement('div');
        num.className = 'chapter-bubble-num';
        num.textContent = chapter.number;
        
        bubble.appendChild(num);
        grid.appendChild(bubble);
    });
}

function renderChapter() {
    const chapter = chapters[currentChapterIndex];
    document.getElementById('chapterNumber').textContent = `📘 Chapter ${chapter.number}`;
    document.getElementById('chapterWho').textContent = chapter.who;
    document.getElementById('chapterWhere').textContent = chapter.where;
    document.getElementById('chapterWhat').textContent = chapter.what;
    document.getElementById('chapterConfusing').textContent = chapter.confusing;
    document.getElementById('chapterHint').textContent = chapter.hint;
}

function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        showChapter(currentChapterIndex + 1);
    }
}

function prevChapter() {
    if (currentChapterIndex > 0) {
        showChapter(currentChapterIndex - 1);
    }
}

function speakChapter() {
    const chapter = chapters[currentChapterIndex];
    const text = `Chapter ${chapter.number}. Who: ${chapter.who}. Where: ${chapter.where}. What happened: ${chapter.what}. Confusing: ${chapter.confusing}. ${chapter.hint}`;
    speak(text);
}

function speakIconGuide() {
    const text = 'Icon System. Who: People in the scene. Where: Location. What happened: Main event. Confusing: Questions. Use this every time.';
    speak(text);
}

// Progress
function updateProgress() {
    const total = characters.length + chapters.length;
    const completed = viewedCharacters.size + viewedChapters.size;
    const percentage = (completed / total) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
}

// Text to Speech
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

// Initialize on load
init();