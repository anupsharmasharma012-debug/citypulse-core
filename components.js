// TOPBAR COMPONENT
class CityTopbar extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'CityPulse';
        const isDark = localStorage.getItem('cp_theme') === 'dark';
        
        this.innerHTML = `
            <div style="background: ${isDark ? '#1e293b' : '#ffffff'}; color: ${isDark ? '#f8fafc' : '#0f172a'}; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; position: sticky; top: 0; z-index: 100; transition: background 0.3s;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <button onclick="window.history.back()" style="background: transparent; border: none; font-size: 20px; cursor: pointer; color: inherit;">←</button>
                    <span style="font-size: 16px; font-weight: 700;">${title}</span>
                </div>
            </div>
        `;
    }
}
customElements.define('city-topbar', CityTopbar);

// BOTTOM NAV COMPONENT
class BottomNav extends HTMLElement {
    connectedCallback() {
        const isDark = localStorage.getItem('cp_theme') === 'dark';
        const currentPath = window.location.pathname;

        this.innerHTML = `
            <nav style="position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; background: ${isDark ? '#1e293b' : '#ffffff'}; border-top: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000; transition: background 0.3s;">
                <a href="index.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('index') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🏠</div>Home
                </a>
                <a href="explore.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('explore') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🧭</div>Explore
                </a>
                <a href="search.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('search') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🔍</div>Search
                </a>
                <a href="category.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('category') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">📂</div>Category
                </a>
                <a href="profile.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('profile') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">👤</div>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);
