import createResource from 'redux-thunk-rest';

const userResource = createResource('user', {
  url: 'http://ribbiterapi.herokuapp.com/users'
});

export default userResource;
