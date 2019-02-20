/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var triangle = 0;
    for (var i = 0; i < preferences.length; i++) {
        var sp1 = i+1;
        var sp2 = preferences[i];
        var sp3 = preferences[sp2-1];
        if (sp1 !== sp2 && sp2 !== sp3 && sp1 !== sp3)
            if (sp1===preferences[sp3-1]) triangle++;
        // console.log(sp1.toString()+' '+sp2.toString()+' '+sp3.toString()+' '+ triangle.toString());
    }
    return triangle > 0 ? triangle/3 : 0;
};