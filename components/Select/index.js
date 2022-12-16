export default class Select extends HTMLElement {
    connectedCallback() {   
        let selector = document.createElement('div');
        selector.style.width = "200px";
        selector.style.height = "25px";
        selector.style.display = "block";
        
        selector.style.borderRadius = "4px"
        selector.style.border = "2px solid #000000";
        selector.style.cursor = "pointer";
        selector.style.position = "relative";
        

        let value = document.createElement('div');
        selector.appendChild(value);
        let WeekList = document.createElement('div');
        WeekList.style.display = 'none';
        WeekList.style.backgroundColor = '#ffffff';
        WeekList.style.border = '1px solid #000000';
        WeekList.style.borderRadius = '3px';
        WeekList.style.zIndex = 99;
        WeekList.style.cursor = "pointer";
        WeekList.style.position = "absolute";
        WeekList.style.top = "26px";
        WeekList.style.width = "100%";
        
        
        let values = this.attributes.values.value.split(" ");
            for (let i = 0; i < values.length; i++) {
                let ChosenValue = document.createElement('div');
                ChosenValue.innerText = values[i];
                ChosenValue.style.padding = "10px";
                
                ChosenValue.onclick = function (e) {
                    value.innerHTML = this.innerHTML;
                    WeekList.style.display = 'none';
                    this.value = this.innerText;
                    e.stopPropagation();
                }
                WeekList.appendChild(ChosenValue);
            }
    
        selector.appendChild(WeekList);
        selector.onclick = function () {
            WeekList.style.display = 'block';
        }
        this.appendChild(selector);
    }
}
customElements.define('alien-select', Select);

