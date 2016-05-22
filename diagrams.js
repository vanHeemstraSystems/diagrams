/*
 * diagrams.js
 */
var DiagramsDiagram = require(__dirname+'/diagram.js');

/**
 * Create a new Diagrams that let users create sub-diagrams.
 * @return {Diagrams}
 */
function Diagrams() { }

/**
 * Create a new DiagramsDiagram object.
 * @return {DiagramsDiagram}
 */
Diagrams.prototype.diagram = function() {
  return new DiagramsDiagram();
}

module.exports = Diagrams;
