import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'pivotal-ui/react/modal';
import {Input} from 'pivotal-ui/react/inputs';
import {DefaultButton} from 'pivotal-ui/react/buttons';

export default class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false, disableAnimation: false};
  }

  render() {
    return (
      <div>
        <DefaultButton onClick={() => this.setState({show: true})}>
          Open Modal
        </DefaultButton>
        <Modal animationDuration={this.state.disableAnimation ? 0 : undefined}
               title='What a Header!'
               size="30%"
               show={this.state.show}
               onHide={() => this.setState({show: false})}
               footer={<DefaultButton onClick={() => this.setState({show: false})}>Close</DefaultButton>}>
          <p>Text in a body</p><Input autoFocus placeholder="Tell me your darkest secrets"/>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<MyModal />, document.getElementById('root'));