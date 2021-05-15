import{h as e,T as t,_ as n,a as s,n as a,e as r}from"./ad8b5b83.js";let i,u,l=e=>e,o=class extends e{constructor(){super(...arguments),this.inputvalue=""}onKeyup(e){const t=e.target;this.inputvalue=t.value}onClearText(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input");t&&(t.value="",this.inputvalue="")}render(){return t(i||(i=l`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${0} />

      <events-child2
        .message=${0}
        @clear-text=${0}
      ></events-child2>
    `),this.onKeyup,this.inputvalue,this.onClearText)}};n([s()],o.prototype,"inputvalue",void 0),o=n([a("arcady-events2")],o);let p=class extends e{constructor(){super(...arguments),this.message=""}fireClearTextEvent(){const e=new CustomEvent("clear-text");this.dispatchEvent(e)}render(){return t(u||(u=l` <p>Live typing value: "${0}"</p>
      <button @click=${0}>Clear text in parent</button>`),this.message,this.fireClearTextEvent)}};n([r({type:String})],p.prototype,"message",void 0),p=n([a("events-child2")],p);export{p as EventsChild,o as EventsParent};
