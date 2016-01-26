// Target name of the plugins folder and zipped file name. Should not use any special characters.
var pluginFileName = 'favpress';

// A list of file extensions to be searched and replaced for placeholders.
// You don't need to add anything here, as there are some default extension specified (see gulpfile.js).
var extensionsToFilter = [];
var foldersToIgnoreForFiltering = [];

// A list of file patterns, which should be excluded from the release package,
// i.e. /**/.jade
// Note: put a / in front.
var filesToIgnoreFromTarget = [];

var date = new Date();
var majorVersion = '2.1-Beta1';
var buildVersion = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate() + '.' + date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds();

// Placeholders, which will be replaced within target files.
// You can add anything you want.
var placeholders = {
    '__PRODUCT_SLUG__': pluginFileName,
    '__PRODUCT_VERSION__': majorVersion + '.' + buildVersion,
    '__PRODUCT_TITLE__': 'FavPress',
    '__PRODUCT_DESCRIPTION__': 'An option and metabox framework for WordPress based on the original Vafpress.',
    '__PRODUCT_URI__': 'http://www.favpress.com/',
    '__PRODUCT_DOCUMENTATION_URI__': 'http://www.favpress.com/',
    '__PLUGIN_PRODUCT_TITLE__': 'FavPress',
    '__PLUGIN_URI__': 'http://www.favpress.com/',
    '__AUTHOR_NAME__': 'MOEWE',
    '__AUTHOR_URI__': 'http://www.moewe.io/en/',
    '__UPDATER_BASE_PATH__': 'http://apps.moewe.io/favpress'
};

module.exports.pluginFileName = pluginFileName;
module.exports.pluginSlug = pluginFileName;
module.exports.placeholders = placeholders;
module.exports.extensionsToFilter = extensionsToFilter;
module.exports.foldersToIgnoreForFiltering = foldersToIgnoreForFiltering;
module.exports.filesToIgnoreFromTarget = filesToIgnoreFromTarget;