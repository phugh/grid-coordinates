/**
 * grid-coordinates
 * v1.0.0
 *
 * Calculate X, Y coordinates from cell position and grid width.
 *
 * Help me make this better:
 * https://github.com/phugh/grid-coordinates
 *
 * (C) 2019 P. Hughes
 * Licence : Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
 * http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Usage example:
 * const gc = require('grid-coordinates');
 * const coords = gc(12, 6);
 * console.log(coords); // [ 0, 2 ] i.e [ X, Y ]
 *
 * See README.md for help.
 *
 * @param  {Number} cell   current cell
 * @param  {Number} width  grid width
 * @return {Array} [X, Y];
 */

(function() {
  'use strict';

  /**
   * @function getCoords
   * @param  {Number} cell   current cell
   * @param  {Number} width  grid width
   * @return {Array} [X, Y];
   */
  const getCoords = (cell, width) => {
    const X = cell % width;
    const Y = Math.floor(cell / width);
    return [X, Y]; // (col, row)
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getCoords;
    }
    exports.getCoords = getCoords;
  } else {
    global.getCoords = getCoords;
  }
})();
