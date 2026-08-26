// CityPulse Master UI Components

function applyTheme(theme) { document.documentElement.setAttribute('data-theme', theme); }
window.toggleTheme = function() {
    let currentTheme = CityStore.getTheme();
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    CityStore.setTheme(newTheme); applyTheme(newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(CityStore.getTheme());
    if(!document.getElementById('cp-global-loader')) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="cp-global-loader" class="cp-loader-overlay"><div class="cp-spinner"></div></div>
            <div id="cp-global-toast" class="cp-toast">Success!</div>
        `);
    }
});

window.showLoader = function() { document.getElementById('cp-global-loader').style.display = 'flex'; };
window.hideLoader = function() { document.getElementById('cp-global-loader').style.display = 'none'; };
window.showToast = function(msg) {
    let toast = document.getElementById('cp-global-toast');
    toast.innerText = msg; toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
};

// 1. Home Page Header
class CityHeader extends HTMLElement {
    connectedCallback() {
        const profileURL = CITYPULSE_CONFIG.urls.profile;
        this.innerHTML = `
            <header style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--header-bg); border-bottom: 1px solid var(--card-border); position: sticky; top: 0; z-index: 1000; backdrop-filter: blur(10px);">
                <div style="font-weight: 800; font-size: 18px; color: var(--accent-blue);">CityPulse <span style="font-size:12px; color:var(--text-muted);">v1.0</span></div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <a href="${profileURL}location.html" style="text-decoration: none; font-size: 12px; background: rgba(150,150,150,0.05); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--card-border); color: var(--text-main);">📍 Bhatpara</a>
                    <a href="${profileURL}notification.html" style="text-decoration: none; font-size: 18px; position: relative;">🔔<span style="position: absolute; top: 0; right: 0; width: 8px; height: 8px; background: var(--accent-red); border-radius: 50%;"></span></a>
                </div>
            </header>
        `;
    }
}
customElements.define('city-header', CityHeader);

// 2. Sub-Page Topbar (BACK BUTTON WALA HEADER)
class CityTopbar extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('title') || 'CityPulse';
        this.innerHTML = `
            <header style="display: flex; align-items: center; padding: 12px 16px; background: var(--header-bg); border-bottom: 1px solid var(--card-border); position: sticky; top: 0; z-index: 1000; backdrop-filter: blur(10px);">
                <button onclick="window.history.back()" style="background: transparent; border: none; color: var(--text-main); font-size: 22px; cursor: pointer; padding: 0 16px 0 0; display: flex; align-items: center;">←</button>
                <h2 style="margin: 0; font-size: 16px; flex: 1; color: var(--text-main);">${title}</h2>
            </header>
        `;
    }
}
customElements.define('city-topbar', CityTopbar);

// 3. Bottom Navigation (Search & Explore Links Fixed)
class BottomNav extends HTMLElement {
    connectedCallback() {
        const coreURL = CITYPULSE_CONFIG.urls.core;
        const profileURL = CITYPULSE_CONFIG.urls.profile;
        this.innerHTML = `
            <nav style="position: fixed; bottom: 0; left: 0; right: 0; background: var(--nav-bg); backdrop-filter: blur(10px); border-top: 1px solid var(--card-border); display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000;">
                <a href="${coreURL}index.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;"><span style="font-size: 18px;">🏠</span>Home</a>
                <a href="${coreURL}explore.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;"><span style="font-size: 18px;">🧭</span>Explore</a>
                <a href="${coreURL}search.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;"><span style="font-size: 18px;">🔍</span>Search</a>
                <a href="${coreURL}category.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;"><span style="font-size: 18px;">📂</span>Category</a>
                <a href="${profileURL}profile.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;"><span style="font-size: 18px;">👤</span>Profile</a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

// 4. Ad Space Component
class CityAdSpace extends HTMLElement {
    connectedCallback() {
        if (!CITYPULSE_CONFIG.features.adsEnabled) { this.style.display = 'none'; return; }
        this.innerHTML = `
            <div style="background: linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(16,185,129,0.1) 100%); border: 1px dashed var(--accent-blue); border-radius: 12px; padding: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4 style="font-size: 12px; font-weight: 700; margin:0;">Sponsored Content</h4>
                    <p style="font-size: 10px; color: var(--text-muted); margin: 2px 0 0 0;">Ad space reserved for local business.</p>
                </div>
                <span style="font-size: 10px; background: rgba(59,130,246,0.2); color: var(--accent-blue); padding: 4px 8px; border-radius: 6px;">Ad</span>
            </div>
        `;
    }
}
customElements.define('city-ad-space', CityAdSpace);
