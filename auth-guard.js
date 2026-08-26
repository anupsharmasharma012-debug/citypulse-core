// CityPulse Security & Role-Based Access Control (RBAC) Guard
const AuthGuard = {
    // Kisi bhi secure page (jaise Civic, Settings) ko load hote hi yeh chalega
    protectPage: () => {
        const user = CityStore.getUser(); // store.js se user ka data layega

        // 1. Check: Kya user logged in hai?
        if (!user.loggedIn) {
            console.warn("AuthGuard: Unauthorized access blocked. Redirecting to login.");
            window.location.href = CITYPULSE_CONFIG.urls.profile + "login.html";
            return false;
        }

        // 2. Check: Kya User ki ID Suspended ya Banned hai?
        if (user.status === 'suspended' || user.status === 'banned') {
            alert("Security Alert: Your account has been suspended due to policy violations. Contact CityPulse Support.");
            CityStore.clearUser(); // Force logout so they can't bypass
            window.location.href = CITYPULSE_CONFIG.urls.profile + "login.html";
            return false;
        }

        return true; // Access Granted! ✅
    },

    // Check: Agar future mein koi feature sirf Premium/VIP users ke liye ho
    requirePremium: () => {
        const user = CityStore.getUser();
        if (user.tier !== 'premium' && CITYPULSE_CONFIG.features.subscriptionsEnabled) {
            alert("This feature requires a CityPulse Premium Subscription.");
            // Yahan future mein subscription page ka link aayega
            return false;
        }
        return true;
    }
};

