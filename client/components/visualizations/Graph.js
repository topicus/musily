import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Dimensions from 'react-dimensions'
import {
  event,
  select,
  selectAll
} from 'd3-selection';
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter
} from 'd3-force';

import {
  drag
} from 'd3-drag';

class Graph extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.groups.length != nextProps.groups.length;
  }

  componentDidUpdate() {
    let group = this.props.groups[this.props.groups.length - 1];
    if(group) {
      let nodes = group.nodes;
      let links = group.edges;
      nodes = nodes.map( (node) =>{
        return {id: +node['usuario'], canciones: +node['canciones']};
      });
      links = links.map( (link) =>{
        return {source: +link[0], target: +link[1], value: +link[2]['canciones']};
      });

      let canvas = document.querySelector('canvas'),
          context = canvas.getContext('2d'),
          width = canvas.width,
          height = canvas.height;

      context.clearRect(0, 0, canvas.width, canvas.height);
      let k = Math.sqrt(nodes.length / (width * height));
      let simulation = forceSimulation()
          .force('link', forceLink().id(function(d) { return d.id; }))
          .force('charge', forceManyBody().distanceMax(k*400))
          .force('center', forceCenter())

      simulation
          .nodes(nodes)
          .on('tick', ticked);

      simulation.force('link')
          .links(links);  

      function drawLink(d) {
        context.moveTo(d.source.x, d.source.y);
        context.lineTo(d.target.x, d.target.y);
      }

      function drawNode(d) {
        context.moveTo(d.x + 3, d.y);
        context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
      }
        
      function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.beginPath();
        links.forEach(drawLink);
        context.strokeStyle = '#aaa';
        context.stroke();
        context.beginPath();
        nodes.forEach(drawNode);
        context.fill();
        context.restore();
      }
    }

  }  
  render() {
    return (
      <div ref="root" className="graph">
        <canvas width={this.props.containerWidth} height={this.props.containerHeight}></canvas>
      </div>
    );
  }
}

const STYLES = {
  graph: {
    height:'100%'
  }
}

Graph = connect(
  state => state,
  {}
)(
  useSheet(Graph, STYLES)
);

export default Dimensions()(Graph);