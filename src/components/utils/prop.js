
import functor from "./functor";
import _ from "lodash";
// prop('x')({ x: 3 }) -> 3
// prop('slice', 1, 1)([0, 1, 2, 3]) -> [1]
const prop = (p) => {
  var args = _.rest(arguments);
  return function(o) {
    return functor(o[p]).apply(o, args);
  };
};

export default prop;
