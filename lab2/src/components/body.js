function ChecksList(prop){
  return <input class="checkbox" type="checkbox" value={prop.value}/>
}
function Body(prop)
{
  const tovars = prop.tovar;
  const checksList = tovars.map((tovar) =>
    <ChecksList id={tovar.id} value={tovar.value} />);
  return( 
  <body className="App-body"> 
  {checksList}  
  </body>
  )
}
export default Body