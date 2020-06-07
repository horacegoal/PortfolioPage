import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }
    }

    onMouseDown = () => {
        this.setState({
            click: true
        })
    }

    onMouseUp = () => {
        this.setState({
            click: false
        })
        console.log('mouseup')
    }

    render() {
        return (
            <div style={{
                width: '70px',
                height: '40px',
                backgroundColor: 'AliceBlue',
                textAlign: 'center',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: this.state.click ? 'linear-gradient(to bottom , #ffa836, #ffa836)' : 'linear-gradient(to bottom , #ffa836, #ffa836, #ffa836, #915301)',
                color: 'white',
                borderRadius: '5px 5px 10px 10px',
                // cursor: 'pointer',
                zIndex: '1',
                // transform: 'perspective(40px) rotateX(10deg)',

            }}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
            >
                <div style={{
                        transform: 'perspective(20px) rotateX(10deg)',
                    // transform: 'sk

                }}>App1</div>
            </div >
        )
    }
}