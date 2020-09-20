import React from 'react';
import { connect } from 'react-redux';
import { ActionTypes, DispatchTypes } from './redux/Actions';
import { State } from './redux/State';

const mapStateToProps = (state: State) => ({
  message: state.message
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  setMessage: (value: string) => dispatch({type: ActionTypes.SetMessage, payload: value})
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const App = ({ message, setMessage }: Props) => {

  React.useEffect(()=> {
    setTimeout(() => {
      setMessage('2 seconds have passed');
    }, 2*1000);
  },[]);

  return (
    <p>{message}</p>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
