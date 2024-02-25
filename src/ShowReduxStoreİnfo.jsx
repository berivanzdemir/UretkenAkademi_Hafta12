import { useSelector } from "react-redux";
import CounterButton from "./components/counterButton";



export default function ShowReduxStoreİnfo(){
    const deger=useSelector(store=>store.counter.value)
    return <>
    <h1>Başka bir Component</h1>
    <h3>Counter:{deger}</h3>
    <CounterButton/>
    
    </>
}