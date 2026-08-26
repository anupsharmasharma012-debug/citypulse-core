// CityPulse Core Components - Fixed Category Routing & Functional Dark Mode

class CityHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: rgba(19,24,36,0.9); border: 1px solid #222b3d; border-radius: 12px; margin-bottom: 15px; backdrop-filter: blur(10px);">
                <!-- Left: Notification -->
                <div style="display: flex; align-items: center;">
                    <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/notification.html" style="text-decoration: none; font-size: 18px; background: rgba(255,255,255,0.05); padding: 8px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative;">
                        🔔
                        <span style="position: absolute; top: 2px; right: 2px; width: 8px; height: 8px; background: #ef4444; border-radius: 50%;"></span>
                    </a>
                </div>

                <!-- Right: Location & Weather -->
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 6px 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                    <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/location.html" style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #94a3b8; text-decoration: none;">
                        <span>📍</span> <span style="color: #fff; font-weight: 600;">Bhatpara</span>
                    </a>
                    <div style="width: 1px; height: 12px; background: #222b3d;"></div>
                    <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #f59e0b;">
                        <span>🌤️</span> <span style="font-weight: 600;">32°C</span>
                    </div>
                </div>
            </header>
        `;
    }
}
customElements.define('city-header', CityHeader);

class BottomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav style="position: fixed; bottom: 0; left: 0; right: 0; background: rgba(13, 17, 23, 0.95); backdrop-filter: blur(10px); border-top: 1px solid #222b3d; display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000;">
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-core/" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🏠</span>Home
                </a>
                <a href="#" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🧭</span>Explore
                </a>
                <a href="#" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🔍</span>Search
                </a>
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-core/category.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">📂</span>Category
                </a>
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/profile.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">👤</span>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

// Global Theme Switcher Helper function for Settings page
window.toggleTheme = function() {
    let currentTheme = localStorage.getItem('citypulse_theme') || 'dark';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('citypulse_theme', newTheme);
    applyTheme(newTheme);
};

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.style.setProperty('--bg-color', '#f8fafc');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-border', '#cbd5e1');
        document.documentElement.style.setProperty('--text-muted', '#64748b');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#0d1117');
        document.documentElement.style.setProperty('--card-bg', '#161b22');
        document.documentElement.style.setProperty('--card-border', '#222b3d');
        document.documentElement.style.setProperty('--text-muted', '#94a3b8');
    }
}

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem('citypulse_theme') || 'dark';
    applyTheme(savedTheme);
});

