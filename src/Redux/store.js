import {createStore} from 'redux'

//state
const intialState={
  count:0
}

//action Creator 

export const Inc = ()=>{
  return {
    type:"INCREMENT"
  }
}

export const Dec =()=>{
  return {
    type:"DECREMENT"
  }
}

///reducer 

const reducer =(state = intialState , action )=>{
    switch(action.type){
     case "INCREMENT" : return {...state, count:state.count+1};
     case "DECREMENT" : return {...state, count: state.count-1};
     default : return state;
    }
}


const store = createStore(reducer)

export default store ;
