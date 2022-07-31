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








// const inputhtml = document.createElement('template');
// inputhtml.innerHTML = `<button id="cntBtn"></button>`;

// //define class
// class ButtonCount extends HTMLElement{
//     //default generating
//     constructor(){
//         super();
//         this.hitNum = 0;
//         this.attachShadow({mode: 'open'});
//         this.shadowRoot.appendChild(inputhtml.content.cloneNode(true));
//         this.shadowRoot.querySelector('button').innerText = this.getAttribute('name') + this.hitNum;
//     }
//     //click Listener
//     connectedCallback(){
//         this.shadowRoot.getElementById('cntBtn').addEventListener('click', () => this.update());
//     }
//     //update
//     update(){
//         this.hitNum++; 
//         this.shadowRoot.querySelector('button').innerText = this.getAttribute('name') + this.hitNum;
//     }
// }

// //make instance
// customElements.define('button-count', ButtonCount);


