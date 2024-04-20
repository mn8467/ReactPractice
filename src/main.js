import './App.css';
import './components/topbar.js';
import * as topbar from'./components/topbar.js';
import AutoSlide from './AutoSlide/AutoSlide';
import Banner from './components/banner/banner';


function App() {
  
  return (
    <div>
      {topbar.topb()}
      {/*나중에 foreach 로 있는 데이터만 가져올거임 */}
      <div className="flex-row justify-center px-1 min-h-auto">
        <div className="flex-row grid overflow-x-auto lg:grid-cols-8 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="col-span-2 px-0.5 py-0.5">
              <img src={process.env.PUBLIC_URL + '/image/main/add/row1.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row2.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row3.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row4.png'} className="h-full w-full"></img>
            </div>
        </div>
        <div className="flex-row grid overflow-x-auto pb-1 py-0.5 lg:grid-cols-8 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="col-span-2 px-0.5 py-0.5">
              <img src={process.env.PUBLIC_URL + '/image/main/add/row2in1.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row2in2.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row2in3.png'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={process.env.PUBLIC_URL + '/image/main/add/row2in4.png'} className="h-full w-full"></img>
            </div>
        </div>
      </div>
      <div className="px-1.5">
        <Banner />
      </div>
      <br></br>
</div>

  )
}


export default App;
