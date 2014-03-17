function extend(target, src) {

    var array = Array.isArray(src),
        dst = array && [] || {};

    if (array) {

        target = target || [];
        dst = dst.concat(target);

        src.forEach(function(e, i) {

            if (typeof target[i] === 'undefined') {
                dst[i] = e;
            }
            else if (typeof e === 'object') {
                dst[i] = extend(target[i], e);
            }
            else {
                if (target.indexOf(e) === -1) {
                    dst.push(e);
                }
            }
        });

    }
    else {

        if (target && typeof target === 'object') {
            Object.keys(target).forEach(function (key) {
                dst[key] = target[key];
            });
        }

        Object.keys(src).forEach(function (key) {

            if (typeof src[key] !== 'object' || !src[key]) {
                dst[key] = src[key];
            }
            else {
                if (!target[key]) {
                    dst[key] = src[key];
                }
                else {
                    dst[key] = extend(target[key], src[key]);
                }
            }

        });

    }
    return dst;
}
exports.extend = extend;