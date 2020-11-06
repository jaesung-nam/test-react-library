import React from 'react';
export var MyComp = function (props) {
  var value = props.value,
    onChange = props.onChange;
  return React.createElement(
    'div',
    null,
    React.createElement('div', null, 'my lib'),
    React.createElement('input', {
      value: value,
      onChange: function (e) {
        onChange(e.target.value);
      },
    })
  );
};
export var MyComp2 = function (props) {
  var value = props.value,
    onChange = props.onChange;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      '\uD2B8\uB9AC\uC250\uC774\uD0B9 \uD14C\uC2A4\uD2B8my lib'
    ),
    React.createElement('input', {
      value: value,
      onChange: function (e) {
        onChange(e.target.value);
      },
    })
  );
};
