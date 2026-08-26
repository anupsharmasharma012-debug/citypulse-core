// CityPulse Core Components - Header, Bottom Nav & Theme Engine

class CityHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: rgba(19,24,36,0.9); border: 1px solid #222b3d; border-radius: 12px; margin-bottom: 15px; backdrop-filter: blur(10px);">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 20px;">🏙️</span>
                    <span style="font-size: 16px; font-weight: 900; background: linear-gradient(135deg, #3b82f6, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">CityPulse</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <a href="notification.html" style="text-decoration: none; font-size: 18px; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">🔔</a>
                    <a href="profile.html" style="text-decoration: none; font-size: 18px; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👤</a>
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
                <a href="index.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                    <span style="font-size: 20px;">🏠</span>Home
                </a>
                <a href="category.html" style="text-decoration: none; color: #3b82f6; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                    <span style="font-size: 20px;">📂</span>Category
                </a>
                <a href="civic.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                    <span style="font-size: 20px;">🏛️</span>Civic
                </a>
                <a href="profile.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 700; display: flex-direction: column; align-items: center; gap: 4px;">
                    <span style="font-size: 20px;">👤</span>Profile
                </a>
            </nav>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);

