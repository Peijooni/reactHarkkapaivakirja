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
        ];
      case 'EDIT_PRACTISE':
        let tempState = state.map(practise => {
          if(practise.id === action.id) {
            practise.title = action.practise.title;
            practise.description = action.practise.description;
            practise.date = action.practise.date;
            return practise;
          }
          return practise;
        });
        return [
          ...tempState
        ];
      case 'DELETE_PRACTISE':
        return state.filter(item => item.id !== action.id);
      case 'INIT_PRACTISES':
        return action.practises;
      default:
        return state;
    }
  }
  
  export default practises;