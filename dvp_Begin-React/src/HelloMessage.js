import React, { Component } from 'react';

class HelloMessage extends React.Component{
    render(){
        return <div>Hello {this.props.name}</div>;
    }
}

//ReactDOM.render(<HelloMessage name="dvp" /> , simple);
export default HelloMessage;