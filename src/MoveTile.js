import React from 'react';

export default class MoveTile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // width: this.props.w,
            // height: this.props.h,
            // top: this.props.h
        }
    }

    render() {
        return (
            <div style={{
                transition: 'top 2s',
                backgroundColor: 'rgba(46, 199, 255, 1)',
                position: 'absolute',
                width: this.props.width,
                height: this.props.height,
                left: 0,
                right: 0,
                top: this.props.top,
                zIndex: -1
            }}
                id='black'
            >

            </div>
        )
    }
}
