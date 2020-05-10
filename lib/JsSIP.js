<<<<<<< HEAD
=======
//const adapter = require('webrtc-adapter');
>>>>>>> 808ef1208f53049a53a80e20c1f0b41971ca12e9
const pkg = require('../package.json');
const C = require('./Constants');
const Exceptions = require('./Exceptions');
const Utils = require('./Utils');
const UA = require('./UA');
const URI = require('./URI');
const NameAddrHeader = require('./NameAddrHeader');
const Grammar = require('./Grammar');
const WebSocketInterface = require('./WebSocketInterface');
const debug = require('react-native-debug')('JsSIP');

debug('version %s', pkg.version);

/**
 * Expose the JsSIP module.
 */
module.exports = {
  C,
  Exceptions,
  Utils,
  UA,
  URI,
  NameAddrHeader,
  WebSocketInterface,
  Grammar,
  // Expose the debug module.
<<<<<<< HEAD
  debug : require('debug'),
=======
  debug : require('react-native-debug'),
  // Expose the adapter module.
  //adapter,
>>>>>>> 808ef1208f53049a53a80e20c1f0b41971ca12e9
  get name() { return pkg.title; },
  get version() { return pkg.version; }
};
