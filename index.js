exports.addActiveToClassName = function (node) {
    node.className = `${node.className} active`;
}

exports.removeActiveFromeClassName = function (node, nodeClassName = 'leftContainer') {
    node.className = `${nodeClassName}`;
}
