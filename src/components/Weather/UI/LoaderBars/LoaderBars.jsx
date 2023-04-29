import { Bars } from 'react-loader-spinner';
import './LoaderBars.sass';

const LoaderBars = () => {
  return (
    <div className="loader-bars">
      {/* <ThreeCircles
        color={'green'}
        innerCircleColor={'blue'}
        ariaLabel="three-circles-rotating"
        height="150"
        width="150"
        /> */}

      <Bars
        height="200"
        width="200"
        color="#FFDD00"
        ariaLabel="bars-loading"
        wrapperStyle={{
          filter: 'drop-shadow(8px 8px 21px black)',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderBars;
