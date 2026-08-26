// CityPulse Master UI Components (Theme, Nav, Loader, Ads)

// --- Theme Management ---
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}
window.toggleTheme = function() {
    let currentTheme = CityStore.getTheme();
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    CityStore.setTheme(newTheme);
    applyTheme(newTheme);
};
document.addEventListener("DOMContentLoaded", () => {
    applyTheme(CityStore.getTheme());
    
    // Inject Loader & Toast elements automatically into body
    if(!document.getElementById('cp-global-loader')) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="cp-global-loader" class="cp-loader-overlay"><div class="cp-spinner"></div></div>
            <div id="cp-global-toast" class="cp-toast">Success!</div>
        `);
    }
});

// --- Global UI Helpers (Loader & Toast) ---
window.showLoader = function() { document.getElementById('cp-global-loader').style.display = 'flex'; };
window.hideLoader = function() { document.getElementById('cp-global-loader').style.display = 'none'; };
window.showToast = function(msg) {
    let toast = document.getElementById('cp-global-toast');
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
};

// --- Custom Web Components ---

// 1. Master Header
class CityHeader extends HTMLElement {
    connectedCallback() {
        const profileURL = CITYPULSE_CONFIG.urls.profile;
        this.innerHTML = `
            <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: var(--header-bg); border: 1px solid var(--card-border); border-radius: 12px; margin-bottom: 15px; backdrop-filter: blur(10px);">
                <div style="display: flex; align-items: center;">
                    <a href="${profileURL}notification.html" style="text-decoration: none; font-size: 18px; background: rgba(150,150,150,0.1); padding: 8px; border-radius: 50%; display: flex; position: relative;">
                        🔔<span style="position: absolute; top: 2px; right: 2px; width: 8px; height: 8px; background: var(--accent-red); border-radius: 50%;"></span>
                    </a>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(150,150,150,0.05); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--card-border);">
                    <a href="${profileURL}location.html" style="display: flex; align-items: center; gap: 4px; font-size: 12px; text-decoration: none;">
                        <span>📍</span> <span style="color: var(--text-main); font-weight: 600;">Location</span>
                    </a>
                    <div style="width: 1px; height: 12px; background: var(--card-border);"></div>
                    <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #f59e0b;">
                        <span>🌤️</span> <span style="font-weight: 600;">32°C</span>
                    </div>
                </div>
            </header>
        `;
    }
}
customElements.define('city-header', CityHeader);

// 2. Master Bottom Navigation
class BottomNav extends HTMLElement {
    connectedCallback() {
        const coreURL = CITYPULSE_CONFIG.urls.core;
        const profileURL = CITYPULSE_CONFIG.urls.profile;
        
        this.innerHTML = `
            <nav style="position: fixed; bottom: 0; left: 0; right: 0; background: var(--nav-bg); backdrop-filter: blur(10px); border-top: 1px solid var(--card-border); display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000;">
                <a href="${coreURL}" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🏠</span>Home
                </a>
                <a href="#" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🧭</span>Explore
                </a>
                <a href="#" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🔍</span>Search
                </a>
                <a href="${coreURL}category.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">📂</span>Category
                </a>
                <a href="${profileURL}profile.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">👤</span>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

// 3. Smart Ad / Offer Banner Space
class CityAdSpace extends HTMLElement {
    connectedCallback() {
        // Checking Master Switch from config.js
        if (!CITYPULSE_CONFIG.features.adsEnabled) {
            this.style.display = 'none'; // Ads OFF? Hide this block instantly.
            return;
        }

        this.innerHTML = `
            <div style="background: linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(16,185,129,0.2) 100%); border: 1px dashed var(--accent-blue); border-radius: 12px; padding: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4 style="font-size: 12px; font-weight: 700; color: var(--text-main); margin:0;">Sponsored Space</h4>
                    <p style="font-size: 10px; color: var(--text-muted); margin: 2px 0 0 0;">Dynamic ads will load here via API.</p>
                </div>
                <span style="font-size: 10px; background: rgba(59,130,246,0.2); color: var(--accent-blue); padding: 4px 8px; border-radius: 6px;">Ad</span>
            </div>
        `;
    }
}
customElements.define('city-ad-space', CityAdSpace);
