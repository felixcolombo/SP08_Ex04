import React from 'react';

class Button extends React.Component {
    render(){
        return(
            <div>
                <button
                    style={this.props.color}
                    className='botao'
                >{this.props.text}
                </button>
            </div>
        )
    }
}

export default Button;