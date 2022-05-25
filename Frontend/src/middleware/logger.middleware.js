
 const loggerMiddleware = store => next => action => {
      console.log('dispatching', action);
      const result = next(action);
      console.log('result', result);
      console.log('next state', store.getState());
      return result;
}
 
export default loggerMiddleware;