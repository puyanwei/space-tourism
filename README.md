# Space Tourism

This is a frontend mentor [challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) exercise to build a website for Space Travel.

Website URL - https://space-tourism-umm9.vercel.app/

Storybook UI Component library - https://645f6cf043b9eed632121c8d-xkrxhxavvy.chromatic.com/

### Tech

- Next.js and React with Typescript
- Tailwind for styling
- Storybook for component library
- Deployment of Storybook with Chromatic
- Deployed with Vercel

### Issues

##### Using Next 13 App folder (beta)

- RootLayout (`Layout.tsx` on the root of app) is the suggested place to load fonts (in their new way) which is done on the server. But since I need the Navbar on all pages, this needs to be added here too so there is conflict of having a server and client loaded component not being compatible. This needs to be done client side because of the `activeLink` logic, and there is no way to load via server and client on the same file or separating them
- Multiple font loading does not seem to work with tailwind. The custom variable names do not seem to get picked up in `tailwind.config`

##### Other Issues

- Storybook is unable to load if tailwind is using a reference to an asset in the public folder. In my instance, a reference for a background image which ommited the public folder in the url confuses Storybook into trying to find this when loading its css. Using the config `staticDirs: ["../public"],` in `main.t` doesn't seem to work.
- I Want to preview code in Storybook on how the component works, but now they've added a seperate file to show this on ALL components rather then have a tab within it which I find awful as it unnecessarily clutters storybook.
