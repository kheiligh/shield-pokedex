import React from "react";
import Home from './home';
import Modal from './modal';
import ImageView from './imageView';
import { Switch, Route } from "react-router-dom";

class ModalSwitch extends React.Component {
    // adapted from https://reacttraining.com/react-router/web/example/modal-gallery
    previousLocation = this.props.location;
  
    componentWillUpdate(nextProps) {
      const { location } = this.props;
      // set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location;
      }
    }
  
    render() {
      const { location } = this.props;
      const isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      ); // not initial render
      return (
        <div>
            <Switch location={isModal ? this.previousLocation : location}>
                <Route exact path="/" component={Home} />
                {/* <Route path="/gallery" component={Gallery} /> */}
                <Route path="/poke/:id" component={ImageView} />
            </Switch>
            {isModal ? <Route path="/poke/:id" render={(props) => <Modal {...props } />} /> : null}
        </div>
      );
    }
}

export default ModalSwitch;
