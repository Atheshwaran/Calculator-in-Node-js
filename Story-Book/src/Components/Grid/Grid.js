import React from 'react';
import './Grid.css'

function Grid() {


  const needBox1 = () => {

    let box = 0;
    let arr = [];

    while (box < 8) {
      arr.push(<div className='box1'> </div>);
      box++;
    }

    return arr;

  }

  const needBox2 = () => {

    let box = 0;
    let arr = [];

    while (box < 8) {
      arr.push(<div className='box2'> </div>);
      box++;
    }

    return arr;

  }


  return (

    <>

      <div className='container' >

        {
          needBox1().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox2().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox1().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox2().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox1().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox2().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox1().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }

        {
          needBox2().map((cell, index) => {
            return (<> {cell}  </>)
          })
        }


      </div>
    </>

  )
}

export default Grid;