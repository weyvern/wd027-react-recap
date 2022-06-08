import React, { useState, useEffect } from 'react';

/* class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.counter = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => console.log('Getting data from and API you are paying for :D'),
      2000
    );
  }

  componentDidUpdate() {
    console.log('Something in the component changed (state or props)');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
        {this.state.counter}
      </button>
    );
  }
}
 */

const Counter = () => {
  const [random, setRandom] = useState(crypto.randomUUID());
  const [counter, setCounter] = useState(0); // https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean
  useEffect(() => {
    const id = setInterval(() => setRandom(crypto.randomUUID(), 10000));
    console.log('Will only be called when it mounts');
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log('Executes on every render including the first one');
  });

  useEffect(() => {
    console.log('Executes when random is updated');
  }, [random]);

  const handleClick = () => setCounter(prev => prev + 1);

  return <button onClick={handleClick}>{counter}</button>;
};

const Link = props => {
  return (
    <div>
      <a href={props.href} target={props.target}>
        {props.text}
      </a>
    </div>
  );
};

const App = () => {
  /*   return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello World'),
    React.createElement(
      'a',
      {
        href: 'https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/',
        target: '_blank'
      },
      'Click me'
    )
  ); */

  const students = [
    { id: 1, name: 'Sandra', url: 'https://linkedin.com/sandra' },
    { id: 2, name: 'Arthur', url: 'https://linkedin.com/arthur' },
    { id: 3, name: 'Paul', url: 'https://linkedin.com/paul' },
    { id: 4, name: 'Tiyas', url: 'https://linkedin.com/tiyas' }
  ];

  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return alert('Name cannot be empty');
    console.log(name);
  };

  return (
    <div>
      {name === 'Secret code' ? 'You cracked the secret code' : 'Meh'}
      {students.map(student => (
        <Link key={student.id} href={student.url} target='_blank' text={student.name} />
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default App;
