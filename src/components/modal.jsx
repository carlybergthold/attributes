class Modal extends Component {

    constructor(props){
        super(props);

        this.state = {
            isActive: false,
            message: ''
        }
      }

      componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ isActive: true });
          } else {
            this.setState({ isActive: false });
           }
        });
      }

    return() {
        <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">{message}</div>
        <button className="modal-close is-large" aria-label="close"></button>
        </div>
    }
}

export default Modal;