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
          // Add database logic?
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            date: action.date
          }
        ]
      case 'DELETE_PRACTISE':
        return state.filter(item => item.id !== action.id)
      default:
        return state
    }
  }
  
  export default practises;