<p align="center" >
  <a href="https://www.huelite.in/" >
    <img alt="Gatsby" src="https://www.huelite.in/staticImages/icon/hueliteIconNoBg_512px.png" width="150" />
  </a>
</p>
<h2 align="center">www.huelite.in</h2>

## Project Structure

This project uses gatsby static stie generator.

## web page nomenclature and terminology

1. `new-web-page` nomenclature - {$filename}.page-{$route-nomenclature}]

2. `Comp` a Component. following rule#1

3. `route-nomenclature` - {$any-prefix}.page-products.spectrum-strip.{$extension} will be available at url - ${domain}/products/spectrum-strip].
   - page path is extracted from page filename. words after `{$any-prefix}.page-` are grabbed as path/url
   - `.'s` after `page-` are converted to `/`

### creating new website page

new pages are created in `gatsby-node.js` by dynamic CMS query.

To simply create a new web page - create a page with nomenclature#1 & rule#1

## rules

1. all `Comp` components should started with Capital first letter.[If possible Use camel casing]

## notes

1. all pages should export a const component as default with first letter capital (as in /ga-auth/index.page-ga.auth.tsx)

2. all components should start with Capital letter

3. no default exports directly. [default exports can be achieved by exporting a component in combination of a const Com]
