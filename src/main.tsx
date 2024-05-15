import './App.css';
import Banner from './components/banner/banner';
import Midbar from './components/bar/midbar';
import Midban from './components/midbanner/midban';
import Bottombar from './components/bar/bottombar';

function App() {
  
  return (
    <main className="row-span-3 col-span-12">
      {/*나중에 foreach 로 있는 데이터만 가져올거임 */}
      <div className="flex-row justify-center px-1 pt-6 min-h-0">
        <div className="flex-row grid overflow-x-auto lg:grid-cols-8 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="col-span-2 px-0.5 py-0.5">
              <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/golkynfhg9wocbhk4a6p'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/lkhlppzjgeeghor3yayp'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/x1v0y9fof2ayewa481m2'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/zpcfxpa8gxiykgk5vcjm'} className="h-full w-full"></img>
            </div>
        </div>
        <div className="flex-row grid overflow-x-auto pb-1 py-0.5 lg:grid-cols-8 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="col-span-2 px-0.5 py-0.5">
              <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/va5hust3a0kdshwl2ram'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/qlrwuok0vcnoo9slsfih'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/dinmhuy11kxmcwdzd5ck'} className="h-full w-full"></img>
            </div>
            <div className="col-span-2 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/vppxggblyz8iszstqruc'} className="h-full w-full"></img>
            </div>
        </div>
      </div>
      <div className="px-1.5">
        <Banner />
      </div>
      <div>
        <Midbar />
      </div>
      <Midban />
      <Bottombar />
      <div className="flex-row grid overflow-x-auto pb-1 py-0.5 lg:grid-cols-9 sm:grid-cols-3 md:grid-cols-6 ">
            <div className="col-span-3 px-0.5 py-0.5">
              <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/zotxadi060ouhrufhek2'} className="h-full w-full"></img>
            </div>
            <div className="col-span-3 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/vb6l28do8rdxrn4xidin'} className="h-full w-full"></img>
            </div>
            <div className="col-span-3 px-0.5 py-0.5">
            <img src={'https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/zsqlk3ablufjlxg7bobl'} className="h-full w-full"></img>
            </div>
        </div>
    </main>


  )
}
export default App;
