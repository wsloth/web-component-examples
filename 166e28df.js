import{h as i,T as t,r as a,_ as e,n as s}from"./a26b63a4.js";let o,l,r,n,c=i=>i,d=class extends i{render(){return t(o||(o=c`
      <arcady-card>
        <h1 slot="title">Clickbaity title</h1>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          augue vel diam facilisis gravida. Aliquam lobortis quam orci, sit amet
          finibus elit porta vitae. Integer in ultricies enim. In hac habitasse
          platea dictumst. Mauris eu nulla non justo facilisis commodo in id
          nunc. Morbi imperdiet at metus ullamcorper suscipit. Nulla congue
          sapien a nulla facilisis iaculis.
        </p>
      </arcady-card>

      <arcady-card>
        <h1 slot="title">World says "hello" back</h1>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          augue vel diam facilisis gravida. Aliquam lobortis quam orci, sit amet
          finibus elit porta vitae. Integer in ultricies enim. In hac habitasse
          platea dictumst. Mauris eu nulla non justo facilisis commodo in id
          nunc. Morbi imperdiet at metus ullamcorper suscipit. Nulla congue
          sapien a nulla facilisis iaculis.
        </p>
        <a href="...">Click here to learn more</a>
      </arcady-card>
    `))}};d.styles=a(l||(l=c`
    arcady-card {
      margin-bottom: 30px;
    }
  `)),d=e([s("arcady-slots")],d);let u=class extends i{render(){return t(r||(r=c`
      <slot name="title"></slot>
      <slot name="content"></slot>
      <!-- Any additional content will be rendered in here -->
      <slot></slot>
    `))}};u.styles=a(n||(n=c`
    :host {
      display: block;
      background-color: white;
      padding: 15px;
      border-radius: 15px;
      box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
    }

    ::slotted(h1) {
      margin: 15px 0 0 0;
      font-family: cursive;
    }

    ::slotted(a) {
      display: block;
      padding-top: 15px;
      margin-top: 15px;
      border-top: 1px solid #e4e4e4;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      color: crimson;
    }
    ::slotted(a)::after {
      margin-left: 10px;
      content: '>';
    }
  `)),u=e([s("arcady-card")],u);export{u as CardComponent,d as SlotsComponent};
