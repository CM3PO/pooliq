# PoolIQ - Premier Pool Services Website

A comprehensive pool service website for PoolIQ, providing professional pool cleaning, repair, construction, and maintenance services throughout Austin, Texas and surrounding areas.

##  Features

- **Modern Responsive Design**: Mobile-first design with pool-themed blue color palette
- **Service Showcase**: Complete pages for all pool services (cleaning, repair, construction, remodeling, leak detection)
- **Customer Forms**: Contact and quote request forms with validation
- **Local SEO Optimized**: Targeted content for Austin area pool service searches
- **Professional Layout**: Clean, trustworthy design that converts visitors to customers
- **Real Customer Testimonials**: Social proof from satisfied Austin area customers

##  Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom pool color theme
- **Shadcn/ui** component library
- **Wouter** for lightweight routing
- **React Hook Form** with Zod validation
- **TanStack Query** for API state management

### Backend
- **Express.js** server with TypeScript
- **RESTful API** endpoints
- **Zod** schema validation
- **In-memory storage** (ready for database integration)

##  Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pooliq-website.git
   cd pooliq-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5000
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

##  Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, Services, Contact, Quote)
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions and configurations
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   └── storage.ts         # Data storage interface
├── shared/                # Shared types and schemas
│   └── schema.ts          # Zod schemas for data validation
└── public/                # Static assets
```

##  Customization

### Colors and Branding
The website uses a pool-themed color scheme defined in `tailwind.config.ts`:
- **Pool Blue**: Primary brand color for headers and CTAs
- **Pool Accent**: Yellow accent color for buttons and highlights
- **Pool Gray**: Light background color for sections

To customize colors, update the color variables in:
- `tailwind.config.ts` - Tailwind color definitions
- `client/src/index.css` - CSS custom properties

### Content Updates
Key areas to customize for your business:

1. **Contact Information**: Update phone numbers and email addresses
   - Search for `512-XXX-XXXX` and replace with your phone number
   - Update `info@pooliq.com` with your business email

2. **Service Areas**: Modify service locations in components
   - `client/src/components/sections/service-areas.tsx`
   - Update cities and areas you serve

3. **Business Information**: Update company details
   - `client/index.html` - Meta tags and schema markup
   - `client/src/components/layout/footer.tsx` - Business hours and contact info

4. **Services and Pricing**: Modify service offerings
   - `client/src/pages/services.tsx` - Service descriptions and pricing
   - `client/src/components/sections/services.tsx` - Homepage service overview

##  Contact Forms

The website includes two main forms:

### Contact Form (`/contact`)
- General inquiries and service requests
- Validation with Zod schemas
- Real-time form validation
- Success/error toast notifications

### Quote Form (`/quote`)
- Detailed quote requests for specific services
- Service type selection
- Terms and conditions acceptance
- Custom pricing information

Both forms save submissions to the in-memory storage system, which can be easily upgraded to a database when needed.

##  SEO Features

### Local SEO Optimization
- **Schema Markup**: Local business schema for search engines
- **Meta Tags**: Optimized title and description tags
- **Service Area Pages**: Targeted content for Austin metro areas
- **Keywords**: Local pool service keywords throughout content

### Technical SEO
- **Fast Loading**: Optimized with Vite and modern build tools
- **Mobile Responsive**: Mobile-first design approach
- **Clean URLs**: SEO-friendly routing with Wouter
- **Semantic HTML**: Proper heading structure and accessibility

##  Deployment

### Replit Deployment (Recommended)
This project is optimized for Replit deployment:
1. Fork or import this repository to Replit
2. The project will automatically install dependencies
3. Click "Run" to start the development server
4. Use Replit's deployment feature for production hosting

### Manual Deployment
For other hosting providers:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the built files**
   - Upload the `dist` folder to your web host
   - Configure your server to serve the Express.js backend
   - Set up environment variables if needed

### Environment Variables
For production deployment, you may want to set:
- `NODE_ENV=production`
- Database connection strings (when upgrading from in-memory storage)
- Email service credentials (for form submissions)

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Support

For questions about this website template or customization services:
- Create an issue on GitHub
- Contact the development team

---

**Built with Love for Austin pool service professionals**
