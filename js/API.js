import {post} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchLinks : function(){
    console.log(" in api ");

    post("/graphql",{
	  query: `{
		links {
		   _id,
                   title,
		   url
		}
	      }`
	}).done(resp => {
      console.log(resp.data.links);
	ServerActions.receiveLinks(resp.data.links);
    });
  }
};

export default API;
