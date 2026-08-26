// CityPulse Local State Manager (Shared Storage Wrapper)
const CityStore = {
    // Pincode Management (Geo-Fencing helper)
    getPincode: () => localStorage.getItem('cp_pincode') || '743123',
    setPincode: (pin) => localStorage.setItem('cp_pincode', pin),

    // User Session & Role/Tier Management
    getUser: () => {
        const user = localStorage.getItem('cp_user');
        return user ? JSON.parse(user) : { 
            loggedIn: false, 
            role: 'customer',   // 'customer', 'vendor', 'admin'
            tier: 'free',       // 'free', 'premium'
            status: 'active'    // 'active', 'suspended', 'banned'
        };
    },
    setUser: (userData) => localStorage.setItem('cp_user', JSON.stringify(userData)),
    
    // Clear Session (Logout or Account Suspension)
    clearUser: () => localStorage.removeItem('cp_user'),

    // Theme Preference
    getTheme: () => localStorage.getItem('citypulse_theme') || 'dark',
    setTheme: (theme) => localStorage.setItem('citypulse_theme', theme)
};

