import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
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
  componentDidUpdate() {
    
    // let group = this.props.groups[0];

    // if(group) {
    //   let graph = group.graph;
    //   let nodes = graph.nodes;
    //   let links = graph.links;
    //   nodes = Object.keys(nodes).map( (key) =>{
    //     return {id: +key, canciones: +graph.nodes[key]['canciones']};
    //   });
    //   links = links.map( (link) =>{
    //     return {source: +link['usuario_1'], target: +link['usuario_2'], value: +link['canciones']};
    //   });
    //   var svg = select('svg'),
    //     width = +svg.attr('width'),
    //     height = +svg.attr('height');

    //   var simulation = forceSimulation()
    //     .force("link", forceLink().id(function(d) { return d.id; }))
    //     .force("charge", forceManyBody())
    //     .force("center", forceCenter(width / 2, height / 2));

    //   var link = svg.append("g")
    //     .attr("class", "links")
    //     .selectAll("line")
    //     .data(links)
    //     .enter().append("line");

    //   var node = svg.append("g")
    //       .attr("class", "nodes")
    //     .selectAll("circle")
    //     .data(nodes)
    //     .enter().append("circle")
    //       .attr("r", 2.5)
    //       .call(drag()
    //           .on("start", dragstarted)
    //           .on("drag", dragged)
    //           .on("end", dragended));

    //   node.append("title")
    //       .text(function(d) { return d.id; });

    //   simulation
    //       .nodes(nodes)
    //       .on("tick", ticked);

    //   simulation.force("link")
    //       .links(links);  
    // }
  
    
    // function ticked() {
    //   link
    //     .attr("x1", function(d) { return d.source.x; })
    //     .attr("y1", function(d) { return d.source.y; })
    //     .attr("x2", function(d) { return d.target.x; })
    //     .attr("y2", function(d) { return d.target.y; });

    //   node
    //     .attr("cx", function(d) { return d.x; })
    //     .attr("cy", function(d) { return d.y; });
    // }
    // function dragstarted(d) {
    //   if (!event.active) simulation.alphaTarget(0.3).restart();
    //   d.fx = d.x;
    //   d.fy = d.y;
    // }

    // function dragged(d) {
    //   d.fx = event.x;
    //   d.fy = event.y;
    // }

    // function dragended(d) {
    //   if (!event.active) simulation.alphaTarget(0);
    //   d.fx = null;
    //   d.fy = null;
    // }    
  }  
  render() {
    return (
      <div ref="root" className="graph">
        <svg ref="svg"     
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          >
        </svg>
      </div>
    );
  }
}

const STYLES = {
  graph: {
    height:'100%'
  }
}

export default connect(
  state => state,
  {}
)(
  useSheet(Graph, STYLES)
);