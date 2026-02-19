# WiseBuy Website

Official website for WiseBuy: AI Shopping Manager

## 📄 Pages

- **index.html** - Homepage with features and how it works
- **support.html** - Contact form for user support
- **invoices.html** - Donation transparency page

## 🚀 Deployment to GitHub Pages

1. Create a new GitHub repository (e.g., `wisebuy-website`)

2. Initialize git and push:
```bash
cd wisebuy-website
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wisebuy-website.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: Deploy from branch
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

4. Your site will be live at:
   `https://YOUR_USERNAME.github.io/wisebuy-website/`

## 📧 Support Form

The support form uses `mailto:` links to open the user's default email client with pre-filled information. When a user submits the form, it will:
- Open their email client
- Pre-fill the recipient: alperenkabadayi0110@gmail.com
- Include their name, email, and message in the body

## 📝 Updating Invoices

To add donation invoices:

1. Edit `invoices.html`
2. Replace the "No Invoices Yet" section with invoice cards:

```html
<div class="invoice-card">
    <div class="invoice-icon">📄</div>
    <h3>Invoice Title</h3>
    <p class="invoice-date">Date: Month Day, Year</p>
    <p class="invoice-amount">Amount: $XXX.XX</p>
    <p class="invoice-description">Description of donation</p>
    <a href="path/to/invoice.pdf" class="btn btn-small">Download PDF</a>
</div>
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Update HTML files directly
- **Email**: Change email address in `support.js` and HTML files

## 📱 About WiseBuy

WiseBuy is an AI-powered shopping manager that helps users make conscious purchasing decisions using the Eisenhower Matrix, reducing unnecessary consumption and environmental impact.

**Tech Stack:**
- React Native + Expo
- Google Gemini 2.5 AI
- Firebase (Auth + Firestore)
- RevenueCat (Subscriptions)

**Contact:** alperenkabadayi0110@gmail.com
