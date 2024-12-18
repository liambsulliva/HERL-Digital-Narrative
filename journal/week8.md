# Week 8

Current Deployment: https://herl-digital-narrative-jvfg1dxo2-liambsullivas-projects.vercel.app

### The New Vision

Week 7 was a mental health week. Election Day took a lot out of me, and I was covering a lot of it + its fallout for the student paper. With that said, I'm back, and I have a plan on how I want to continue forward with this project approaching its final stages.

For one, I've determined that trying to make the applet work on multiple screen sizes is not worth it. Since it will be displayed in a fixed iFrame anyways, I will focus on keeping it functional at a single screen size going forward. If the screen is enlarged past this, the content will not expand to fill it. Trying to get responsiveness working is just not feasible for an app of this complexity, and it's a concession that I believe is worth making if it means that users won't have to scroll to see all of the content.

I will be consulting with HERL to determine the final screen size, but for the time being I have settled on 1000 x 750 pixels. This allows the applet to follow a 4:3 aspect ratio, which gives the book enough height to display properly while also being able to follow the landscape orientation that it was initially built for. If the final product needs to be downsized (i.e. for mobile devices), the font size and image size can be strategically downsized at breakpoints to keep everything visible on screen.

With that said, this new goal guides the changes you'll see for this week. Here's what's new.

### New Features!

- Each year now gets its own page. This blows up the book to 30 pages!! This is only possible due to the performance optimizations made in previous weeks. In the future, I plan to create a bookmarking system to make hopping between years a little easier.
- Scrolling is entirely gone. It was unintuitive to use, and a holdover while I was attempting to keep the page count low. Even if it takes longer to navigate from page-to-page, the presentation of the content is much more seamless and fits in better with the visual metaphor of a book.
- There is now a modal pop-up that is generated by clicking a description. This allows the text to be blown up for users that would have trouble seeing the small text, especially on smaller screens.
- Removed the dark mode toggle. Dark mode just doesn't make sense here, considering HERL's lack of dark mode on their main page. It added additional complexity that wasn't worth the development time to manage.
- Cleared the Pitt and Dept. of VA icons from the top of the page upon opening the book to create more space for the content itself. This was a necessary sacrifice to leave more room for the content itself.
- Years listed above are slightly bigger for greater emphasis, readability, and to maintain a more cohesive visual hierarchy from top-to-bottom.

### Known Bugs

- Page content clips out of its container on specific pages.

It's a lot. There's still plenty more to do though, and I will be focussing on polishing up the layout in the last month before the end of semester deployment.

LS
