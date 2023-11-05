import { create } from "zustand";

const rateUSDToUAH = 40;
  const tovars =[
    {name:'Iphone15', 
     checked: false,
     desc:"..........................",
     price: 800,
     valuta: "USD"},
     {name:'Iphone14',
     checked: false,
     desc:"..........................",
     price: 700,
     valuta: "USD"},
    {name: 'Airpods',
    checked: false,
    desc:"..........................",
    price: 130,
    valuta: "USD"},
    {name: 'Samsung S21',
    checked: false,
    desc:"..........................",
    price: 250,
    valuta: "USD"}, 
    {name: 'Pixel 7 pro',
    checked: false,
    desc:"..........................",
    price: 700,
    valuta: "USD"}];
    const useGlobalStore = create((set) => ({
        isSigned: false, 
        rateUSDToUAH,
        tovars,
      toggleItemChecked: (idx) => {
      set((state) => {
        const updatedTovars = [...state.tovars];
        updatedTovars[idx].checked = !updatedTovars[idx].checked;
        return { tovars: updatedTovars };
      });
    },
    toggleSigned: () =>
      set((state) => ({
        isSigned: !state.isSigned,
      })),
    setCheckedTovars: () => {
      set((state) => {
        const items = JSON.parse(localStorage.getItem("checkedTovars"));
        const updatedTovars = state.tovars.map((tovar) => ({
          ...tovar,
          checked: items.some((item) => item == tovar.id),
        }));
        return { tovars: updatedTovars };
      });
    },
  }));
  export default useGlobalStore;