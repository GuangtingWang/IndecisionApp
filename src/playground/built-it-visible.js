// const appRoot = document.getElementById('app');

// let visibility = true;

// const toggleDetail = ()=>{
    
//     visibility = !visibility;
//     render();
// }

// const render = ()=>{
//     const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleDetail}>
//         {
//             visibility? 'HIDE':'SHOW'
//         }
//         </button>
//         {visibility && <p id="detail">Some details here.</p>
//         }
//     </div>
//     );

//     ReactDOM.render(template,appRoot);
// };

// render();

class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.toggleDetail = this.toggleDetail.bind(this);
        this.state = {
            visibility: true
        }
    }

    toggleDetail(){
        this.setState((prevState)=>{
            console.log(prevState.visibility);
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleDetail}>
            {
                this.state.visibility ? 'HIDE':'SHOW'
            }
            </button>
            {this.state.visibility && <p id="detail">Some details here.</p>
            }
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));