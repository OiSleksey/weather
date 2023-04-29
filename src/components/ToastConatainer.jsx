import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// useEffect(() => {
//   toast.info(` for the amount  was successfully added to the history`);
// }, []);
const TestToastContainer = () => {
  const notify = () => toast('Wow so easy!');
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default TestToastContainer;
