
import { renderMenuItems, renderButtons } from "./scripts/ui.js";

// html den gelenler
const menuList = document.querySelector('#menu-list');
const buttonsArea= document.getElementById('buttons');



// sayfanın yükleme anını izleme

document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  fetchMenu();
  
});

// datayı global scope da tanımlandı
let data;

// menu verilerini json dosyasından çeker

async function fetchMenu() {
  const res = await fetch('./db.json');
  data = await res.json();
  console.log(data);
  renderMenuItems(data.menu, menuList);
}

// tıklanılan kategoriyi belirleme

buttonsArea.addEventListener('click', (e)=>{
  if(e.target.id !=='buttons'){
    renderButtons(e.target.innerText);
    // seçili kategorye erişme
  const selected=e.target.dataset.category;

  if(selected==="all"){
    // filtreleme yapma apiden gelen verileri ekrana bas
    renderMenuItems(data.menu ,menuList);
  }
  else
  {
    const filtred = data.menu.filter((i) =>i.category===selected);
    // filtrelenmiş kategoriyi ekrana bas
    renderMenuItems(filtred ,menuList)
  }

  }

});
