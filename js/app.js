// SuperSonic - Main Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize app
    initApp();
});

function initApp() {
    // Theme management
    initTheme();
    
    // Navigation
    initNavigation();
    
    // Carousel
    initCarousel();
    
    // Search
    initSearch();
    
    // Load content
    loadHomeContent();
    
    // Mobile menu
    initMobileMenu();
}

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('sonicTheme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('sonicTheme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Navigation
function initNavigation() {
    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
    // Scroll effect on header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
        }
    });
}

// Carousel
function initCarousel() {
    const carousel = document.getElementById('featuredCarousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    if (track && prevBtn && nextBtn) {
        const scrollAmount = 320;
        
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
}

// Search
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const modalSearchInput = document.getElementById('modalSearchInput');
    const modalClose = searchModal?.querySelector('.modal-close');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Open search modal
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            openSearchModal();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            openSearchModal();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                openSearchModal();
                if (modalSearchInput) {
                    modalSearchInput.value = searchInput.value;
                    performSearch(searchInput.value);
                }
            }
        });
    }
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeSearchModal);
    }
    
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearchModal();
            }
        });
    }
    
    // Modal search
    if (modalSearchInput) {
        modalSearchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    
    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            performSearch(modalSearchInput?.value || '', btn.dataset.filter);
        });
    });
    
    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchModal();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
    });
}

function openSearchModal() {
    const searchModal = document.getElementById('searchModal');
    const modalSearchInput = document.getElementById('modalSearchInput');
    
    if (searchModal) {
        searchModal.classList.add('active');
        if (modalSearchInput) {
            modalSearchInput.focus();
        }
    }
}

function closeSearchModal() {
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
        searchModal.classList.remove('active');
    }
}

function performSearch(query, filter = 'all') {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer || !query.trim()) {
        if (resultsContainer) resultsContainer.innerHTML = '';
        return;
    }
    
    const results = [];
    const searchTerm = query.toLowerCase();
    
    // Search movies
    if (filter === 'all' || filter === 'movies') {
        sonicData.movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'movie',
                    title: movie.title,
                    subtitle: `${movie.year} • Movie`,
                    image: movie.poster,
                    url: `pages/watch.html?id=${movie.id}`
                });
            }
        });
    }
    
    // Search series
    if (filter === 'all' || filter === 'series') {
        sonicData.series.forEach(show => {
            if (show.title.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'series',
                    title: show.title,
                    subtitle: `${show.year} • TV Series`,
                    image: show.poster,
                    url: `pages/watch.html?id=${show.id}&type=series`
                });
            }
        });
    }
    
    // Search games
    if (filter === 'all' || filter === 'games') {
        sonicData.games.forEach(game => {
            if (game.title.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'game',
                    title: game.title,
                    subtitle: `${game.year} • ${game.platform}`,
                    image: game.poster,
                    url: `pages/play.html?id=${game.id}`
                });
            }
        });
    }
    
    // Search comics
    if (filter === 'all' || filter === 'comics') {
        sonicData.comics.forEach(comic => {
            if (comic.title.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'comic',
                    title: comic.title,
                    subtitle: `${comic.year} • ${comic.publisher}`,
                    image: comic.cover,
                    url: `pages/read.html?id=${comic.id}`
                });
            }
        });
    }
    
    // Render results
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No results found</p>';
    } else {
        resultsContainer.innerHTML = results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <img src="${result.image}" alt="${result.title}" onerror="this.src='https://via.placeholder.com/80x100?text=No+Image'">
                <div class="search-result-info">
                    <h4>${result.title}</h4>
                    <p>${result.subtitle}</p>
                    <span class="result-type">${result.type}</span>
                </div>
            </a>
        `).join('');
    }
}

// Load Home Content
function loadHomeContent() {
    loadMovies();
    loadGames();
    loadSeries();
}

function loadMovies() {
    const container = document.getElementById('moviesGrid');
    if (!container) return;
    
    const movies = sonicData.movies.slice(0, 6);
    container.innerHTML = movies.map(movie => createContentCard(movie, 'movie')).join('');
}

function loadGames() {
    const container = document.getElementById('gamesGrid');
    if (!container) return;
    
    const games = sonicData.games.slice(0, 6);
    container.innerHTML = games.map(game => createContentCard(game, 'game')).join('');
}

function loadSeries() {
    const container = document.getElementById('seriesGrid');
    if (!container) return;
    
    const series = sonicData.series.slice(0, 6);
    container.innerHTML = series.map(show => createContentCard(show, 'series')).join('');
}

function createContentCard(item, type) {
    const isGame = type === 'game';
    const isSeries = type === 'series';
    const link = isGame ? `pages/play.html?id=${item.id}` : `pages/watch.html?id=${item.id}${isSeries ? '&type=series' : ''}`;
    const image = item.poster || item.cover;
    const year = item.year;
    const badge = item.isNew ? '<span class="type-badge">NEW</span>' : '';
    
    return `
        <a href="${link}" class="content-card fade-in">
            <div class="card-image">
                ${badge}
                <img src="${image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/200x280?text=No+Image'">
                <div class="play-overlay">
                    <div class="play-btn">
                        <i class="fas fa-${isGame ? 'gamepad' : 'play'}"></i>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <div class="meta">
                    <span>${year}</span>
                    ${item.rating ? `<span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>` : ''}
                </div>
            </div>
        </a>
    `;
}

// Mobile Menu
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
            
            if (mainNav.classList.contains('mobile-open')) {
                mainNav.style.display = 'block';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.right = '0';
                mainNav.style.background = 'var(--bg-card)';
                mainNav.style.padding = '20px';
                mainNav.style.borderTop = '1px solid var(--border-color)';
                
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style.flexDirection = 'column';
                    ul.style.gap = '10px';
                }
            } else {
                mainNav.style.display = '';
                mainNav.style.position = '';
                mainNav.style.top = '';
                mainNav.style.left = '';
                mainNav.style.right = '';
                mainNav.style.background = '';
                mainNav.style.padding = '';
                mainNav.style.borderTop = '';
                
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style.flexDirection = '';
                    ul.style.gap = '';
                }
            }
        });
    }
}

// Utility Functions
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

// User Profile Management (LocalStorage)
const userProfile = {
    get: function() {
        return JSON.parse(localStorage.getItem('sonicUserProfile')) || {
            username: 'Sonic Fan',
            avatar: 'https://static.wikia.nocookie.net/sonic/images/b/b1/TSR_Sonic.png',
            favorites: [],
            watchHistory: [],
            playHistory: []
        };
    },
    
    save: function(profile) {
        localStorage.setItem('sonicUserProfile', JSON.stringify(profile));
    },
    
    addFavorite: function(itemId, type) {
        const profile = this.get();
        const favorite = { id: itemId, type: type, addedAt: new Date().toISOString() };
        
        if (!profile.favorites.find(f => f.id === itemId)) {
            profile.favorites.push(favorite);
            this.save(profile);
        }
    },
    
    removeFavorite: function(itemId) {
        const profile = this.get();
        profile.favorites = profile.favorites.filter(f => f.id !== itemId);
        this.save(profile);
    },
    
    addToHistory: function(itemId, type, progress = 0) {
        const profile = this.get();
        const historyKey = type === 'game' ? 'playHistory' : 'watchHistory';
        const historyItem = {
            id: itemId,
            type: type,
            progress: progress,
            lastWatched: new Date().toISOString()
        };
        
        // Remove existing entry
        profile[historyKey] = profile[historyKey].filter(h => h.id !== itemId);
        // Add to front
        profile[historyKey].unshift(historyItem);
        // Keep only last 50
        profile[historyKey] = profile[historyKey].slice(0, 50);
        
        this.save(profile);
    }
};

// Export functions for other pages
window.sonicApp = {
    getUrlParam,
    formatDuration,
    userProfile,
    createContentCard,
    performSearch
};
