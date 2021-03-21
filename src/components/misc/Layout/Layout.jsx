
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { closeCartModal } from '../../../store/actions/app.action';


const Layout = (props) => {
const style = props.app.cartOpened ? { filter: "blur(1px)"} :{};
    return (<div style={style}>
       {props.children}
    </div>


    )


}
const mapStateToProps = (state) => ({

    app: state.app,

  })
  

export default connect(mapStateToProps, { closeCartModal })(Layout) 

