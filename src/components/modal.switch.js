import React from "react";
import Home from './home';
import Modal from './modal';
import ImageView from './imageView';
import { Switch, Route } from "react-router-dom";

class ModalSwitch extends React.Component {
    // We can pass a location to <Switch/> that will tell it to
    // ignore the router's current location and use the location
    // prop instead.
    //
    // We can also use "location state" to tell the app the user
    // wants to go to `/img/2` in a modal, rather than as the
    // main page, keeping the gallery visible behind it.
    //
    // Normally, `/img/2` wouldn't match the gallery at `/`.
    // So, to get both screens to render, we can save the old
    // location and pass it to Switch, so it will think the location
    // is still `/` even though its `/img/2`.
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


// const Modal = ({ match, history }) => {
//     const pokemon = history.location.state && history.location.state.details ? history.location.state.details : null;
//     if (!pokemon) {
//       return null;
//     } else {

//     }
//     const back = e => {
//       e.stopPropagation();
//       history.goBack();
//     };
//     return (
//       <div
//         onClick={back}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           background: "rgba(0, 0, 0, 0.15)"
//         }}
//       >
//         <div
//           className="modal"
//           style={{
//             position: "absolute",
//             background: "#fff",
//             top: 25,
//             left: "10%",
//             right: "10%",
//             padding: 15,
//             border: "2px solid #444"
//           }}
//         >
//             <div>
//                 <img src={pokemon.imgSrc} alt='{pokemon.id}' />
//                 <p>Name: {pokemon.name}</p>
//                 <p>Weight: {pokemon.weight}</p>
//                 <p>
//                     Type: 
//                     {/* {pokemon.types.map(type => 
//                         <span key={type.slot}>{type.type.name}</span>
//                     )} */}
//                 </p>
                
//             </div>          
//           <button type="button" onClick={back}>
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };
  
export default ModalSwitch;
