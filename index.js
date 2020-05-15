/**
 * grid-coordinates
 * v1.0.1
 *
 * Calculate X, Y coordinates from cell position and grid width.
 *
 * Help me make this better:
 * https://github.com/phugh/grid-coordinates
 *
 * (C) 2020 P. Hughes
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
 * @param  {number} cell   current cell
 * @param  {number} width  grid width
 * @return {Array<number>} [X, Y];
 */

// eslint-disable-next-line no-extra-semi
;(() => {
  'use strict';

  /**
   * @function getCoords
   * @public
   * @param  {number} cell current cell
   * @param  {number} width grid width
   * @return {Array<number>} [X, Y];
   */
  const getCoords = (cell, width) => [cell % width, Math.floor(cell / width)];

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getCoords;
    }
    exports.getCoords = getCoords;
  }
})();
