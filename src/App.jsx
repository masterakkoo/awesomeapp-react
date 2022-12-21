import react from 'react';
import Cards from './Cards';
import SD from './SD';
import './index.css';
import Netflix from './Netflix';
import Amazon from './Amazon';
function App() {
  return (
    <>
      <h1 className='he'>LIST OF TOP K-DRAMAS  TILL 2022</h1>
      <div className='main'>
        {SD.map((va) => {
          return (
            <Cards
              image={va.image}
              category={va.category}
              title={va.title}
              link={va.link}
            />);
        })}

      </div>
      <footer>THANKS FOR VISITING</footer>
    </>
  );
}
const fa = 'netflix';
// const favseries = () => {
//   if (fa === 'netflix')
//     return <Netflix />;
//   else if (fa === 'amazon')
//     return <Amazon />;

// }

// function App() {
//   return (
//     <>
//       <h1 className='he'>LIST OF TOP K-DRAMAS  TILL 2022</h1>
//       <div className='main'>
//         {(fa === 'netflix') ? <Netflix /> : <Amazon />}
//       </div>

//     </>
//   );
// }
export default App;