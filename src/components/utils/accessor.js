import functor from './functor'

const accessor = (target, config, name, isNotFunctor) => {
  target[name] = function(value) {
    if (!arguments.length) return config[name];
    config[name] = isNotFunctor ? value : functor(value);
    return target;
  };
};

export default accessor;