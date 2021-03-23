import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

//React different ways to mount
//Mounting order 1. constructor() -> 2. getDerivedStateFromPromt() -> 3. render() -> 4. componentDidMount()

//Return order 1. getDerivedStateFromProps() -> 2. shouldComponentUpdate() -> 3. render()
// -> 4. getSnapshotBeforeUpdate() -> 5. componentDidUpdate()

//React ways to Unmount no. 1 and only componentWillUnmount()
//This method is called when component is about to be removed from DOM

//render method is always called and is required.

//Constructor is always called first.
/*class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritegenre: "ballad"};
    }

    //getDerivedStateFromProps is called right before render. !!!!!!!
    //static getDerivedStateFromProps(props, state){
      //  return{favoritegenre: props.favgenr};
    //}

    shouldComponentUpdate(){
        return true;
    }

    changeGenre = ()=>{
        this.setState({favoritegenre: "jazz"});
    }
    //componentDidMount is called after component is rendered
    //componentDidMount(){
      //  setTimeout(()=>{
        //    this.setState({favoritegenre: "pop-rock"})
        //}, 1000)
    //}
    //render, this method puts HTML to the DOM
    render(){
        return(
            <div>
                <h1>My favorite music genre is {this.state.favoritegenre}!!</h1>
                <button type="button" onClick={this.changeGenre}>Change genre</button>
            </div>
            
        );
    }
}

//ReactDOM.render(<Music favgenr="alternative" />, document.getElementById('root'));  !!!!!!!

ReactDOM.render(<Music />, document.getElementById('root'));*/

//getSnapshotBeforeUpdate() example
/*class Music extends React.Component {
    constructor(props){
        super(props)
        this.state = {favoritegenre: "ballad"};
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({favoritegenre: "rock"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before we update the favorite genre was " + prevState.favoritegenre;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "The updated fav genre is " + this.state.favoritegenre;
    }
    
    render(){
        return(
            <div>
                <h1>My favorite music genre is {this.state.favoritegenre}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

ReactDOM.render(<Music />, document.getElementById('root'));*/

//Unmountin example
class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = ({show: true});
    }
    delMusic = () => {
        this.setState({show: false});
    }
    render(){
        let mymusic;
        if(this.state.show){
            mymusic = <Child />;
        };
        return(
            <div>
                {mymusic}
                <button type="button" onClick={this.delMusic}>Delete music</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount(){
        alert("The Music component is about to be unmounted!!");
    }
    render(){
        return(
            <h1>Don't delete my my music!!</h1>
        );
    }
}

ReactDOM.render(<Music />, document.getElementById('root'));
