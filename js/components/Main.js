import React from "react";
import API from "../API";
import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
   return { links: LinkStore.getAll() };
}

class Main extends React.Component {

state = _getAppState();


static propTypes = {
  limit: React.PropTypes.number
};

static defaultProps = {
  limit: 4
};


  componentDidMount() {
   API.fetchLinks();
   LinkStore.on("change", this.onChange);
  }

  componentWillUnmount() {
   LinkStore.removeListner("change", this.onChange);
  }

  onChange = () => {
    console.log("in the view");
    this.setState(_getAppState());
  };

  render() {
  console.log('liks is ' , this.state.links);
   let content = this.state.links.slice(0,this.props.limit).map(link => {
	return <li key={link._id}>
		<a href={link.url}>{link.title}</a>
		</li>;
   });

   return (
       <div>
	<h3>Links</h3>
	<ul>
		{content}
	</ul>
       </div>	

    
   );
 }
}
export default Main; 
