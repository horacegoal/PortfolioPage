import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

export default class Display extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5,

        }
    }

    componentDidMount = () => {
        window.addEventListener('play', () => {
            document.querySelector('#display').classList.add('displayAni')
        })
    }

    componentDidUpdate = () => {

        document.querySelector('#display').classList.remove('displayAni')

    }

    onLoadImg = () => {
        let d = document.querySelector('#display').getBoundingClientRect();
        dispatchEvent(new CustomEvent('getXY', {
            detail: {
                x: d.x,
                y: d.y,
                width: d.width,
                height: d.height
            }
        }))
    }

    render() {

        return (
            <div style={{
                opacity: 0,
            }}
                id='display'
            >

                <img src={this.props.imgSrc}
                    style={{
                        width: '250px',
                        borderRadius: '10px',
                        // transform: 'perspective(400px) rotateY(-30deg)',

                    }}
                    onLoad={this.onLoadImg}
                />
                <div style={{
                    marginTop: '10px',
                }}>
                    <a href={this.props.link} >Try the app</a>

                </div>

            </div>
        )



    }
}
