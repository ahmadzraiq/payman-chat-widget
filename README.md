# Payman Chat Widget Demo

This repository contains demo implementations of the Payman Chat Widget with environment-based configuration for security.

## 🔒 Security First

All sensitive data (API keys, tokens, etc.) has been extracted into environment variables and is **never** committed to version control.

## 📁 Project Structure

```
chat/
├── .env                    # Environment variables (NEVER commit!)
├── .env.example           # Example environment template
├── .gitignore            # Git ignore rules
├── config.js             # Configuration loader
├── env-loader.js         # Development environment loader
├── index.html            # Custom HTML Mode demo
├── floating.html         # Floating Mode demo
├── floating-customized.html  # Customized Floating Mode demo
├── dist/                 # Widget distribution files
└── widget-dist/          # Alternative widget path
```

## 🚀 Quick Start

### 1. Set Up Environment Variables

Copy the example environment file and fill in your actual values:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
PAYMAN_API_BASE_URL=https://your-api.domain.com
PAYMAN_AUTH_TOKEN=your-actual-token
PAYMAN_API_KEY=your-actual-api-key
# ... etc
```

### 2. Run Locally

You need a local web server to run the demos (due to CORS and file loading):

```bash
# Option 1: Using Python
python -m http.server 8000

# Option 2: Using Node.js
npx http-server

# Option 3: Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000/index.html`

### 3. View the Demos

- **Custom HTML Mode**: `index.html` - Full control over UI/UX
- **Floating Mode**: `floating.html` - Easiest setup with auto-generated button
- **Customized Floating**: `floating-customized.html` - All customization options

## 🌐 Production Deployment

### Option 1: Static Hosting (Netlify, Vercel, etc.)

1. Set environment variables in your hosting platform's dashboard
2. Update `config.js` to read from the platform's environment injection method
3. Deploy your site

### Option 2: Server-Side Rendering

1. Render the configuration server-side
2. Inject it into the HTML before serving
3. Never expose sensitive values to the client

### Option 3: API Proxy

1. Create a backend API that handles authentication
2. Your frontend calls your API instead of the chat API directly
3. Your backend adds the auth tokens

## 🔐 Environment Variables

Required environment variables (see `.env.example` for full list):

- `PAYMAN_API_BASE_URL` - API base URL
- `PAYMAN_AUTH_TOKEN` - Authentication token
- `PAYMAN_API_KEY` - API key
- `PAYMAN_WORKFLOW_NAME` - Workflow name
- `PAYMAN_WORKFLOW_VERSION` - Workflow version
- `PAYMAN_SESSION_ID` - Session identifier
- Additional customer/session parameters

## ⚠️ Security Notes

1. **Never commit `.env`** - It's in `.gitignore` for a reason
2. **Rotate tokens regularly** - Especially if accidentally exposed
3. **Use different keys** for development vs. production
4. **Consider a backend proxy** for production to hide API credentials
5. **Review commits** before pushing to ensure no secrets leaked

## 📦 CDN Files

The widget is also available via CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ahmadzraiq/payman-chat-widget@main/widget-dist/payman-ask-sdk.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/ahmadzraiq/payman-chat-widget@main/widget-dist/payman-chat-widget.js"></script>
```

## 🛠️ Customization

See the demo files for examples of different integration modes and customization options:

- **Button position**: top-left, top-right, bottom-left, bottom-right
- **Button size**: sm, md, lg
- **Colors**: Custom button and header colors
- **Text**: Custom titles, subtitles, placeholders
- **Behavior**: Auto-open, notification badges, etc.

## 📝 License

MIT
