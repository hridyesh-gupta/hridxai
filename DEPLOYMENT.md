# Deployment Guide

This React application can be deployed to various platforms. Here are the configurations and instructions for each:

## 📦 Build Commands

```bash
# Check Development locally
npm run dev

# Production build locally
npm run build

# Production build with type checking and linting (optional)
npm run build:production

# Preview production build locally (optional)
npm run deploy:preview
```

## 🔧 Manual Deployment

If you need to deploy manually:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload/Replace the `dist` folder** to your hosting provider

Even though only the dist folder will play the role in hosting, but it is recommended to upload the entire project to the hosting provider for backup purposes. Which can be done just uploading the file on github as CI/CD pipeline is set which can automatically deploy the code to hosting provider.


## 🌐 Environment Variables

If you need environment variables, create a `.env` file:
```
VITE_API_URL=your_api_url
VITE_APP_NAME=your_app_name
```

## 📝 Notes

- The app uses Vite for building
- All configurations assume the build output is in the `dist` folder
- SPA routing is configured for all platforms
- Node.js 18+ is recommended for building
