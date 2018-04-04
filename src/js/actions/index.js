export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export function removeTodo(todoId) {
    return {
        type: 'REMOVE_TODO',
        payload: todoId
    }
}

export function setStatus(todoId) {
    return {   
        type: 'SET_STATUS',
        payload: todoId
    }
}

export function removeStatus(todoId) {
    return {   
        type: 'REMOVE_STATUS',
        payload: todoId
    }
}