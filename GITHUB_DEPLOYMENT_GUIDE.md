# GitHub Deployment Guide for PoolIQ Website

This guide will walk you through setting up your PoolIQ website on GitHub and deploying it to the web.

## Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" if you don't have an account
3. Choose a username (suggestion: `pooliq-austin` or similar)
4. Verify your email address

## Step 2: Create a New Repository

1. **Click the "+" icon** in the top-right corner of GitHub
2. **Select "New repository"**
3. **Repository settings**:
   - **Repository name**: `pooliq-website` (or your preferred name)
   - **Description**: `Professional pool service website for PoolIQ - Austin, TX`
   - **Visibility**: Choose "Public" (free) or "Private" (if you have a paid plan)
   - **Initialize repository**: Check "Add a README file"
   - **Add .gitignore**: Select "Node" template
   - **Choose a license**: Select "MIT License"
4. **Click "Create repository"**

## Step 3: Upload Your Project Files

You have two options to upload your files:

### Option A: Using GitHub's Web Interface (Easier)

1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop** all your project files EXCEPT:
   - `node_modules/` folder (already excluded by .gitignore)
   - `.replit` file (Replit-specific)
   - `replit.nix` file (Replit-specific)
3. **Commit message**: Type "Initial commit - PoolIQ website"
4. **Click "Commit changes"**

### Option B: Using Git Commands (Advanced)

```bash
# In your Replit terminal or local terminal
git init
git remote add origin https://github.com/YOUR_USERNAME/pooliq-website.git
git add .
git commit -m "Initial commit - PoolIQ website"
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel (Recommended Free Hosting)

Vercel provides free hosting for React applications with automatic deployments:

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up with your GitHub account**
3. **Import your repository**:
   - Click "New Project"
   - Select your `pooliq-website` repository
   - Click "Import"
4. **Configure deployment**:
   - **Framework Preset**: Vite (should auto-detect)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Click "Deploy"**

Your website will be live at `https://your-project-name.vercel.app`

## Step 5: Configure Custom Domain (Optional)

### If you have a domain name:

1. **In Vercel dashboard**, go to your project
2. **Click "Settings" → "Domains"**
3. **Add your domain** (e.g., `pooliq.com`)
4. **Update your domain's DNS settings**:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add an A record pointing to Vercel's IP addresses
5. **Wait for DNS propagation** (can take up to 48 hours)

## Step 6: Set Up Automatic Deployments

Every time you push changes to GitHub, Vercel will automatically:
1. Rebuild your website
2. Deploy the changes
3. Update your live site

## Step 7: Customize Your Website

### Important customizations to make:

1. **Update contact information**:
   - Replace `512-XXX-XXXX` with your actual phone number
   - Replace `info@pooliq.com` with your business email
   - Update business address and service areas

2. **Modify service pricing**:
   - Update pricing in `client/src/pages/quote.tsx`
   - Adjust service descriptions in `client/src/pages/services.tsx`

3. **Update business hours**:
   - Modify hours in `client/src/pages/contact.tsx`
   - Update footer information in `client/src/components/layout/footer.tsx`

4. **Add your business information**:
   - Update schema markup in `client/index.html`
   - Modify meta descriptions for SEO

## Step 8: Set Up Form Handling (Database Integration)

Currently, forms save to memory (lost on restart). For production:

### Option A: Use Vercel Forms (Simple)
1. Add `netlify="true"` to your form elements
2. Forms will be sent to your Vercel dashboard

### Option B: Add Database Integration
1. Set up a PostgreSQL database (Supabase, PlanetScale, etc.)
2. Update the storage system in `server/storage.ts`
3. Add database connection environment variables

## Step 9: SEO and Analytics Setup

### Google Analytics (Optional)
1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking script to `client/index.html`

### Google Search Console
1. Submit your website to Google Search Console
2. Submit your sitemap (if you create one)
3. Monitor your search performance

## Step 10: Monitor and Maintain

### Regular maintenance tasks:
- **Update dependencies**: Run `npm update` monthly
- **Monitor forms**: Check form submissions regularly
- **Update content**: Keep service information current
- **Backup**: GitHub automatically backs up your code

## Troubleshooting

### Common Issues:

1. **Build fails on deployment**:
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Fix any TypeScript errors

2. **Forms not working**:
   - Forms currently use in-memory storage
   - For production, integrate with a database or form service

3. **Images not loading**:
   - Ensure all images are properly imported
   - Check image URLs in production

4. **CSS not applying**:
   - Verify Tailwind CSS is building correctly
   - Check for any CSS import issues

## Support

If you run into issues:
1. Check the GitHub Issues tab in your repository
2. Review Vercel's deployment logs
3. Test your website locally first (`npm run dev`)

## Next Steps After Deployment

1. **Test all functionality** on the live site
2. **Submit to Google** for search indexing
3. **Set up business listings** (Google My Business, Yelp, etc.)
4. **Create social media accounts** linking to your website
5. **Start collecting customer reviews** and testimonials

Your PoolIQ website is now ready to attract Austin area pool service customers!