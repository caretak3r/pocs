#!/bin/bash

echo "🚀 Building PoCs website for GitHub Pages..."

# Create build directory
rm -rf build
mkdir -p build

# Copy main HTML files
cp *.html build/ 2>/dev/null || echo "No root HTML files found"

# Copy PoC directories
for dir in */; do
    if [ -d "$dir" ] && [ "$dir" != ".git/" ] && [ "$dir" != "build/" ]; then
        echo "📁 Copying $dir"
        cp -r "$dir" build/
    fi
done

# Ensure sentinel-ui is copied explicitly
if [ -d "sentinel-ui" ]; then
    echo "📁 Copying sentinel-ui directory"
    cp -r sentinel-ui build/
fi

echo "✅ Build completed!"
echo "📋 Build contents:"
ls -la build/

# Optional: Start a local server to test
if command -v python3 &> /dev/null; then
    echo ""
    echo "🌐 Starting local server at http://localhost:8000"
    echo "   Press Ctrl+C to stop"
    cd build
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo ""
    echo "🌐 Starting local server at http://localhost:8000"
    echo "   Press Ctrl+C to stop"
    cd build
    python -m http.server 8000
else
    echo ""
    echo "❌ Python not found. Install Python to run local server."
    echo "   Or use 'npx serve build' if you have Node.js"
fi
