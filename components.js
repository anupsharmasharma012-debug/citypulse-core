// Cross-Repo Base URLs (Navigation hamesha safe rahegi)
const CORE_URL = 'https://anupsharmasharma012-debug.github.io/citypulse-core';
const PROFILE_URL = 'https://anupsharmasharma012-debug.github.io/citypulse-profile';

// TOPBAR COMPONENT
class CityTopbar extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'CityPulse';
        const showHomeElements = this.hasAttribute('home-header');
        const isDark = localStorage.getItem('cp_theme') === 'dark';
        
        // Default Clean Theme for other pages
        let bgColor = isDark ? '#1e293b' : '#ffffff';
        let textColor = isDark ? '#f8fafc' : '#0f172a';
        let borderColor = isDark ? '#334155' : '#e2e8f0';

        // 🎨 Premium Colored Theme specifically for HOME PAGE
        if (showHomeElements) {
            bgColor = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'; // Premium Blue Gradient
            textColor = '#ffffff'; // White text
            borderColor = 'transparent'; 
        }

        this.innerHTML = `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid ${borderColor}; position: sticky; top: 0; z-index: 100; box-shadow: ${showHomeElements ? '0 4px 15px rgba(37,99,235,0.2)' : 'none'};">
                
                ${showHomeElements ? `
                    <!-- 1. LEFT: Brand Name -->
                    <div style="font-weight: 900; font-size: 19px; letter-spacing: -0.5px; display: flex; align-items: center;">
                        CityPulse
                    </div>
                    
                    <!-- 2. MIDDLE: Location Pill -->
                    <div onclick="window.location.href='${PROFILE_URL}/location.html'" style="cursor: pointer; display: flex; align-items: center; gap: 4px; background: rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; backdrop-filter: blur(4px);">
                        <span style="font-size: 14px;">📍</span>
                        <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Bhatpara <span style="font-size: 9px; opacity: 0.8;">▼</span></div>
                    </div>

                    <!-- 3. RIGHT: Notification Bell -->
                    <div onclick="window.location.href='${PROFILE_URL}/notifications-setup.html'" style="position: relative; cursor: pointer; width: 34px; height: 34px; display: flex; justify-content: center; align-items: center; border-radius: 50%; background: rgba(255, 255, 255, 0.2);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <span style="position: absolute; top: 8px; right: 8px; width: 7px; height: 7px; background: #ef4444; border-radius: 50%; border: 1.5px solid #1d4ed8;"></span>
                    </div>
                ` : `
                    <!-- OTHER PAGES HEADER (Back Button + Title) -->
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button onclick="window.history.back()" style="background: transparent; border: none; font-size: 20px; cursor: pointer; color: inherit;">←</button>
                        <span style="font-size: 16px; font-weight: 700;">${title}</span>
                    </div>
                    <div style="width: 24px;"></div> <!-- Spacer -->
                `}
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
            <nav style="position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; background: ${isDark ? '#1e293b' : '#ffffff'}; border-top: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; display: flex; justify-content: space-around; padding: 10px 0; z-index: 1000;">
                <a href="${CORE_URL}/index.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('index') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🏠</div>Home
                </a>
                <a href="${CORE_URL}/explore.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('explore') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🧭</div>Explore
                </a>
                <a href="${CORE_URL}/search.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('search') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">🔍</div>Search
                </a>
                <a href="${CORE_URL}/category.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('category') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">📂</div>Category
                </a>
                <a href="${PROFILE_URL}/profile.html" style="text-decoration: none; text-align: center; color: ${currentPath.includes('profile') ? '#2563eb' : (isDark ? '#94a3b8' : '#64748b')}; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 20px;">👤</div>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

// Ad Space Component Helper
class CityAdSpace extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div></div>`;
    }
}
customElements.define('city-ad-space', CityAdSpace);
