function createStore(reducer, initialState){
    let state = initialState;
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(action, state)
        console.log(state)
    }    
    return {
        getState: getState,
        dispatch: dispatch
    }
}
export default createStore;