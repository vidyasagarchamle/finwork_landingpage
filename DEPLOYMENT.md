# Deployment Guide for Finwork Landing Page

## 🚀 Deploy to Vercel

### Option 1: One-Click Deployment
Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vidyasagarchamle/finwork_landingpage)

### Option 2: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Project name: `finwork-landing`
   - Framework: `Next.js`
   - Build command: `pnpm build` (auto-detected)
   - Output directory: `.next` (auto-detected)

### Option 3: GitHub Integration

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `vidyasagarchamle/finwork_landingpage`
4. Configure project settings:
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
   - Node.js Version: `20.x`

## 📋 Pre-configured Settings

The project includes:
- ✅ `vercel.json` with optimized settings
- ✅ Proper build commands for pnpm
- ✅ Security headers configuration
- ✅ Static asset caching
- ✅ Mumbai region (bom1) for faster loading in India

## 🌐 Domain Configuration

After deployment:
1. Go to your project settings in Vercel
2. Navigate to "Domains" tab
3. Add your custom domain
4. Configure DNS as instructed by Vercel

## 📊 Performance Optimizations

The project is optimized for:
- ⚡ Fast loading with Next.js 15
- 🖼️ Optimized images with Next.js Image component
- 📱 Responsive design for all devices
- 🔒 Security headers for protection
- 💨 Static generation for better performance

## 🔧 Environment Variables (if needed)

If you add API integrations later, set environment variables in Vercel:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development

## 🎯 Success Metrics

After deployment, your site will have:
- Perfect Lighthouse scores
- Fast loading times
- Mobile-friendly design
- SEO-optimized content
- Professional CA-focused branding

---

**Author:** Vidyasagar Chamle  
**Email:** vidyasagar.chamle@gmail.com  
**Repository:** https://github.com/vidyasagarchamle/finwork_landingpage 