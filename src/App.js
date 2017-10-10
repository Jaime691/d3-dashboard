import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3'
import _ from 'lodash'
import bar3d from './components/bar3d'
import svgHelp from './components/utils/svgHelp'


class App extends Component {
  render() {
     var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
      front: 0,
      back: 0
    };
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;
    var depth = 100 - margin.front - margin.back;

    var xScale = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.2);

    var yScale = d3.scaleLinear()
      .range([height, 0]);

    var zScale = d3
      .scaleBand()
      .domain([0, 1, 2])
      .rangeRound([0, depth])
      .padding(0.4);

    var xAxis = d3.axisBottom(xScale);

    var yAxis = d3.axisLeft(yScale)
      .ticks(10, '%');

    var chart = d3.select('#chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', svgHelp.translate(margin.left, margin.right));

    d3.tsv('data.tsv', type, function (err, data) {
      console.log(data);
      // if (err) return;

      // xScale.domain(_.sortBy(_.uniq(_.map(data, 'letter'))));
      // yScale.domain([0, _.max(data, 'frequency').frequency]);

      // function x(d) { return xScale(d.letter); }
      // function y(d) { return yScale(d.frequency); }

      // var camera = [width / 2, height / 2, -1000];
      // var barGen = bar3d()
      //   .camera(camera)
      //   .x(x)
      //   .y(y)
      //   .z(zScale(0))
      //   .width(xScale.rangeBand())
      //   .height(function (d) { return height - y(d); })
      //   .depth(xScale.rangeBand());

      // chart.append('g')
      //   .attr('class', 'x axis')
      //   .attr('transform', svgHelp.translate(0, height))
      //   .call(xAxis);

      // chart.append('g')
      //   .attr('class', 'y axis')
      //   .call(yAxis)
      //   .append('text')
      //   .attr('transform', svgHelp.rotate(-90))
      //   .attr('y', 6)
      //   .attr('dy', '.71em')
      //   .style('text-anchor', 'end')
      //   .text('Frequency');

      // var extent = xScale.rangeExtent();
      // var middle = (extent[1] - extent[0]) / 2;
      // chart.selectAll('g.bar').data(data)
      //   .enter().append('g')
      //   .attr('class', 'bar')
      //   // sort based on distance from center, so we draw outermost
      //   // bars first. otherwise, bars drawn later might overlap bars drawn first
      //   .sort(function (a, b) {
      //     return Math.abs(x(b) - middle) - Math.abs(x(a) - middle);
      //   })
      //   .call(barGen);
    });
        function type(d) {
          d.frequency = +d.frequency;
          return d;
        }
    return (
      <div>
           


      </div>
    );
  }
}

export default App;
