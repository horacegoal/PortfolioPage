import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            in: true,
            begin: this.props.begin
        }
    }

    singleWord() {
        let words = [];
        for (let i = 0; i < this.props.text.length; i++) {
            words.push(this.props.text[i])
        }
        let word = words.map((w, i) => {
            return <span key={i}>{w}</span>
        })
        return word;
    }
    count = 0;
    //when text all appear, return only text without csstransition to avoid animation fraud
    onEntered = () => {
        this.count++;
        if(this.count === 4){
            this.props.onBegin()
            if(this.props.last === true)
                window.dispatchEvent(new Event('listItemFinished'))
        }
        
    }

    render() {
        // console.log('listitem')

        let words = [];
        for (let i = 0; i < this.props.text.length; i++) {
            words.push(this.props.text[i])
        }
        let delay = -200 + this.props.delay;
        if (this.props.begin) {
            return (
                <div>
                    {
                        words.map((w, i) => {
                            if (w !== ' ') {
                                delay = delay + 200;
                                return (
                                    <CSSTransition
                                        in={this.state.in}
                                        appear={true}
                                        timeout={1000 + delay}
                                        classNames="example"
                                        exit={false}
                                        onEntered={this.onEntered}
                                    >
                                        <span style={{ transitionDelay: `${delay}ms`, zIndex: 1 }}>{w}</span>
                                    </CSSTransition>

                                )
                            } else {
                                return (
                                    <span> </span>
                                )
                            }
                        })
                    }
                </div>
            )
        }else{
            return(
                <span>{this.props.text}</span>
            )
        }

    }
}