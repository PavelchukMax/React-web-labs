export default function Cart({ checkedTovar, rateUSDToUAH}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ваш відгук:", event.target.comment.value);
    alert(`Ваш відгук: "${event.target.comment.value}" додано успішно!`);
  };
  return (
    <div className="wrappercart">
      {checkedTovar.length ? (
        checkedTovar.map((item, id) => (
          <form onSubmit={handleSubmit} key={id}>
            <section>
              <p>{item.name}</p>
              <p>
                {item.price} {item.valuta} {item.price*rateUSDToUAH} UAH
              </p>
              <p>{item.desc}</p>
              <textarea
                required
                name="comment"
                placeholder="Write your opinion"
              ></textarea>
              <button variant="outlined" type="submit">
                Set comment
              </button>
            </section>
          </form>
        ))) : (<p>No tovar</p>
      )}
    </div>
  );
}