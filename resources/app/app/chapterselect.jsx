var React = require('react');
var ChapterManager = require('./chapters/chaptermanager.jsx');

module.exports = React.createClass({
chapterselectsection: function(){
    return (
        
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Chapters</a>
 <ChapterManager 
     c1={this.props.c1} 
     c2={this.props.c2}
     c3={this.props.c3}
     c4={this.props.c4}
     c5={this.props.c5}
     c6={this.props.c6}
     c7={this.props.c7}
     c8={this.props.c8}
     c9={this.props.c9}
     />                       
                    </div>
                </div>
            </div>
        </div>    
    ); 
},
    
render:function(){
return this.chapterselectsection();    
}    
});