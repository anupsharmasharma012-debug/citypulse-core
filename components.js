// TOPBAR COMPONENT (Updated with Live Location, Weather & Modern Notification Icon)
class CityTopbar extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || '';
        const showHomeElements = this.hasAttribute('home-header'); // Agar home page hai toh location/weather dikhayega
        const isDark = localStorage.getItem('cp_theme') === 'dark';
        
        const bgColor = isDark ? '#1e293b' : '#ffffff';
        const textColor = isDark ? '#f8fafc' : '#0f172a';
        const borderColor = isDark ? '#334155' : '#e2e8f0';

        this.innerHTML = `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid ${borderColor}; position: sticky; top: 0; z-index: 100; transition: background 0.3s;">
                
                <!-- LEFT SIDE: Back button OR Location + Animated Weather -->
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${showHomeElements ? `
                        <div onclick="window.location.href='location.html'" style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 18px;">📍</span>
                            <div>
                                <div style="font-size: 10px; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Location</div>
                                <div style="font-size: 13px; font-weight: 700; line-height: 1.1;">Bhatpara <span style="font-size: 10px;">▼</span></div>
                            </div>
                        </div>
                    ` : `
                        <button onclick="window.history.back()" style="background: transparent; border: none; font-size: 20px; cursor: pointer; color: inherit;">←</button>
                        <span style="font-size: 16px; font-weight: 700;">${title}</span>
                    `}
                </div>

                <!-- RIGHT SIDE: Live Weather Widget (if home) + Modern Notification Icon -->
                <div style="display: flex; align-items: center; gap: 14px;">
                    ${showHomeElements ? `
                        <div style="display: flex; align-items: center; gap: 6px; background: rgba(59,130,246,0.1); padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(59,130,246,0.2);">
                            <span style="font-size: 16px; animation: floatIcon 2s ease-in-out infinite;">⛅</span>
                            <span style="font-size: 12px; font-weight: 700; color: var(--accent-blue);">31°C</span>
                        </div>
                    ` : ''}

                    <!-- Modern Notification Bell with Badge -->
                    <div onclick="window.location.href='notifications-setup.html'" style="position: relative; cursor: pointer; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; border-radius: 50%; background: rgba(150,150,150,0.08); transition: background 0.2s;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <span style="position: absolute; top: 8px; right: 8px; width: 7px; height: 7px; background: #ef4444; border-radius: 50%; border: 1.5px solid ${bgColor};"></span>
                    </div>
                </div>
            </div>
            <style>
                @keyframes floatIcon {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
            </style>
        `;
    }
}
customElements.define('city-topbar', CityTopbar);
