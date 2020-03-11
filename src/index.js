
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0)
        return [];

    return matrix.reduce((acc, curr, index) => {

        if (index % 2 === 1) curr.reverse();
        return acc.concat(curr);
    }, []);
}
