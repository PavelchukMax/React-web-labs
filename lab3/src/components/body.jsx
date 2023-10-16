export default function Body({tovars, setTovars, rateUSDToUAH})
{
  const changeCheck = (idx) => {
    const updateTovar = [...tovars];
    const isCurrentTovarhecked = updateTovar[idx].checked;
    updateTovar[idx].checked = !isCurrentTovarhecked;
    setTovars(updateTovar);};
 
  return( 
  <body className="App-body"> 
 
    {tovars.map((item, idx) => (
        <section
          key={idx}
          className={item.checked ? "checked" : null}
          onClick={() => changeCheck(idx)}>
          <p>{item.price} {item.valuta}  {item.price*rateUSDToUAH} UAH</p>
          {item.checked ? <p>checked</p> : null}
          <p>{item.name}</p>
        </section>))}
 
  </body>
  )
}
