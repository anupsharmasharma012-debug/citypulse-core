// CityPulse Core Components - Fixed Theme & Responsive Nav

// Inject Dynamic Theme Variables
const themeStyles = document.createElement('style');
themeStyles.innerHTML = `
    :root {
        --bg-color: #0d1117;
        --card-bg: #161b22;
        --card-border: #222b3d;
        --text-main: #ffffff;
        --text-muted: #94a3b8;
        --nav-bg: rgba(13, 17, 23, 0.95);
        --header-bg: rgba(19, 24, 36, 0.9);
    }
    [data-theme="light"] {
        --bg-color: #f8fafc;
        --card-bg: #ffffff;
        --card-border: #cbd5e1;
        --text-main: #0f172a;
        --text-muted: #475569;
        --nav-bg: rgba(255, 255, 255, 0.95);
        --header-bg: rgba(255, 255, 255, 0.9);
    }
    body {
        background-color: var(--bg-color) !important;
        color: var(--text-main) !important;
        transition: background-color 0.3s, color 0.3s;
    }
    /* Force text colors to follow theme */
    h1, h2, h3, h4, p, span {
        transition: color 0.3s;
    }
`;
document.head.appendChild(themeStyles);

class CityHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: var(--header-bg); border: 1px solid var(--card-border); border-radius: 12px; margin-bottom: 15px; backdrop-filter: blur(10px); transition: background 0.3s, border 0.3s;">
                <div style="display: flex; align-items: center;">
                    <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/notification.html" style="text-decoration: none; font-size: 18px; background: rgba(150,150,150,0.1); padding: 8px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative;">
                        🔔<span style="position: absolute; top: 2px; right: 2px; width: 8px; height: 8px; background: #ef4444; border-radius: 50%;"></span>
                    </a>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(150,150,150,0.05); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--card-border);">
                    <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/location.html" style="display: flex; align-items: center; gap: 4px; font-size: 12px; text-decoration: none;">
                        <span>📍</span> <span style="color: var(--text-main); font-weight: 600;">Bhatpara</span>
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

class BottomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav style="position: fixed; bottom: 0; left: 0; right: 0; background: var(--nav-bg); backdrop-filter: blur(10px); border-top: 1px solid var(--card-border); display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000; transition: background 0.3s, border 0.3s;">
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-core/" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🏠</span>Home
                </a>
                <a href="#" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🧭</span>Explore
                </a>
                <a href="#" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">🔍</span>Search
                </a>
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-core/category.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">📂</span>Category
                </a>
                <a href="https://anupsharmasharma012-debug.github.io/citypulse-profile/profile.html" style="text-decoration: none; color: var(--text-muted); font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 3px;">
                    <span style="font-size: 18px;">👤</span>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

window.toggleTheme = function() {
    let currentTheme = localStorage.getItem('citypulse_theme') || 'dark';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('citypulse_theme', newTheme);
    applyTheme(newTheme);
};

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

document.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem('citypulse_theme') || 'dark';
    applyTheme(savedTheme);
});
