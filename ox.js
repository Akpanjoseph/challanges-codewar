/**
 * 
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 * 
 * Example :
 * XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
    const letter = str.toLowerCase();
    if (letter.includes('o') || letter.includes('x')) {
        const o_count = letter.split('o').length - 1;
        const x_count = letter.split('x').length - 1;

        if (o_count === x_count) {
            // console.log(true);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    } else if (!letter.includes('o') || !letter.includes('x')) {
        // console.log(true);
        return true;
    }

}

XO('msms');
    

