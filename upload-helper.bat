@echo off
echo ========================================
echo   HridxAI - Hostinger Upload Helper
echo ========================================
echo.

echo Checking if dist folder exists...
if not exist "dist" (
    echo ERROR: dist folder not found!
    echo Please run: npm run build:hostinger
    pause
    exit /b 1
)

echo ✅ dist folder found
echo.

echo Files ready for upload to Hostinger:
echo.
echo Required files:
echo   - composer.json
echo   - index.php  
echo   - .htaccess
echo   - dist/ (entire folder)
echo.

echo Upload these files to your Hostinger public_html folder
echo.
echo After upload, your public_html should contain:
echo   public_html/
echo   ├── composer.json
echo   ├── index.php
echo   ├── .htaccess
echo   └── dist/
echo       ├── index.html
echo       └── assets/
echo           ├── index-1wFBJCDP.js
echo           └── index-xR1LCouR.css
echo.

echo ========================================
echo   Upload complete? Visit your website!
echo ========================================
pause
