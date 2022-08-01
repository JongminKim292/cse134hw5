var item = document.createElement('button');
item.setAttribute("id","btnCount");
item.innerHTML = "Click here!"
class ButtonCount extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(item);
        this.count = 0;
    }
    connectedCallback(){
        this.shadowRoot.getElementById("btnCount").addEventListener(('click'), () => this.isClicked());
        }

        isClicked(){
            this.count++;
            this.shadowRoot.querySelector('button').innerText = `Times Clicked : ${this.count}`;
        }
    };
customElements.define('button-count', ButtonCount);







