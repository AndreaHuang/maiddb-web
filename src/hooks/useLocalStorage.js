import React,{useEffect,useState} from 'react';
function getLocalStorage(key,initialValue){
    console.log("Get")
   const savedValue= localStorage.getItem(key);

   if(savedValue) return JSON.parse(savedValue);
   else {
       if(initialValue instanceof Function){
           return initialValue();
       } else{
           return initialValue;
       }
   }
}

function saveLocalStorage(key,value){
    console.log("Save")
    localStorage.setItem(key,JSON.stringify(value));
}

export function useLocalStorage (key, initialValue){
    const[value,setValue] = useState(()=>{
        return getLocalStorage(key,initialValue);
    });
    useEffect(()=>{
        saveLocalStorage(key,value);
    },[value])
    return [value,setValue];

}