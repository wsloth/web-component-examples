import{h as e,T as t,_ as s,a as n,n as a,e as r}from"./ad8b5b83.js";let p,u,i=e=>e,l=class extends e{constructor(){super(...arguments),this.inputvalue=""}onKeyup(e){const t=e.target;this.inputvalue=t.value}render(){return t(p||(p=i`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${0} />

      <events-child .message=${0}></events-child>
    `),this.onKeyup,this.inputvalue)}};s([n()],l.prototype,"inputvalue",void 0),l=s([a("arcady-events")],l);let o=class extends e{constructor(){super(...arguments),this.message=""}render(){return t(u||(u=i` <p>Live typing value: "${0}"</p> `),this.message)}};s([r({type:String})],o.prototype,"message",void 0),o=s([a("events-child")],o);export{o as EventsChild,l as EventsParent};
