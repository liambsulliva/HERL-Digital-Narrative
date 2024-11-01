# Week 6

Current Deployment: https://herl-digital-narrative-iqcmlj2hd-liambsullivas-projects.vercel.app

### New Features!

- Placed Content centered on the Y-Axis so that it isn't as likely to need to be scrolled.
- Fixed performance issues related to page turning through testing
- Images actually render in the deployment!

### Content Positioning

This was mainly a bug fixing week.

After several weeks of having content that required scrolling (as mentioned in Week 4), I've finally addressed this UX concern by centering all content on the Y-axis. This means that most users won't need to scroll at all to see the full content of each page, which is especially important given that this will be embedded in an iframe.

### Performance Optimization

The performance issues related to page turning that I noted as a bug in Week 5 have been resolved through testing. The fake text texture I added in Week 4 was causing some of these issues, and I've optimized how the page transitions handle larger content loads. The book now flips smoothly regardless of content density, which is crucial for maintaining the skeumorphic design without sacrificing usability.

### Image Rendering

Finally fixed the persistent issue with images not rendering in the deployment that was first noted in Week 4's bug list! This was a particularly frustrating bug since everything worked perfectly in the local environment. The fix involved adjusting how images are handled during the build process, ensuring they're properly bundled and served in the production environment.

LS
