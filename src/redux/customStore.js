function createStore(reducer, initialState){
    let state = initialState;
    let listenerCallback;
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(action, state);
        listenerCallback();
        console.log('state', state);
    }    
    function subscribe(listener){
        listenerCallback = listener;
    }
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
export default createStore;