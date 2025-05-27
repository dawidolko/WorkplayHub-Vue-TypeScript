@echo off
setlocal enabledelayedexpansion

:: WorkplayHub Vue TypeScript Project Starter Script
:: Author: Your Name
:: Description: Automated setup and start script for Windows

title WorkplayHub Vue TypeScript Project
color 0A

echo.
echo ==========================================
echo 🚀 Starting WorkplayHub Vue TypeScript Project...
echo ==========================================
echo.

:: Function to check if Node.js is installed
echo [INFO] Checking system requirements...
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] ❌ Node.js is not installed!
    echo [INFO] Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo [SUCCESS] ✅ Node.js found: !NODE_VERSION!
)

:: Function to check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] ❌ npm is not installed!
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo [SUCCESS] ✅ npm found: v!NPM_VERSION!
)

echo.
echo [INFO] Setting up project...

:: Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] 📦 Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] ❌ Failed to install dependencies!
        pause
        exit /b 1
    ) else (
        echo [SUCCESS] ✅ Dependencies installed successfully!
    )
) else (
    echo [SUCCESS] ✅ Dependencies already installed
    echo [INFO] 💡 Run 'npm install' manually if you want to update dependencies
)

echo.
echo ==========================================
echo [INFO] 🔥 Starting development server...
echo [INFO] The application will be available at: http://localhost:5173
echo [INFO] Press Ctrl+C to stop the server
echo ==========================================
echo.

:: Start development server
call npm run dev

:: If we reach here, the server was stopped
echo.
echo [INFO] 👋 Development server stopped. Goodbye!
pause