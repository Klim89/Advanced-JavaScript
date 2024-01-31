const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");
const tableSelectEl = document.querySelector("#table-color");
const chairSelectEl = document.querySelector("#chair-material");

saveBtn.addEventListener("click", saved);
loadBtn.addEventListener("click", loaded);
clearBtn.addEventListener("click", cleared);

function saved(event) {
  Cookies.set("tableConfig", tableSelectEl.value);
  Cookies.set("chairConfig", chairSelectEl.value);
  alert("настройки сохраненны");
}

function loaded(event) {
  if (!Cookies.get("tableConfig")) {
    return alert("печенек нет");
  }
  tableSelectEl.value = Cookies.get("tableConfig");
  chairSelectEl.value = Cookies.get("chairConfig");
  alert("настройки загружены");
}

function cleared(event) {
  Cookies.remove("tableConfig");
  Cookies.remove("chairConfig");
  alert("Съели все печеньки)");
}
document.addEventListener("DOMContentLoaded", loaded);
