/*
export interface Practise {
    id: number;
    title: string;
    description: string;
    date: Date;
}
*/

const practises = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRACTISE':
        return [
          ...state, action.practise
        ]
      case 'DELETE_PRACTISE':
        return state.filter(item => item.id !== action.id)
      default:
        return state
    }
  }
  
  export default practises;