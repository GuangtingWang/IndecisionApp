// const user = {
//     name: 'Guangting',
//     age: 26,
//     location : 'Pittsburgh'
// };

// function getLocation(location){
//     if(!location){
//         return undefined;
//     } else {
//         return <p>Location: {location}</p>;
//     }
// }

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const resetCount = () => {
//     count=0;
//     renderCounterApp();
// }


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>{user.name ? user.name : 'Anonymous'}</h1>
//             {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//             {getLocation(user.location)}

//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();






class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        if(!isNaN(count)){
            this.setState(()=>( {count: count} ))
        }
    }

    componentDidUpdate(prevState,prevProps){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        });
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        });
    }

    handleReset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
    }

    render(){
        return(
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));









