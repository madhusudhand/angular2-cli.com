/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

/**************************************************
 * Everything in this file is managed by the CLI. *
 **************************************************/

const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  /** @angular-barrel */

  // Thirdparty barrels.
  'rxjs',
  /** @thirdparty-barrel */

  // App specific barrels.
  './',
  'public',
  'shared',

  // Routes
  'public/+user-guide/user-guide.component',
  /** @route-barrel */

  // Components
  'public/side-nav.component',
  'public/container.component',
  /** @component-barrel */

  // Directives
  /** @directive-barrel */

  // Services
  /** @service-barrel */

  // Pipes
  /** @pipe-barrel */

  // Other
  /** @other-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index'};
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
