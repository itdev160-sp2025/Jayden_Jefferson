/***********************************************
 * Package data and constructor objects
 ***********************************************/

// Package data array (simulated data source, such as JSON or database recordset)
var data = [
    {
        name: 'settings-sync',
        description: 'Synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines.',
        author: 'Shan Khan',
        url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
        downloads: 4119774,
        stars: 4.5,
        price: 0.00,
        selector: 'p1'
    },
    {
        name: 'gitlens',
        description: 'Supercharges the Git capabilities built into Visual Studio Code, providing rich insights into code authorship and history.',
        author: 'Eric Amodio',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 40063242,
        stars: 3.5,
        price: 0.00,
        selector: 'p2'
    }
];


// (Atom) Package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

/***********************************************
 * Utility functions
 ***********************************************/

// Returns today's date, formatted
var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

// Returns DOM element by id.
// We're just wrapping document.getElementById
// in a shorthand function. If this seems confusing,
// then just replace getEl with document.getElementById
// in the writePackageInfo function.
var getEl = function (id) {
    return document.getElementById(id);
};

/**
 * Writes the package object's data to the appropriate
 * DOM elements utilizing the package selector property.
 * @param  {Package} package  Package object
 * @return {void}
 */
var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
        nameEL = getEl(selector + '-name'),
        descEL = getEl(selector + '-description'),
        authEL = getEl(selector + '-author'),
        downloadEL = getEl(selector + '-downloads'),
        starsEL = getEl(selector + '-stars');

    // Write package data to DOM elements
    nameEL.textContent = package.name;
    descEL.textContent = package.description;
    authEL.textContent = package.author;
    downloadEL.textContent = package.getFormattedDownloads();
    starsEL.textContent = package.getFormattedStars();
};

/**
 * Utilize package data and constructor objects to
 * construct each package, then write it to the page.
 */
var init = function() {
    // Write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    /** Write package data one-by-one
     *  or by using a for loop if you are comfortable doing so
     */

    // Write packages one-by-one
    var settingsSync = new Package(data[0]);
writePackageInfo(settingsSync);

var gitLens = new Package(data[1]);
writePackageInfo(gitLens);

    // continue with a couple more packages... OR

    // Write packages with for loop
        for (var i = 0; i < data.length; i++) {
        var extension = new Extension(data[i]);
        writeExtensionInfo(extension);
    }

};

// Call the init function to run the script
init();

