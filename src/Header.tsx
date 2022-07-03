import { IName } from "./Homepage";

export default function Header( props:IName ) {
    return (
        <div className="flex flex-col justify-center h-20 align-middle">
          <span className="h-auto text-4xl font-welcomeContent">{props.name}의 자신감 저장소</span>
        </div>
    );
  }