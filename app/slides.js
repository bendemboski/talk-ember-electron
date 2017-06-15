import Ember from 'ember';

const { String: { htmlSafe } } = Ember;

const slides = [
  {
    title: 'Who am I?',
    listItems: [
      'Ben Demboski',
      'VP of Engineering at TurboPatent Corp.',
      'Ember addict',
      'ember-electron core contributor',
      'Ultimate Frisbee fanatic',
      'Juggler',
      'PowerPoint n00b'
    ],
    image: '/images/ben.jpg'
  },
  {
    title: 'What is Electron?',
    listItems: [
      '“Build cross platform desktop apps with JavaScript, HTML, and CSS”',
      'Bundles Chromium browser and node.js to allow webapps to run with access to full node.js/native APIs',
      'Supports integrating any node packages',
      'Comes with a number of cross-platform APIs for interacting with OS resources, e.g. application menus, file open/save dialogs, desktop notifications',
      'Applications have one main process and multiple renderer processes, each of which is a browser window, with a robust IPC mechanism for communication',
      htmlSafe('<a href="https://electron.atom.io/" target="_blank">https://electron.atom.io/</a>')
    ]
  },
  {
    title: 'What is ember-electron?',
    listItems: [
      'A build pipeline that allows Ember apps to run as Electron apps',
      'Injects some shims into the Ember app to allow it to run seamlessly in the Electron runtime environment (some AMD/resolver fiddling and module search path management)',
      'Combines output of Ember build with some other resources to produce a full ready-to-run Electron project',
      'Adds ember-cli commands to run and test your app, or to package it into an installer suitable for distribution',
      'Under the hood, uses electron-forge',
      htmlSafe('<a href="https://ember-electron.js.org/" target="_blank">https://ember-electron.js.org/</a>')
    ]
  },
  {
    title: 'Hybrid native/web app architecture',
    subtitle: '- service:platform',
    listItems: [
      'Goals: centralize Electron-aware logic as much as possible and expose Electron functionality using familiar Ember semantics.',
      'Exposes an ‘isNative’ property to allow routes, components, templates, etc. to easily adjust behavior as needed based on an Ember property.',
      'Implements the client side of a simple protocol for executing commands that run in the main process using promise semantics (compare to Electron remote module)',
      'Translates non-command-related IPC events from the main process into Ember.Evented events'
    ]
  },
  {
    title: 'Hybrid native/web app architecture',
    subtitle: '- service:backend',
    listItems: [
      'Goals: to centralize knowledge of how to access backend API/web URLs',
      'Main entry point is buildURL, which accepts a path and returns a URL to that path',
      'In web app, just returns path',
      'In Electron app, combines with configurable (config/environment.js) protocol and host to form fully-qualified URL',
      'Supports implementing a helper to allow simple linking in web app, or opening link in default system browser in Electron:'
    ],
    code: '<a href=“/path” onclick={{action (open-external)}}></a>'
  },
  {
    title: 'Hybrid native/web app architecture',
    subtitle: '- service:app-menu',
    listItems: [
      'Goal: allow routes/controllers to specify their own app menu to display natively or in the browser',
      'Uses Electron menu template semantics',
      'Either sends menu template to the main process via the platform service or exposes it as a property to be rendered by an app menu component',
      'MacOS’ global app menu & roles make this a bit tricky with multiple windows, and I’m not 100% satisfied with our solution right now'
    ]
  },
  {
    title: 'Additional “fun” topics',
    subtitle: 'for certain values of “fun”',
    listItems: [
      'Testing everything in all the (automated) ways, a.k.a. Linux making life hard',
      'Cross-platform application concerns, a.k.a. MacOS making life hard',
      'Cross-platform building a.k.a. Windows making life hard',
      'Code signing a.k.a. life just being hard',
      'Auto-updating',
      'Implementing an application that opens, edits and saves files'
    ]
  }
];

export default slides;
