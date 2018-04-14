import { Polymer } from '../../lib/legacy/polymer-fn.js';

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
`TODO(modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this string!`;

Polymer({
  importPath: import.meta.url,
  is: 'observe-el',

  observers: [
    'singleChanged(singleSelected.*)',
    'multiChanged(multiSelected.*)'
  ],

  singleChanged: function() {},
  multiChanged: function() {}
});
