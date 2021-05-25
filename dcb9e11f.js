import{h as e,T as t,r as a,_ as s,n as r}from"./a26b63a4.js";let o,n,l=e=>e,m=class extends e{onSubmit(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries());fetch("https://api.mywebsite.com/newuser",{method:"POST",body:JSON.stringify(a)}).then(console.log)}render(){return t(o||(o=l`
      <form name="signupForm" @submit=${0}>
        <label for="email">Email address:</label>
        <input name="email" type="email" />

        <label for="age">Age:</label>
        <input name="age" type="number" />

        <label for="password">Password:</label>
        <input name="password" type="password" />

        <button type="submit">Send</button>
      </form>
    `),this.onSubmit)}};m.styles=a(n||(n=l`
    label {
      display: block;
      margin-top: 15px;
    }
  `)),m=s([r("arcady-forms")],m);export{m as FormsComponent};
