/**
 * Payman Chat Widget Configuration
 * This file loads configuration from environment variables
 * 
 * For local development: Load from .env file
 * For production: Set environment variables in your deployment platform
 */

// Environment configuration object
const PaymanConfig = {
    api: {
        baseUrl: '', // Set from environment
        authToken: '', // Set from environment
        headers: {
            'x-yaak-api-key': '', // Set from environment
            'x-paygent-wf-mcp-customer-email': '', // Set from environment
            'x-paygent-wf-mcp-customer-id': '', // Set from environment
            'x-paygent-wf-mcp-provider-token': '', // Set from environment
        },
        streamEndpoint: '/api/workflows/ask/stream',
    },
    workflowName: '', // Set from environment
    workflowVersion: 1, // Set from environment
    stage: 'DEV', // Set from environment
    sessionParams: {
        id: '', // Set from environment
        name: '', // Set from environment
    },
    options: {
        clientTimezone: 'UTC', // Set from environment
    },
    placeholder: 'Type your message...',
    emptyStateText: 'Hi! How can I help you today?',
    hasAskPermission: true,
    autoGenerateSessionId: true,
};

/**
 * Load configuration from environment variables
 * In a real deployment, these would come from your server or build process
 */
function loadConfig() {
    // For browser environments, you can load from window.ENV or other methods
    // For Node.js, you can use process.env
    
    // Check if we're in a browser environment with window.ENV
    if (typeof window !== 'undefined' && window.ENV) {
        PaymanConfig.api.baseUrl = window.ENV.PAYMAN_API_BASE_URL || PaymanConfig.api.baseUrl;
        PaymanConfig.api.authToken = window.ENV.PAYMAN_AUTH_TOKEN || PaymanConfig.api.authToken;
        PaymanConfig.api.headers['x-yaak-api-key'] = window.ENV.PAYMAN_API_KEY || PaymanConfig.api.headers['x-yaak-api-key'];
        PaymanConfig.api.headers['x-paygent-wf-mcp-customer-email'] = window.ENV.PAYMAN_CUSTOMER_EMAIL || PaymanConfig.api.headers['x-paygent-wf-mcp-customer-email'];
        PaymanConfig.api.headers['x-paygent-wf-mcp-customer-id'] = window.ENV.PAYMAN_CUSTOMER_ID || PaymanConfig.api.headers['x-paygent-wf-mcp-customer-id'];
        PaymanConfig.api.headers['x-paygent-wf-mcp-provider-token'] = window.ENV.PAYMAN_PROVIDER_TOKEN || PaymanConfig.api.headers['x-paygent-wf-mcp-provider-token'];
        
        PaymanConfig.workflowName = window.ENV.PAYMAN_WORKFLOW_NAME || PaymanConfig.workflowName;
        PaymanConfig.workflowVersion = parseInt(window.ENV.PAYMAN_WORKFLOW_VERSION, 10);
        PaymanConfig.stage = window.ENV.PAYMAN_STAGE || PaymanConfig.stage;
        
        PaymanConfig.sessionParams.id = window.ENV.PAYMAN_SESSION_ID || PaymanConfig.sessionParams.id;
        PaymanConfig.sessionParams.name = window.ENV.PAYMAN_SESSION_NAME || PaymanConfig.sessionParams.name;
        
        PaymanConfig.options.clientTimezone = window.ENV.PAYMAN_CLIENT_TIMEZONE || PaymanConfig.options.clientTimezone;
    }
    
    return PaymanConfig;
}

// Initialize window.PaymanConfig
if (typeof window !== 'undefined') {
    // Set initial empty config
    window.PaymanConfig = PaymanConfig;
    
    // Reload config when environment is loaded (for local development)
    window.addEventListener('env-loaded', function() {
        window.PaymanConfig = loadConfig();
        console.log('✅ Configuration loaded with environment variables');
    });
    
    // For production (no env-loaded event), load config on page load
    window.addEventListener('load', function() {
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            window.PaymanConfig = loadConfig();
        }
    });
}
