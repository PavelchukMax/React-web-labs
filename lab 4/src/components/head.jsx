import {useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../store/store";
import useLoggedState from "../hooks/useLoggedState";
export default function Header()
{
  const [value, setValue] = useLoggedState();
  const location = useLocation();
  const navigate = useNavigate();
  const tovarsCheckedAmount = useGlobalStore(
    (state) => state.tovars.filter((v) => v.checked).length
  );
  const isSigned = useGlobalStore((state) => state.isSigned);
  const toggleSigned = useGlobalStore((state) => state.toggleSigned);
  const changeSigned = () => {toggleSigned(); setValue(prev=>prev+1);};
    return(
<header>
  <nav>
    <ul>
      <li>
        <p>Home</p>
      </li>
      <li>
        <p>Profile</p>
      </li>
      <li>
        <p>Search</p>
      </li>
      <li>
        <div>
        {!(location.pathname == "/cart") ? (<>
              {!tovarsCheckedAmount ? null : <p>{tovarsCheckedAmount}</p>}
              <button onClick={() =>  navigate("/cart")}>to Cart</button>
            </>
            ) : (
              <button onClick={() => navigate("/")}>to Home</button>
            )}
            {isSigned ? (
                <>
                  <button onClick={changeSigned}>Login</button>
                </>
              ) : (
                <>
                  <button onClick={changeSigned}>Logout</button>
                </>
              )}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  )
}
