import * as React from 'react';

export default class EventListenerComponent extends React.PureComponent {
    divRef =  React.createRef();

    componentDidMount() {
        this.divRef.current.addEventListener('click', () => { console.error('I have been clicked :)'); });
    }

    render() {
        return (<div ref={this.divRef} style={{height: 100, backgroundColor: "red"}}>Click me!</div>);
    }
}