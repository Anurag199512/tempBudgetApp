'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addone = _this.addone.bind(_this);
        _this.subone = _this.subone.bind(_this);
        _this.resetval = _this.resetval.bind(_this);

        _this.state = {
            //we can list all var which we need to track
            //and their default values
            count: props.cnt
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var val = localStorage.getItem('count');
            if (val) {
                console.log(Number(val) + 12);
                this.setState(function () {
                    return {
                        count: Number(val)
                    };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            localStorage.setItem('count', this.state.count);
        }
    }, {
        key: 'addone',
        value: function addone() {
            //this.state.count+=1;
            console.log('this is addone...' + this.state.count);
            this.setState(function (prevstate) {
                return {
                    count: prevstate.count + 1
                };
            });
        }
    }, {
        key: 'subone',
        value: function subone() {
            this.setState(function (prevstate) {
                return {
                    count: prevstate.count - 1
                };
            });
            console.log('this is subone...');
        }
    }, {
        key: 'resetval',
        value: function resetval() {
            this.setState(function (prevstate) {
                return {
                    count: 0
                };
            });
            console.log('this is reset...');
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Making neww counter file....',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addone, className: 'waves-effect waves-light btn-small' },
                    'Add +1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.subone, className: 'waves-effect waves-light btn-small' },
                    'Add -1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetval, className: 'waves-effect waves-light btn-small' },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    cnt: 0
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
