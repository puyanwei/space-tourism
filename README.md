# Space Tourism

This is a frontend mentor [challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) exercise to build a website for Space Travel.

Website URL - https://space-tourism-umm9.vercel.app/

Storybook UI Component library - https://645f6cf043b9eed632121c8d-xkrxhxavvy.chromatic.com/

<img src="https://github.com/puyanwei/space-tourism/assets/14803518/5d271c62-3006-44bd-87ca-3c8f6ed5f395" alt="homepage" width="700px" height="50%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/c144b143-946a-4a06-9a5a-47af9c3c7267" alt="destination page" width="700px" height="50%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/e80e922d-6fc0-4800-8fe8-7c2a4706531e" alt="crew page" width="700px" height="50%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/e9eb662e-b7ef-44e5-acb1-884ef0392be7" alt="technology page" width="700px" height="50%">

<img src="https://github.com/puyanwei/space-tourism/assets/14803518/d15a925d-8d6d-4853-880d-2107ead7c02c" alt="technology page" width="70%%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/652d2e3d-209c-409d-b8bf-a81ab4655191" alt="technology page" width="70%%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/286cf46a-a608-483a-9b55-ae4f3cbeb65a" alt="technology page" width="70%%">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/6122f726-5cc1-4c06-b164-d82ecc657e91" alt="technology page" width="70%%">

<img src="https://github.com/puyanwei/space-tourism/assets/14803518/18b01aa5-315f-4bf6-9a50-9965aa9395e0" alt="technology page" width="400px" height="700px">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/114fb431-06c0-4adb-add4-126d83bb3dbd" alt="technology page" width="400px" height="700px">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/cf84f9c0-5c02-4c42-9b2b-c9449a84f4ac" alt="technology page" width="400px" height="700px">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/e32aff79-b348-42d3-aa42-86f457e2e9cf" alt="technology page" width="400px" height="700px">
<img src="https://github.com/puyanwei/space-tourism/assets/14803518/14970e44-5c8a-4bad-9ca7-5eefb89ca5ec" alt="technology page" width="400px" height="700px">

### Tech

- Next.js and React with Typescript
- Tailwind for styling
- Storybook for component library
- Deployment of Storybook with Chromatic
- Deployed with Vercel

### Installation

```
git clone https://github.com/puyanwei/space-tourism.git
cd space-tourism
yarn install
yarn dev
```

### Issues

##### Using Next 13 App folder (beta)

- RootLayout (`Layout.tsx` on the root of app) is the suggested place to load fonts (in their new way) which is done on the server. But since I need the Navbar on all pages, this needs to be added here too so there is conflict of having a server and client loaded component not being compatible. This needs to be done client side because of the `activeLink` logic, and there is no way to load via server and client on the same file or separating them
- Multiple font loading does not seem to work with tailwind. The custom variable names do not seem to get picked up in `tailwind.config`

##### Other Issues

- Storybook is unable to load if tailwind is using a reference to an asset in the public folder. In my instance, a reference for a background image which ommited the public folder in the url confuses Storybook into trying to find this when loading its css. Using the config `staticDirs: ["../public"],` in `main.t` doesn't seem to work.
- I Want to preview code in Storybook on how the component works, but now they've added a seperate file to show this on ALL components rather then have a tab within it which I find awful as it unnecessarily clutters storybook.
- Tried to make a preloaded image slider but maybe Next/Image is doing something under the hood. However did fix a lag issue, but can't help slower networks for this.
