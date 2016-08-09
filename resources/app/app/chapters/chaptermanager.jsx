var React = require('react');
var Chap1 = require('./01.jsx');
var Chap2 = require('./02.jsx');
var Chap3 = require('./03.jsx');
var Chap4 = require('./04.jsx');
var Chap5 = require('./05.jsx');
var Chap6 = require('./06.jsx');
var Chap7 = require('./07.jsx');
var Chap8 = require('./08.jsx');
var Chap9 = require('./09.jsx');

module.exports = React.createClass({
render:function(){
if (this.props.c1)
{ return (<div><Chap1 /></div>) }
if (this.props.c2)
{ return (<div><Chap2 /></div>) }
if (this.props.c3)
{ return (<div><Chap3 /></div>) }    
if (this.props.c4)
{ return (<div><Chap4 /></div>) }   
if (this.props.c5)
{ return (<div><Chap5 /></div>) }   
if (this.props.c6)
{ return (<div><Chap6 /></div>) }       
if (this.props.c7)
{ return (<div><Chap7 /></div>) }    
if (this.props.c8)
{ return (<div><Chap8 /></div>) }       
if (this.props.c9)
{ return (<div><Chap9 /></div>) }      
else return null;    
}    
});