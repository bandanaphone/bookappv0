var React = require('react');
var ReactDOM = require('react-dom');
var ChapterSelect = require('./chapterselect.jsx');
var ChapterOptions = require('./chapteroptions.jsx');

var MainRender = React.createClass({
getInitialState:function(){
return {c1: false, 
        c2: false,
        c3: false,
        c4: false,
        c5: false,
        c6: false,
        c7: false,
        c8: false,
        c9: false
       }    
},

c1Run:function(){
this.setState({c1: true, 
               c2: false, 
               c3: false,
               c4: false,
               c5: false,
               c6: false,
               c7: false,
               c8: false,
               c9: false
              });
},

c2Run:function(){
this.setState({c2: true, 
               c1: false,
               c3: false,
               c4: false,
               c5: false,
               c6: false,
               c7: false,
               c8: false,
               c9: false
              });    
},   
    
c3Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: true,
               c4: false,
               c5: false,
               c6: false,
               c7: false,
               c8: false,
               c9: false
              });    
}, 

c4Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: true,
               c5: false,
               c6: false,
               c7: false,
               c8: false,
               c9: false
              });    
},     
    
c5Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: false,
               c5: true,
               c6: false,
               c7: false,
               c8: false,
               c9: false
              });    
},  
        
c6Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: false,
               c5: false,
               c6: true,
               c7: false,
               c8: false,
               c9: false
              });    
},     

        
c7Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: false,
               c5: false,
               c6: false,
               c7: true,
               c8: false,
               c9: false
              });    
},       

c8Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: false,
               c5: false,
               c6: false,
               c7: false,
               c8: true,
               c9: false
              });    
},       

c9Run:function(){
this.setState({c2: false, 
               c1: false,
               c3: false,
               c4: false,
               c5: false,
               c6: false,
               c7: false,
               c8: false,
               c9: true
              });    
},        
    
mainpage: function(){
return (<div id="wrapper">
<ChapterOptions 
    c1Run={this.c1Run} 
    c2Run={this.c2Run}
    c3Run={this.c3Run}
    c4Run={this.c4Run}
    c5Run={this.c5Run}
    c6Run={this.c6Run}
    c7Run={this.c7Run}
    c8Run={this.c8Run}
    c9Run={this.c9Run}
    />        
<ChapterSelect 
    c1={this.state.c1} 
    c2={this.state.c2}
    c3={this.state.c3}
    c4={this.state.c4}
    c5={this.state.c5}
    c6={this.state.c6}
    c7={this.state.c7}
    c8={this.state.c8}
    c9={this.state.c9}
    />     
</div>);
},

render:function(){
return this.mainpage();}        
});

ReactDOM.render(<MainRender />, document.getElementById('mainsection'));