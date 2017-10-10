const perspective = camera => {
      let cx = camera[0],
        cy = camera[1],
        cz = camera[2];

      return function(points) {
        return points.map(function(point) {
          let px = point[0],
            py = point[1],
            pz = point[2];
          return [(cx - px) * cz / (pz - cz) + cx, (cy - py) * cz / (pz - cz) + cy];
        });
      };
};

export default perspective;
