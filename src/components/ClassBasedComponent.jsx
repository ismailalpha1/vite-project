import React from "react";
class ClassBasedComponent extends React.Component {
    // constructor(props){
    //     super();
    //     this.state = {
    //         course:'react'
    //     }
    // }
    state = {course : 'react' , counter : 0};
    componentDidMount(){
        //Change the value by time 3s
        // setInterval(() =>{
        //     this.setState({course : 'java'})
        // },3000)
        // this.setState((oldState) =>{
        //     return (
        //         course = 'vue',
        //         oldState = 1
        //     )
        // })
    }

    //call before close your component
    componentWillUnmount(){}
     render() {
        return (
            <div>
                <span>This is the class based component</span>
                <span>Props : {this.props.test}</span>
                <span>Props : {this.state.course}</span>
                <span>Counter : {this.state.oldState}</span>
            </div>
        )
     }
}

export default ClassBasedComponent;