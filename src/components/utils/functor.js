import _ from "lodash";

// prop('x')({ x: 3 }) -> 3
// prop('slice', 1, 1)([0, 1, 2, 3]) -> [1]
const functor = (x) => {
    return _.isFunction(x) ? x : function() {
        return x;
    };
};

export default functor;
