function isObject(item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

var applyFunction = function (object, f) {
    // first call on self
    f(object)
    // then recursion
    Object.keys(object).map(function (key) {
        var subobject = object[key]
        if (isObject(subobject)) {
            // recursive call
            applyFunction(subobject, f)
        }
    });
    return object
}

module.exports = function (object, f) {
    return applyFunction(object, f)
};