import{h as s,T as e,r as t,_ as i,e as a,n as d}from"./ad8b5b83.js";let r,n,h,o,g=s=>s,p=class extends s{constructor(){super(...arguments),this.message="Data binding test!"}render(){return e(r||(r=g`
      <h2>This is the parent</h2>
      <data-binding-child .message=${0}></data-binding-child>
    `),this.message)}};p.styles=t(n||(n=g`
    :host {
      border: 2px solid red;
    }
  `)),i([a({type:String})],p.prototype,"message",void 0),p=i([d("arcady-databinding")],p);let l=class extends s{constructor(){super(...arguments),this.message=""}render(){return e(h||(h=g`
      <h3>This is the child</h3>
      <p>This is the message via data binding: "${0}"</p>
    `),this.message)}};l.styles=t(o||(o=g`
    :host {
      display: block;
      border: 2px solid green;
    }
  `)),i([a({type:String})],l.prototype,"message",void 0),l=i([d("data-binding-child")],l);export{l as DataBindingChild,p as DataBindingParent};