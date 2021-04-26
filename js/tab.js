const tabsBtn = document.querySelectorAll('.tabs__item');
const tabsItem = document.querySelectorAll('.tabs__block')

tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item){
      item.classList.remove('tabbed');
    });
    tabsItem.forEach(function(item){
      item.classList.remove('open');
    });

    currentBtn.classList.add('tabbed');
    currentTab.classList.add('open');
  })
})
