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
        <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            {message}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
        </div>
    }
}

export default Modal;