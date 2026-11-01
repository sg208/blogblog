// Sample posts so the layout can be seen at full density. Replace with real
// entries (or a data source) when posts exist; `href` stays "#!" until then.
export const posts = [
  {
    slug: 'mobile-first-reading-order',
    title: 'Mobile first is a reading order, not a breakpoint',
    excerpt: 'Start from the narrowest screen and the order of the words falls out of it. The wide layout is the one that has to justify itself.',
    date: '2026-10-24',
    readingMinutes: 6,
  },
  {
    slug: 'what-a-skip-link-teaches',
    title: 'What a skip link teaches about the rest of the page',
    excerpt: 'One hidden link exposes every assumption about focus, landmarks and order. Fixing it tends to fix the page around it.',
    date: '2026-09-30',
    readingMinutes: 4,
  },
  {
    slug: 'sass-import-to-use',
    title: 'Moving a small project from @import to @use',
    excerpt: 'Sass modules make every token come from one place. A short migration log, including the parts that broke.',
    date: '2026-09-02',
    readingMinutes: 5,
  },
  {
    slug: 'a-comfortable-measure',
    title: 'Setting a comfortable measure for long reads',
    excerpt: 'Line length, leading and size are one decision, not three. Notes on picking them together for screens of every width.',
    date: '2026-08-11',
    readingMinutes: 7,
  },
].map((post) => ({ ...post, href: '#!' }))

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export const formatDate = (isoDate) => dateFormat.format(new Date(`${isoDate}T00:00:00Z`))
