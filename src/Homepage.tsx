import Header from "./Header";
import {useLocation} from 'react-router-dom';
import ItemList from "./ItemList";

export interface IName{
  name: string;
}

export default function Homepage() {

    const location = useLocation();
    //console.log("typeof(location) : "+typeof(location));
    const iName = location.state as IName;
    //console.log("typeof(iName) : "+typeof(iName));
    const name = iName.name;
    //console.log("typeof(name): "+typeof(name));
    return (
      <div className="h-full overflow-hidden">
        <Header name={name}/>
        <ItemList />
      </div>

    );
  }    