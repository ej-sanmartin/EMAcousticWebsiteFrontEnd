# E&M Acoustic Website, a GatsbyJs Static Site
<br />

## What is this project?
---
Coded and designed a GatsbyJS Web Application to be responsive on all devices, hooked to Contentful's API to query via GraphQL and able to send contact form info to owner's email address.

<br />

## Why was this built?
---
Client project.

<br />

## Tech Used
---
JavaScript, ES6, GatsbyJs, Sass, Netlify, GraphQL

<br />

## Requirements
---
- Node v 13.3.0 (issues with other Node versions)
- NPM v 7.11.1
- Gatsby CLI version: 3.4.1
- Gatsby version: 2.32.13
- environmental variables:
    - GATSBY_GRAPHQL_IDE
    - GATSBY_CONTENTFUL_SPACE_ID
    - GATSBY_CONTENTFUL_ACCESS_TOKEN
    - GATSBY_GOOGLE_MAPS_EMBED_API_TOKEN
    - GATSBY_GOOGLE_MAPS_PLACE_ID
    
    
    - WILL NOT RUN WITHOUT THESE ENVIRONMENT VARIABLES SET

<br />

## How to start environment
---
`git clone https://github.com/ej-sanmartin/EMAcousticWebsiteFrontEnd`

`cd EMAcousticWebsiteFrontEnd`

`npm run develop`

<br />

## Folder Structure
---
All the code written by myself can be found in src/.

There, you'll find an assets folder which has two sub folders; one for images and another for all static text contents.

Then, there is a components folder filled with React component javascript files. There are two sub folders, one for card components than are reused and mapped through in the home page. The other sub folder is a meta/ folder which holds the SEO component. May hold google analytics file later on. The rest of the files in the components folder not in sub folders are just layout files and other components that are always rendered in this web app in multiple pages.

After, we have a pages folder for all the pages that we manually create for this site.

Then, we have the styles folder which has styles for each component.

And then we have a templates folder which holds a React component file that will be used in dynamically creating pages.

Finally, we have a utilities folder which holds files for commonly used functions throughout the project.

<br />

## Things To Improve
----
- Clean up index.js file (home page) in pages folder. Can separate every section.
- Clean up styles files (lots of !important tag used in media queries).
- Layout vs nonHomeLayout files are the same, one will have smooth scroll to chosen IDs and the other one just sends you to another page. Seems like there is a cleaner, programmer way to solve this so we don't have to have two different file sets.
- Optimize images and components to increase speed of site
- Android bug where on smaller phones home page image does not display
- Add test files

<br />

## Contributers
---
- Edgar J San Martin (Main Developer)
- Dibash Chhetri (Helped fix link and smooth scroll error on mobile devices and Safari)

<br />

## Copyright
---
© Edgar J San Martin 2021