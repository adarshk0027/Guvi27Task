export default (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        USERS: state.USERS.filter(users => {
          return users.id !== action.payload
        })
      }
    case 'ADD_USER':
      return {
        USERS: [...state.USERS, action.payload]
      }

    case 'EDIT_USER':
      const UpdateUser = action.payload
      const RemainUser = state.USERS
      const UpdatedUser = RemainUser.map(user => {
        if (UpdateUser.id === user.id) {
          return UpdateUser
        }
        return user
      })
      return{
          USERS:UpdatedUser
      }
    default:
      return state
  }
}
