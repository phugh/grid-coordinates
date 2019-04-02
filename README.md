# grid-coordinates

Calculate X, Y coordinates from cell position and grid width.

## Usage
Get the coordinates of cell 12 in a grid 6 cells wide:
```Javascript
const gc = require('grid-coordinates');
const coords = gc(12, 6);
console.log(coords); // [ 0, 2 ] i.e [ X, Y ]
```

## License
(C) 2019 [P. Hughes](https://www.phugh.es). All rights reserved.

Shared under the [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/) license.