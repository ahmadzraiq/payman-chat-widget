/**
 * Simple .env loader for browser development
 * This script loads environment variables from .env file
 * 
 * NOTE: This is for LOCAL DEVELOPMENT ONLY!
 * In production, use proper environment variable management
 */

(function() {
    // Only load in development (when running locally)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        console.warn('env-loader.js should only be used in local development');
        return;
    }

    // Initialize ENV object
    window.ENV = window.ENV || {};

    // Load .env file
    fetch('.env')
        .then(response => {
            if (!response.ok) {
                throw new Error('.env file not found');
            }
            return response.text();
        })
        .then(text => {
            // Parse .env file
            const lines = text.split('\n');
            lines.forEach(line => {
                // Skip comments and empty lines
                if (line.trim().startsWith('#') || line.trim() === '') {
                    return;
                }
                
                // Parse key=value
                const match = line.match(/^([^=]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2].trim();
                    window.ENV[key] = value;
                }
            });
            
            console.log('✅ Environment variables loaded from .env');
            
            // Dispatch event to notify that env is loaded
            window.dispatchEvent(new Event('env-loaded'));
        })
        .catch(error => {
            console.error('❌ Failed to load .env file:', error);
            console.warn('Make sure .env file exists in the root directory');
        });
})();
