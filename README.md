# EON Resonance Lab

A premium bilingual (English / Simplified Chinese) website for a creative music studio dedicated to storytelling through sound.

**Website:** https://eonresonance.lab

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Project Structure

```
src/
├── app/              # Next.js pages (Home, About, Portfolio, Services, Projects, Contact)
├── components/       # UI, layout, page-specific components
├── config/           # Branding & site configuration (easy to rebrand)
├── content/          # All translatable content & data (easy to update)
│   ├── i18n/         # English & Chinese translations
│   ├── team.ts       # Team members
│   ├── portfolio.ts  # Portfolio projects
│   ├── services.ts   # Service offerings
│   └── projects.ts   # Studio project pipeline
├── context/          # Language context (instant switching + persistence)
└── types/            # Shared TypeScript types
```

## Customization

### Rebrand the Studio

Edit `src/config/branding.ts` to change:
- Studio name
- Tagline
- Contact email & location
- Social media links
- Demo reel YouTube ID

### Update Content

- **Translations**: `src/content/i18n/en.ts` and `zh.ts`
- **Team**: `src/content/team.ts`
- **Portfolio**: `src/content/portfolio.ts`
- **Services**: `src/content/services.ts`
- **Projects**: `src/content/projects.ts`

### Future Expansion

The architecture supports future evolution into:
- Multi-composer collective (`collectiveConfig` in `team.ts`)
- Collaboration marketplace (`collaborationOpportunities` in `projects.ts`)
- Individual composer profiles (`profileSlug` on team members)

## Build

```bash
npm run build
npm start
```

## License

Private — EON Resonance Lab
