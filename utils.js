// CityPulse Utility Helpers (Formatting, Validation, etc.)
const CityUtils = {
    // Format Currency in Indian Rupees (₹)
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    },

    // Truncate long strings
    truncate: (str, n) => {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    },

    // Check if current pincode allows a specific service
    isServiceable: (serviceName) => {
        const currentPin = CityStore.getPincode();
        const zones = CITYPULSE_CONFIG.serviceablePincodes[serviceName];
        if (!zones) return true;
        if (zones.includes('*')) return true;
        return zones.includes(currentPin);
    }
};

