import React  from 'react'
 
class ComponentTransactionLine  extends React.Component 
 {
    constructor (props){
        super();
        this.state={ 
            obj_state : props.obj_props
        }
        this.countPlusPlus = this.countPlusPlus.bind(this)
    }
 
    countPlusPlus(){
        ///https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
        this.setState(prevState => {
            let obj_state = Object.assign({}, prevState.obj_state);  // creating copy of state variable jasper
            obj_state.invoiceNumber = obj_state.invoiceNumber+"1";                     // update the name property, assign a new value                 
            return { obj_state };                                 // return new object jasper object
          })
        }

    render ( ){
return (

<div className="todo-item">
    {/* <p >{this.props.city_str}</p><br/> */}
    <p >{this.state.obj_state.city_str}</p><br/>
    <p >{this.state.obj_state.invoiceNumber}</p><br/>
    <button onClick={this.countPlusPlus}> Plus </button>
</div>
)
}
}
export default ComponentTransactionLine
