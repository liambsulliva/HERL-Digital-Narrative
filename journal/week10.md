# Week 10

Current Deployment: https://herl-digital-narrative.vercel.app

### New Features!

**Bookmark Navigation System**

- Added bookmarks at 5-year intervals (1996, 2002, 2006, 2010, 2013, 2021)
- Bookmarks are positioned vertically along the right edge of the book
- Each bookmark displays its corresponding year and is clickable for quick navigation
- Bookmarks work in both closed and open states of the book
- Visual feedback shows the active bookmark for the current page
- Smooth transitions between bookmark states (width, height, position)

### Implementation Details

The bookmark system was implemented through two main components: `Bookmark.svelte` and modifications to `Book.svelte`. The bookmarks are positioned absolutely along the right edge of the book, spaced evenly using a calculated top position based on their index.

When clicked, bookmarks dispatch a custom event that either:

1. Opens the book directly to their target page (if the book is closed)
2. Navigates to their target page (if the book is already open)

The bookmarks are styled to match the book's aesthetic, featuring:

- A dark, tab-like appearance that stands out against the book pages
- Vertical text orientation for better space utilization
- Hover effects for better interactivity feedback
- Active state styling to indicate the current section
- Smooth state transitions:
  - Bookmarks grow larger when book is opened (width: 2.5rem → 3.5rem)
  - Height increases for better visibility (4.5rem → 6rem)
  - Font size scales up for improved readability
  - Position adjusts smoothly when book is flipped

### Performance Considerations

The bookmark system integrates with the existing page preloading system, ensuring that navigating via bookmarks doesn't impact the smooth page transitions we implemented in previous weeks. When a user clicks a bookmark, the content for that page and surrounding pages is preloaded in the background, maintaining a seamless user experience even when jumping multiple pages at once.

### UX Improvements

This feature directly addresses the navigation concerns raised in Week 8's journal entry, where I noted that having many pages (30+) made navigation cumbersome. The bookmarks provide a quick way to jump to major milestones in HERL's timeline without having to flip through multiple pages sequentially.

The decision to use years as bookmark labels rather than page numbers makes the navigation more intuitive, as users are likely to be looking for specific time periods rather than specific page numbers. This aligns with the chronological nature of the content and makes the interface more user-friendly.

LS
