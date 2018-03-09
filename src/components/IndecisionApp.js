import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component{

    state = {
        options:this.props.options,
        selectedOption:undefined
    }
    //lifecycle method, only used in class based component
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options:options}));
            }
        } catch (e) {
            //Do nothing at all
        }
    };
    
    componentDidUpdate (prevProps,prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    };

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    };

    handleDeleteOptions = () => {
        this.setState( () => ( {options:[]} )) ;
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState( (prevState) => ({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    };

    handlePick = () => {
        const ranNum = Math.floor(Math.random() * this.state.options.length);
        this.setState ((prevState)=>({
            selectedOption:prevState.options[ranNum]
        })
        )};

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        } else{
        this.setState((prevState) => ({options: prevState.options.concat([option])}) );
        }
    };

    handleClearSelectedOption = () => {
        this.setState(()=>({selectedOption:undefined}))
    }

    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of computer";
        return (
            <div>
                <Header  title ={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick} />
                    <div className='widget'>
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption = {this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: ['one','two']
};

export default IndecisionApp;