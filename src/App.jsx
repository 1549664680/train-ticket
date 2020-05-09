import React, { Component ,PureComponent,memo} from 'react';
import './App.css';
class Foo extends PureComponent{
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.name === this.props.name){
  //     return false
  //   }
  //   return true
  // }
  render(){
    console.log('foo render')
    return null
  }
}
// 无状态组件时，使用memo包裹
//const Foo = memo(function Foo(props){
//       console.log('foo render')
//     return null
// })
class App extends Component {
  state = {
    count:0,
    person:{
      age:1
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>add</button>
        <Foo/>
      </div>
    )
  }
}

export default App;
