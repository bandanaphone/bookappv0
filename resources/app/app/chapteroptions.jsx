var React = require('React');

module.exports = React.createClass({
render:function(){
return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li id="maintitle" className="sidebar-brand">Frankenstein</li>
                <li onClick={this.props.c1Run}>
                    <a href="#">Letter 1</a>
                </li>
                <li onClick={this.props.c2Run}>
                    <a href="#">Letter 2</a>
                </li>
                <li onClick={this.props.c3Run}>
                    <a href="#">Letter 3</a>
                </li>
                <li onClick={this.props.c4Run}>
                    <a href="#">Letter 4</a>
                </li>
                <li onClick={this.props.c5Run}>
                    <a href="#">Chapter 1</a>
                </li>
                <li onClick={this.props.c6Run}>
                    <a href="#">Chapter 2</a>
                </li>
                <li onClick={this.props.c7Run}>
                    <a href="#">Chapter 3</a>
                </li>             
<li onClick={this.props.c8Run}>
<a href="#">Chapter 4</a></li>
<li onClick={this.props.c9Run}>
<a href="#">Chapter 5</a></li>                
</ul></div>    
)}    
});