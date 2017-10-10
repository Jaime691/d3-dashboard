import prop from './prop'
const svgHelp = {
  translate: function(x, y) {
    return "translate(" + x.toFixed(2) + "," + y.toFixed(2) + ")";
  },
  rotate: function(d) {
    return "rotate(" + d.toFixed(2) + ")";
  },
  polygon: function(points) {
    points = points.map(function(p) {
      return p.map(prop("toFixed", 2)).join(",");
    });
    return "M" + points.join("L") + "Z";
  }
};

export default svgHelp;