import { useNavigate } from "react-router-dom";
//import {env} from "../App/Config/config";

export function useGoto(state=null){


    const navigate = useNavigate()
    const to = u => navigate(u,{state:state});
    return {to};
}