# Welcome to the Williams-Sonoma Coding Challenge

# Contains Two projects
<ul>
 <li>vanilla-js</li>
 <li>angular</li>
</ul>
 To execute <code>vanilla-js</code> just needs to open the <code>index.html</code> in any of the web browsers.
 To execute <code>angular</cde> project follow the below instructions

# Functionality
Using the json file provided below, given an input of products, design a page that:
<ul>
 <li>Consumes the JSON of products</li>

<li>Builds the product details page with all products</li>

<li>Displays the product details, including price, product name and the main hero image</li>

<li>Interacts intuitivley; if you click on the image, you should see an overlay with a carousal of all thumbnail images</li></ul>

 JSON URL - https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json
# Get started

# Clone the Repo
git clone https://github.com/sandeep-rss/Code-Challenge-Exercise.git
cd code-Challenge-Exercise
# Install npm packages
Install the <code>npm</code> packages described in the package.json and verify that it works:

<code>npm install</code>
<code>npm start</code>

The <code>npm start</code> command builds (compiles TypeScript and copies assets) the application into <code>dist/</code>, watches for changes to the source files, and runs <code>lite-server</code> on port <code>3000</code>.

Shut it down manually with C<code>trl-C</code>.

 # npm scripts
These are the most useful commands defined in <code>package.json</code>:

<ul><li><code>npm start </code>- runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".</li>
<li><code>npm run build</code> - runs the TypeScript compiler and asset copier once.</li>
<li><code>npm run build:watch</code> - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into d<code>ist/</code>.</li>
<li><code>npm run lint</code> - runs tslint on the project files.</li>
<li><code>npm run serve</code>- runs lite-server.</li>
<li>These are the test-related scripts:</li>

<li><code>npm test</code>- builds the application and runs Intern tests (both unit and functional) one time.</li>
<li><code>npm run ci</code> - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.</li>
</ul>

