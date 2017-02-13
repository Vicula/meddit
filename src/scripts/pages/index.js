import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action-creators.js';

import Layout from './layout.js'

function mapStateToProps(state){

   return{
      books: state.books,
      users: state.users
   }
}
console.log(actionCreators)

function mapDispatchToProps(dispatch){

   return bindActionCreators(actionCreators, dispatch);
}

const Meddit = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default Meddit
