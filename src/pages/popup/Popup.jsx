import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello, Chrome Extension with React!</h1>
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
