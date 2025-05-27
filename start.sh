#!/bin/bash

# Description: Automated setup and start script for Linux/Mac

echo "🚀 Starting WorkplayHub Vue TypeScript Project..."
echo "================================================="

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed!${NC}"
        echo -e "${YELLOW}Please install Node.js from https://nodejs.org/${NC}"
        exit 1
    else
        NODE_VERSION=$(node --version)
        echo -e "${GREEN}✅ Node.js found: $NODE_VERSION${NC}"
    fi
}

# Function to check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed!${NC}"
        exit 1
    else
        NPM_VERSION=$(npm --version)
        echo -e "${GREEN}✅ npm found: v$NPM_VERSION${NC}"
    fi
}

# Function to install dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    if npm install; then
        echo -e "${GREEN}✅ Dependencies installed successfully!${NC}"
    else
        echo -e "${RED}❌ Failed to install dependencies!${NC}"
        exit 1
    fi
}

# Function to start development server
start_dev_server() {
    echo -e "${BLUE}🔥 Starting development server...${NC}"
    echo -e "${YELLOW}The application will be available at: http://localhost:5173${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
    echo "================================================="
    npm run dev
}

# Main execution
main() {
    echo -e "${BLUE}Checking system requirements...${NC}"
    check_node
    check_npm
    
    echo ""
    echo -e "${BLUE}Setting up project...${NC}"
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        install_dependencies
    else
        echo -e "${GREEN}✅ Dependencies already installed${NC}"
        echo -e "${YELLOW}💡 Run 'npm install' manually if you want to update dependencies${NC}"
    fi
    
    echo ""
    start_dev_server
}

# Handle Ctrl+C gracefully
trap 'echo -e "\n${YELLOW}👋 Stopping development server... Goodbye!${NC}"; exit 0' SIGINT

# Run main function
main