# Winnie Landing Page

베트남 로컬 회원권/멤버십 마켓플레이스 앱 **Winnie(위니)**의 랜딩 페이지입니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: shadcn/ui
- **i18n**: next-intl (ko, vi, en)
- **Font**: Montserrat (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/
│   ├── [locale]/        # Locale-based routing
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/          # Header, Footer, etc.
│   ├── sections/        # Landing page sections
│   └── ui/              # shadcn/ui components
├── i18n/                # i18n configuration
├── lib/                 # Utilities
└── messages/            # Translation files (ko, vi, en)
```

## Supported Languages

- Korean (ko) - Default
- Vietnamese (vi)
- English (en)

## Deploy

Optimized for deployment on [Vercel](https://vercel.com).

## Links

- Landing Page: https://mywinnie.com
- Business Portal: https://winnievendor.com
- Yellow Pages: https://yellow.mywinnie.com
