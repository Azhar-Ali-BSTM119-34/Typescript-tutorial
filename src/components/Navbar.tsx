import logo from "../assets/logo-KS.png";
const Navbar = () => {
  return (
    <div className=" flex p-10 justify-between items-center shadow-lg shadow-black-500/40 h-16 w-screen bg-white-500">
      <div className="LOGO">
        <img src={logo} alt="logo of the company" />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Navbar;
