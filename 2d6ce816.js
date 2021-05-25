import{h as t,T as e,_ as n,a as s,n as i,e as a}from"./a26b63a4.js";let o,r,u=t=>t,l=class extends t{constructor(){super(...arguments),this.inputvalue=""}onKeyup(t){const e=t.target;this.inputvalue=e.value}onClearText(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("input");e&&(e.value="",this.inputvalue="")}onSetText(t){var e;const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input");n&&(n.value=t.detail,this.inputvalue=t.detail)}render(){return e(o||(o=u`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${0} />

      <events-child2
        .message=${0}
        @clear-text=${0}
        @set-text=${0}
      ></events-child2>
    `),this.onKeyup,this.inputvalue,this.onClearText,this.onSetText)}};n([s()],l.prototype,"inputvalue",void 0),l=n([i("arcady-events2")],l);let v=class extends t{constructor(){super(...arguments),this.message=""}fireClearTextEvent(){const t=new CustomEvent("clear-text");this.dispatchEvent(t)}fireSetTextEvent(){const t=new CustomEvent("set-text",{detail:"Arcady"});this.dispatchEvent(t)}render(){return e(r||(r=u`
      <p>Live typing value: "${0}"</p>
      <button @click=${0}>Clear text in parent</button>
      <button @click=${0}>Set text to "Arcady"</button>
    `),this.message,this.fireClearTextEvent,this.fireSetTextEvent)}};n([a({type:String})],v.prototype,"message",void 0),v=n([i("events-child2")],v);export{v as EventsChild,l as EventsParent};
