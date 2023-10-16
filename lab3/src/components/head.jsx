export default function Header({tovarCheckedAmount,setIsInCart,isInCart})
{
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
          {!isInCart ? ( <>
              {!tovarCheckedAmount ? null : <p>{tovarCheckedAmount}</p>}
              <button onClick={() => setIsInCart((prev) => !prev)}>to Cart</button>
            </>
            ) : (
              <button onClick={() => setIsInCart((prev) => !prev)} >Home</button>
            )}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  )
}
