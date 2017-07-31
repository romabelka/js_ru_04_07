export default store => next => action => {
       const id = new Date().getTime().toString();

       if (action.type === 'ADD_COMMENT') {
                action.payload.commentId = id;
            }

        next(action);
}