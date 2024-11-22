var findRotation = function (mat, target) {
    for (let i = 0; i < 4; i++) {
        if (isEqual(mat, target)) {
            return true;
        }
        else {
            mat = rotate(mat);
        }
    }
    return false;
};

function isEqual(mat, target) {
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== target[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function rotate(mat) {
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        mat[i].reverse();
    }
    return mat;
}
