// import react from 'react';
// import reactdom from 'react-dom';
// reactdom.render("MY NAME IS AKASH",'knha dikhana hai','callback function')
// to render more than one elements the one way is use a div or square bracket []
// reactdom.render(<div>
//   <h1>HELLO WORLD</h1>
//   <h2>MY NAME IS AKASH VERMA</h2>
// </div>
//   , document.getElementById('root'));


// reactdom.render(
//   [
//   <h1>HELLO WORLD</h1>,
//   <h2>MY NAME IS AKASH VERMA</h2>
// ]
//   , document.getElementById('root'));

// we can also use react.fragment to avoid use of extra div
// we can also use <> in place of <react.fragments>
// reactdom.render(
//   <react.Fragment>
//     <h1>HELLO WORLD</h1>,
//     <h2>MY NAME IS AKASH VERMA</h2>
//   </react.Fragment>
//   , document.getElementById('root'));
// reactdom.render(
//   <>
//     <h1>HELLO WORLD</h1>,
//     <h2>MY NAME IS AKASH VERMA</h2>
//   </>
//   , document.getElementById('root'));
//babel is a modern java scipt compiler use tp convert the moder javascirpt into old one
// var v = document.createElement('h1')
// v.innerHTML = "HELLO WORLD"
// document.getElementById('root').append(v)


// #CHALLENGE 1


// import react from 'react';
// import reactdom from 'react-dom';
// reactdom.render(
//   <>
//     <h1>WELCOME TO THE LIST OF TOP MOVIES AVAILABLE ON NETFLIX</h1>
//     <p><h2>list of the movies is : </h2></p>
//     <ol>
//       <h2><li>PHIR HERA PHERI</li></h2>
//       <h2><li>KHATTA MEETHA</li></h2>
//       <h2><li>KOI MIL GAYA</li></h2>
//       <h2><li>KAL HO NA HO</li></h2>
//       <h2><li>DHRISHAYAM</li></h2>
//     </ol>
//   </>,
//   document.getElementById('root')
// )



// import react from 'react';
// import reactdom from 'react-dom';
// const name = "AKASH";
// // we use the pair of curly braces to write javascript inside th jsx written inside a javascipt
// reactdom.render(
//   <>
//     <h1>
//       MY NAME IS {name}
//     </h1>
//     <h1>
//       MY age is {7 * 3}
//     </h1>
//   </>
//   ,


//   document.getElementById('root')
// )



// #CHALLENGE 2


// import react from 'react';
// import reactdom from 'react-dom';
// const d = new Date();
// const dd = ['Sunday', 'monday', 'tuesday', 'Wednesday', 'thursday', 'friday', 'saturday'];
// const [date, month, year] = [d.getDate(), d.getMonth(), d.getFullYear()];
// const day = d.getDay();
// const [hour, min, sec] = [d.getHours(), d.getMinutes(), d.getSeconds()];
// reactdom.render(

//   <>
//     <h1>MY NAME IS AKASH VERMA</h1>
//     <h2>{`TODAY : ${dd[day]}`}</h2>
//     <h2>{`DATE : ${date}/${month}/${year} `}</h2>
//     <h2>{`TIME : ${hour}:${min}:${sec}`}</h2>
//   </>
//   ,
//   document.getElementById('root')

// )




// jsx attributes <a href = " "> </a>


// import react from 'react';
// import reactdom from 'react-dom';
// import './index.css'
// const name = "AKASH";
// const i1 = "https://picsum.photos/400/500";
// const i2 = "https://picsum.photos/399/500";
// const i3 = "https://picsum.photos/401/500";
// const lii = "https://www.google.com";
// reactdom.render(
//   <>
//     <h1 className='mine'>WELCOME THIS IS {name}</h1>
//     <div className='first'>
//       <img src={i1} alt='' />
//       <img src={i2} alt='' />
//       <img src={i3} alt='' />
//     </div>
//   </>
//   ,
//   document.getElementById('root')
// )
// instead of using external css we can use inline css by creating object of property
// in which object name will be similar to class name or id name

// const mine = {
//   color: 'black',
//   backgroundColor: 'red',
//   margin: 'auto',
//   width: '600px',
//   textAlign: 'center',
//   textShadow: '0px 10px 10px blue',
//   boxShadow: '10px 10px 10px black',
//   fontFamily: '"IBM Plex Mono", monospace',
//   fontSize: '2rem',
//   textTransform: ' capitalize'
// }
// const first = {

//   margin: '20px',
//   padding: '10px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }
// const mar = {
//   margin: '10px',
//   padding: '10px',
//   boxShadow: '10px 10px 10px black'
// }
// reactdom.render(
//   <>
//     {/* <h1 contentEditable="true">WELCOME THIS IS {name}</h1> */}
//     <h1 style={mine}>welcome this is {name}</h1>
//     <div style={first}>
//       <img src={i1} alt='' style={mar} />
//       <img src={i2} alt='' style={mar} />
//       <img src={i3} alt='' style={mar} />
//     </div>
//     {/* <a href={lii} target="_Google"><img src={i3} alt='' /></a> */}
//   </>
//   ,
//   document.getElementById('root')
// )




// #components in reactjs


// import react from 'react';
// import reactdom from 'react-dom';

// import App from './App';
// import Di from './Di';

// const p = {
//   display: 'flex'
// };
// const d1 = {
//   content: 'my name is akash'
// }
// reactdom.render(
//   <>
//     <App />
//     <div style={p}>
//       <Di color='red' />
//       <Di />
//       <Di />
//     </div>
//   </>
//   ,
//   document.getElementById('root')
// )






// CHALLENGE 4


// import react from 'react';
// import reactdom from 'react-dom';

// import u, { m, dop } from './Di';
// import *as a from './Di';

// for importing many variables from jsx we use * as
// hera a is the onject to call other variables


// reactdom.render(
//   <>
//     <h2>{`WELCOME THIS IS ${a.default}`}</h2>
//     {/* we have to write once the deafault */}
//     <h2>{`WELCOME THIS IS ${a.m}`}</h2>
//     <h2>{`WELCOME THIS IS ${a.dop()}`}</h2>
//   </>,
//   document.getElementById('root')
// )

// reactdom.render(
//   <>
//     <h2>{`WELCOME THIS IS ${u}`}</h2>
//     <h2>{`WELCOME THIS IS ${m}`}</h2>
//     <h2>{`WELCOME THIS IS ${dop()}`}</h2>
//   </>,
//   document.getElementById('root')
// )







// Calculator 


// import React from "react";
// import ReactDOM from "react-dom";
// import ad, { sub, mult, d } from './Di';

// ReactDOM.render(
//   <>
//     <ul>
//       <h2><li>{ad(10, 20)}</li></h2>
//       <h2><li>{sub(10, 20)}</li></h2>
//       <h2><li>{mult(10, 20)}</li></h2>
//       <h2><li>{d(10, 20)}</li></h2>
//     </ul>
//   </>,
//   document.getElementById('root')
// )





import React from 'react';
import Reactdom from 'react-dom';
import './index.css';
import App from './App';

Reactdom.render(<App />, document.getElementById('root'))

{/* <link rel="stylesheet" media="screen and (max-width:1600px)" href="css/phone.css"> */ } module.exports = {

};


