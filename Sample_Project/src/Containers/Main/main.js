import React from "react";
import axios from 'axios';
class Main extends React.Component {
	state = {
      persons: []
    }
    componentDidMount() {
	    axios.get(`./mockdata/sampledata.json`)
	      .then(res => {
	        const persons = res.data;
	        this.setState({ persons });
	      })
    }
    render(){
		return (
			<div className="mainContent">
			    <div className="sampleTable">
					<div className="tableContent">
						<table>
							<thead>
								<tr className="row100 head">
									<th className="column1">Name</th>
									<th className="column2">Email</th>
									<th className="column3">Age</th>
									<th className="column4">Gender</th>
								</tr>
							</thead>
						</table>
					</div>

					<div className="tableContent">
						<table>
							<tbody>
								{this.state.persons.map(element => {
									return (
											<tr className="row100 body" key={element.name}>
												<td className="column1">{element.name}</td>
												<td className="column2">{element.city}</td>
												<td className="column3">{element.age}</td>
												<td className="column4">{element.gender}</td>
										    </tr>
										)
								})}								
							</tbody>
						</table>
				    </div>
				</div>
			</div>
		)
	}
}
export default Main