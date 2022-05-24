 
export const crashMiddleware= store => next => action => {
  console.log(action);
  console.log('crashMiddleware');
  try {
    return next(action)
  } catch (error) {
    console.error('Caught an exception!', error)
    throw error;
  }
}