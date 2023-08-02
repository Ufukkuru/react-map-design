import { create } from "zustand";

const useDataStore = create((set)=>({
    data:[],
    fetchData:async ()=>{
        try{
            const result = await fetch("/data.json");
            const {data} = await result.json();
            set (()=>({data}))
        }catch{
            
        }
    }
}))

export default useDataStore