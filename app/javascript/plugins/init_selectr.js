import Selectr from "mobius1-selectr";

const initSelectr = () => {
  if (document.getElementById("selectr")) {
    new Selectr(document.getElementById("selectr"))
  }
};

export { initSelectr }
