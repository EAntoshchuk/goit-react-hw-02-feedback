import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100px',
          backgroundColor: '#484890',
          color: '#b8ca9a',
        }}
      >
        React-hw-02-feedback
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
};
