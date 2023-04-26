e# Space Tourism

This is a frontend mentor [challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) exercise to build a website for Space Travel.

This is a good opportunity to get to know the new [app directory](https://nextjs.org/blog/next-13#new-app-directory-beta) way of doing things in Next 13

(In progress) URL - https://space-tourism-umm9.vercel.app/

### Tech

- Next 13 and React
- Tailwind for styling
- [Shadcn](https://ui.shadcn.com/docs) for more complex components (mainly form related) so that acessibility is accounted for
- Storybook for component library
- Deployed with Vercel

### Issues with App Directory structure

- Multiple font loading does not seem to work with tailwind. The custom variable names do not seem to get picked up in `tailwind.config`
- RootLayout (`Layout.tsx` on the root of app) contains the server loading of fonts, but adding Navbar into it prevents passing in current url prop so that current link can be highlighted. This needs to be done client side, so you cannot do both.
