import React from 'react';
import ListItem from './ListItem.js';
import MoveTile from './MoveTile.js';
import './App.css';


export default class Box extends React.PureComponent {

    constructor(props) {
        super(props);
        this.height = 100;
        this.width = 200;
        this.state = {
            // w: null,
            height: this.height,
            top: this.height,
            color: 'black',
            begin: true
        }
    }

    boxEnter = () => {
        this.setState({
            top: 0,
            color: 'white'
        })
        //For Cursor grow
        window.dispatchEvent(new Event('hoverBox'))
        this.props.onChangeImg();
    }

    boxLeave = () => {
        this.setState({
            top: this.height,
            color: 'black'
        })
        //For cursor shrink
        window.dispatchEvent(new Event('LeaveBox'))
    }

    handleBegin = () => {
        this.setState({
            begin: false
        })
    }

    componentDidMount = () => {
        // let app1 = document.querySelector(`#${this.props.myid}`);
        // console.log(app1)
        // this.setState({
        //     w: app1.clientWidth,
        //     h: app1.clientHeight,
        //     top: app1.clientHeight
        // }, () => console.log(this.state.w))
    }

    render() {
        return (
            <div style={{
                // position: 'absolute'
            }}>
                <div style={{
                    // flex: 1,
                    height: this.height,
                    width: 200,
                    // backgroundColor: 'rgba(255,255,255,0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 0,
                    color: this.state.color
                }}
                    id='box'
                    onMouseEnter={this.boxEnter}
                    onMouseLeave={this.boxLeave}
                >
                    <ListItem text={this.props.text} delay={this.props.delay} begin={this.state.begin} onBegin={this.handleBegin} last={this.props.last}/>
                    {/* {this.props.children} */}
                    <MoveTile width={this.width} height={this.state.height} top={this.state.top} />
                </div>
            </div>

        )
    }
}