//import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Feedbacks from './components/Feedbacks';
import Header from './components/Header';
//import Options from './components/Options';
//import OtherOptions from './components/OtherOptions';
//import MobileOtherOptions from './components/MobileOtherOptions';
import MobileDropDown from './components/MobileDropDown';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className=" -z-10  w-full h-[1000px] md:h-screen bg-black px-2 md:px-10 pb-10">
      <Header/>
      <hr/>
      <h1 className=' block md:hidden text-white text-3xl px-4'>Practice Interview Questions</h1>
      <span className=' block md:hidden text-white '>
        <h1 className=' text-xl'>Embark on Exploration 800 questions await</h1>
      </span>
      <MobileDropDown/>
      <hr className='block md:hidden'/>
      <Feedbacks/>
      </div>
    </Provider>
  );
}

export default App;
