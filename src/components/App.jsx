import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      goit-react-hw-02-feedback
      <div>
        <Feedback />
      </div>
    </div>
  );
};
