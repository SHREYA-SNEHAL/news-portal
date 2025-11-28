```markdown
# News / Media Front Page (LiveHindustan-style)

Next.js 14 + TailwindCSS + TypeScript demo project that replicates a front-page news portal.

Features:
- Responsive homepage with navbar, featured headline, categories, news cards and footer
- Article detail pages with author, date, content and related news
- Mock data located in /data/news.json
- Uses Next.js App Router equivalents of static generation (generateStaticParams / server fetch)
- Image optimization via next/image
- TailwindCSS styling
- Dark mode toggle (client-side)
- SEO metadata and JSON-LD structured data

Run:
1. npm install
2. npm run dev
3. Open http://localhost:3000

Notes:
- In the Next.js App Router (app/), static generation is done using `generateStaticParams` (equivalent to getStaticPaths)
  and server static fetch (equivalent to getStaticProps). The code explains this in comments.
```