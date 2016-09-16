function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}
function insertLeaves(element) {
    for (var i = 0; i < 12; i++) {
        element.appendChild(document.createElement('div'));
    }
}
function init() {
    var elements = getAllElementsWithAttribute('spinner');
    for (var i = 0, n = elements.length; i < n; i++) {
        insertLeaves(elements[i]);
    }
}
init();
//# sourceMappingURL=spinner.js.map