const findIndex = (arr, id) => {
    const index = arr.findIndex(todo => todo.id === id);

    if(index !== -1) {
        return index;
    } else {
        return 0;
    }
};

module.exports = findIndex;