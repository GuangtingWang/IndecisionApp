import React from 'react';

//class based component
export default class AddOption extends React.Component{

    state = {
        error:undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        this.setState(()=>({error:error}))
        if(!error){
            e.target.elements.option.value='';
            //or use this
            //document.getElementById('input').value='';
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option"
                onSubmit={this.handleAddOption}>
                    <input className="add-option__input" id='input' type='text' name='option' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}