import useGlobalStore from "../store/store";
import useLocalStorage from "../hooks/useLocalStorage";
function Landing() {
    const tovars = useGlobalStore((state) => state.tovars);
    const toggleItemChecked = useGlobalStore((state) => state.toggleItemChecked);
    const [checkedTovars, setCheckedTovars] = useLocalStorage(useGlobalStore((state) => state.tovars.filter((v) => v.checked)),"checkedTovars");
    const changeChecked = (idx) => {
      toggleItemChecked(idx);
      setCheckedTovars(tovars.filter((v) => v.checked).map((v) => v.id));
    };
    return (
      <>
        <div className="wrapper">
          {tovars.map((item, idx) => (
            <section
              key={idx}
              className={item.checked ? "checked" : null}
              onClick={() => changeChecked(idx)}
            >
              <p>
                {item.price} {item.valuta}
              </p>
              {item.checked ? <p>Yes</p> : null}
              <p>{item.name}</p>
            </section>
          ))}
        </div>
      </>
    );
  }
  
  export default Landing;