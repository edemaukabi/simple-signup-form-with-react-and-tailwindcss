import CompanyIcon from './assets/companyicon.svg';
import PaginationIcon from './assets/paginationicon.svg';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex-auto w-5/12 flex flex-col bg-blue-500 bg-cover px-12 py-8">
        <h1 className="6xl mt-8 text-white font-bold">SME Better</h1>
        <form className="mt-8 text-white">
          <p>Log into your Business Manager</p>
          <div className="my-6">
            <label className="text-white" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border border-solid border-blue-600 text-gray-700 bg-white-800" placeholder="someone@gmail.com" type="email" id="email" />
          </div>
          <div className="my-6">
            <label className="text-white" htmlFor="password">Password</label>
            <input className="w-full px-4 py-2 text-gray-700 bg-white-800" placeholder="password" type="password" id="password" />
          </div>
          <div className="mt-4">
            <button className="w-full px-4 py-2 border border-solid border-white text-white bg-blue-500">SIGN IN</button>
          </div>

          <div className="mt-4">
            <span className="text-white">Don't have an account?</span>
            <a className=" ml-2 text-white" href="#">Sign Up</a>
          </div>
          <div className="mt-4">
            <p>Forgot password?</p>
            <a className="w-full block mt-2 text-center px-4 py-2 border border-solid text-black border-white bg-white" href="#">Reset</a>
          </div>
        </form>
      </div>
      <div className="flex-1 flex flex-auto w-7/12 bg-white items-center justify-center flex-col">
        <p className="text-blue-600">Organize your customer information</p>
        <div className="flex flex-col">
          <img className="w-80 mt-12" src={CompanyIcon} alt="companyicon"/>
        </div>
        <div className="flex flex-col mt-12">
          <img  className="" src={PaginationIcon} alt="paginationicon"/>
        </div>
      </div>
    </div>
  );
}

export default App;
