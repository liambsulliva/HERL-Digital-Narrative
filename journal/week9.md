# Week 9

Current Deployment: https://herl-digital-narrative-6i3ojqa5i-liambsullivas-projects.vercel.app

### New Features!

**Content Transitions Revamped**

- Content loading is delayed to keep the browser from being overwhelmed loading content.
- Content, Modals, Icons have nice fading transitions on hide to give the app a more polished look.

**New Image Loading System (via Svelte Store)**

- Images preload 5 pages before a given page loads, making page transitions way more seamless.
- Images use a flashing grey placeholder if the server responds unusually slow.

**Layout Changes**

- Added more pages so individual milestones + associated images can be fill the screen without making the UI feel clausterphobic.
- Years are printed smaller, inherit the color of their booklet counterpart, but with a border to make them distinct from title text
- Beginning Section + Some Milestones are given line breaks to improve readability
- Beginning Section gets an italicized subtitle to give it some flair - in line with the booklet.

### Upcoming Additions

- REQUEST: “For the text popups, can you please include the title of the section being enlarged as well?”
- REQUEST: Target Resolution is 1440 x 900. If width decreases past 900px, display prompt asking users to rotate their device to landscape
- FEATURE: Bookmarks to quickly navigate to given year (5yr intervals?)
- FEATURE: Flipping to next page at end of book will close book, but flipped to the backside.
- FEATURE: Arrow key Navigation + Escape key to close popups should be taught to the user somehow.
- BUGFIX: Switching pages doesn’t close description modal

### Content Loading

The revamp of content transitions and the new image loading system directly impacts how users interact with and perceive the application's performance. By delaying content loading and introducing smooth fading effects, the application feels more responsive and less jittery as content is less likely to pop in to view.

### Image Preloading

Efficient image handling is pivotal in maintaining the application's visual integrity. Preloading images five pages in advance works into the delayed content load system to give the illusion of an instant load, even if the content is prefetched. The inclusion of flashing grey placeholders serves as a user-friendly indicator of fetching server-side props, which is far better than using vanilla alt tags.

### Layout Changes

All of the layout changes made were done to make the content more readable and more faithful to the style of the original booklet. While I included new flair of my own, like the borders, I wanted to make sure that the colors were produced in-line with the style guide I was given. There are so many pages to flip through, I know, but there just isn't enough space in an embedded window to fit multiple milestones in if one of them includes an image. The upcoming bookmark system will seek to alleviate this, and for the time being you can just hold down the right arrow key to flip to the end.

LS
