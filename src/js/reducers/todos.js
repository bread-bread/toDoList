const initialState = [
    { id: 0, todo: 'Сделать хоть что-нибудь', status: false },
    { id: 1, todo: 'Ничего не делать', status: false }
];

export default function todosInfo (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [ ...state, { 
                id: state.length ? state[state.length - 1].id+1 : 0, 
                todo: action.payload, 
                status: false 
            }];
        case 'REMOVE_TODO':
            return [ ...state ].filter((todo) => todo.id != action.payload);
        case 'SET_STATUS':
            return [ ...state ].map((todo) => {
                if (todo.id === action.payload) {
                    todo.status = true;

                    return todo;
                }

                return todo;
            });
        case 'REMOVE_STATUS':
            return [...state].map((todo) => {
                if (todo.id === action.payload) {
                    todo.status = false;

                    return todo;
                }

                return todo;
            });
        default:
            return state;
    }
}