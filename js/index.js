"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var widthStyle = { width: "500px", height: "1000px", border: "1px solid black", padding: "30px", borderRadius: "5px", order: "0", marginRight: "5px" };
var widthStyle2 = { width: "500px", height: "1000px", border: "1px solid black", padding: "30px", borderRadius: "5px", order: "-1", marginLeft: "5px" };
var alignCenter = { textAlign: "center" };
var prototype = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { value: prototype };
    _this.changeText = _this.changeText.bind(_this);
    return _this;
  }

  Input.prototype.componentWillMount = function componentWillMount() {

    this.props.addText(this.state.value);
  };

  Input.prototype.changeText = function changeText(event) {
    this.setState({
      value: event.target.value
    }, function () {
      this.props.addText(this.state.value);
    });
  };

  Input.prototype.render = function render() {

    return React.createElement(
      "div",
      { style: widthStyle },
      React.createElement(
        "h1",
        null,
        "Input"
      ),
      React.createElement(
        "textarea",
        { onChange: this.changeText, value: this.state.value },
        " "
      )
    );
  };

  return Input;
}(React.Component);

var Output = function (_React$Component2) {
  _inherits(Output, _React$Component2);

  function Output(props) {
    _classCallCheck(this, Output);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.renderMarked = _this2.renderMarked.bind(_this2);
    return _this2;
  }

  Output.prototype.renderMarked = function renderMarked(value) {
    var markeded = marked(value, { sanitize: true });
    return { __html: markeded };
  };

  Output.prototype.render = function render() {

    return React.createElement(
      "div",
      { style: widthStyle2, id: "textfield" },
      React.createElement(
        "h1",
        null,
        "Ouput"
      ),
      React.createElement("p", { dangerouslySetInnerHTML: this.renderMarked(this.props.text) })
    );
  };

  return Output;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this));

    _this3.state = { currValue: '' };
    return _this3;
  }

  App.prototype.addText = function addText(text) {
    this.setState({
      currValue: text
    });
  };

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "app" },
      React.createElement(Input, { addText: this.addText.bind(this) }),
      React.createElement(Output, { text: this.state.currValue })
    );
  };

  return App;
}(React.Component);

//ReactDOM.render(<Component />, document.getElementById('textfield'));
//ReactDOM.render(<Output />, document.getElementById('output'));

ReactDOM.render(React.createElement(App, null), document.getElementById('window'));