# PoCs Collection

A collection of proof-of-concept projects and technical experiments.

## 🚀 Live Demo

This site is automatically deployed to GitHub Pages. Check out the live demo at:
`https://[username].github.io/[repo-name]`

## 📁 Project Structure

```
├── index.html                 # Main landing page with PoC overview
├── navigation-proxy.html      # Proxy page for navigation back to main
├── build.sh                   # Local build script
├── .github/workflows/deploy.yml # GitHub Actions deployment
├── README.md                  # This file
└── sentinel-ui/               # Sentinel UI PoC
    └── index.html             # Security dashboard
```

## 🛠️ Local Development

### Quick Start

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd pocs
   ```

2. Build and serve locally:
   ```bash
   ./build.sh
   ```
   
   This will start a local server at `http://localhost:8000`

### Manual Build

If you prefer not to use the build script:

```bash
# Create build directory
mkdir -p build

# Copy all files
cp -r *.html sentinel-ui build/

# Start local server (Python 3)
cd build
python3 -m http.server 8000
```

## ➕ Adding New PoCs

To add a new proof-of-concept:

1. Create a new directory for your PoC:
   ```bash
   mkdir new-poc-name
   ```

2. Add your `index.html` file in that directory:
   ```bash
   # new-poc-name/index.html
   ```

3. Update the `pocs` array in the main `index.html`:
   ```javascript
   const pocs = [
     // existing PoCs...
     {
       name: "New PoC Name",
       description: "Brief description of your PoC",
       path: "new-poc-name/",  // or "navigation-proxy.html" if it needs special handling
       tags: ["Tag1", "Tag2"]
     }
   ];
   ```

4. Test locally with `./build.sh`

5. Commit and push - GitHub Actions will automatically deploy!

## 🎨 Features

- **Modern Design**: Clean, responsive interface with gradient backgrounds
- **Easy Navigation**: Simple card-based layout for browsing PoCs
- **GitHub Pages Ready**: Automatic deployment via GitHub Actions
- **Local Development**: Built-in build script for local testing
- **Mobile Responsive**: Works on all device sizes

## 🔧 Technical Stack

- **HTML5**: Modern semantic HTML
- **CSS3**: Responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No dependencies, pure JS
- **GitHub Actions**: Automated deployment pipeline
- **GitHub Pages**: Free hosting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `./build.sh`
5. Submit a pull request

---
