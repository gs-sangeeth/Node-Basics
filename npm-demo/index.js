const _ = require("underscore");

var result = _.contains([1, 2, 3], 2);
console.log(result);

// npm init --create package.json
// npm init --yes : go with defaults

// npm i [package-name]  --installing a node module
// npmjs.com
// dependencies are added in package.json

// Dependency versions -- SemVer : Semantic Versioning
// Major.Minor.Patch aka Breaking.NonBreaking.Bugfixes
// ^ : Latest version with same Major
// ~ : Latest vresion with same Major and Minor

// npm list --listing installed modules
// npm list --depth=0

// gitignore node_modules
// can be easily installed with : npm i
// so adding it in version control is wastage of resources

// View info of installed packages
// npm view [package-name]
// npm view [package-name] dependencies
// npm view [package-name] versions

// Install Specific version
// npm i [package-name]@[version]

// Updating node packages
// run: npm outdated
// npm update
// doesn't update to any beaking changes

// ncu : npm-check-updates : upgrade breaking changes
// install : npm install -g npm-check-updates
// -g : global
// use : ncu
// ncu -u : upgrade package.json
// npm i

// npm i [package-name] --save-dev : dev dependency
// npm unintall(un) [package-name] : uninstall package

// All above commands works for Global packages
// just use -g
