import { React , Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      tripData : [],
      act : 0,
      index : ''
    
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let tripData = this.state.tripData;
    let name = this.refs.txtName.value;
    let des = this.refs.txtDes.value;
    let date = this.refs.txtDate.value;
    let desc = this.refs.txtDesc.value;
    if(this.state.act === 0){
      let newTrip = {
        "Nameoftrip" : name,
        "Destination"  :des,
        "Date of trip" : date,
        "Description" : desc
      }
      tripData.push(newTrip);
    }
    else
    {
      let index = this.state.index;
      tripData[index].name = name;
      tripData[index].des = des;
      tripData[index].date = date;
      tripData[index].desc = desc;
    }
    
    this.setState({
      tripData : tripData,
      act: 1
    })
    this.refs.myForm.reset();
  }




  handleEdit = (i) =>{
    let tripData = this.state.tripData[i];
    this.refs.txtName.value = tripData.name;
    this.refs.txtDes.value = tripData.des;
    this.refs.txtDate.value = tripData.date;
    this.refs.txtDesc.value = tripData.desc;
    this.setState({
      tripData : tripData,
      act : 1,
      index : i
    })
  }
  handleDelete = (i) =>{
    let tripData = this.state.tripData;
    tripData.splice(i,1);
    this.setState({
      tripData : tripData
    });
  }
  render(){
    let tripData = this.state.tripData;
    return(
      <div>
      <h1 className="h1">My Trip </h1>
      <form ref="myForm" className="myForm">
        <label>Name of Trip</label>
        <input type = "text" ref="txtName" placeholder="Enter Name of Trip" className="formField"/>
        <label>Destination</label>
        <input type = "text" ref="txtDes" placeholder="Enter Destination" className="formField"/>
        <label>Date of Trip</label>
        <input type = "text" ref="txtDate" placeholder="Enter Date of trip" className="formField"/>
        <label>Description</label>
        <input type = "text" ref="txtDesc" placeholder="Enter Description" className="formField"/>
        <button onClick= { e => this.handleSubmit(e)} className="myButton">Add</button>
      </form>
      <table className="table">
        <tr>
          <th>Name of Trip</th>
          <th>Destination</th>
          <th>Date of Trip</th>
          <th>Description</th>
        </tr>
        {
          tripData.map( (data, i) =>
          <tr key={i}>
            <td>{data.name}</td>
            <td>{data.des}</td>
            <td>{data.date}</td>
            <td>{data.desc}</td>
            <td>
              <button onClick={this.handleEdit(i)} className="myButton">Update</button>
            </td>
            <td>
              <button onClick={this.handleDelete(i)} className="myButton">Delete</button>
            </td>
          </tr>
          )
        }
      </table>
      </div>
      )
  }
}
export default App;