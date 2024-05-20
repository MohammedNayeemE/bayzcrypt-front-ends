import './Seedstore.css';
import { useState } from 'react';
const SeedStore = () => {
    const [isRevelead , setisRevelead] = useState(false);
    const handleReveal = () =>{
        setisRevelead(true);
    
    }
      const buttonStyle = {
    border: '2px solid #7bf80a' ,
    padding: '10px',
    borderRadius: '10px',
    fontSize: '1.25rem',
    color: '#458C66',
    filter: 'none',
    transition: 'filter 0.5s ease',
    cursor:'pointer'

  };
  return (
    <>

      <section className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'2px'
      }}>


        <section className="" style={{
          display: 'flex',
          width: '90%',
          maxWidth: '600px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          border: '2px solid white',
          borderRadius: '17px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
        }}>

          <img src="code.svg" alt="code-ele-image" className="bg_image" style={{

            position: 'absolute',
            top: '150px',
            left: '-100px',
            opacity: '1',
            zIndex: '-1'


          }} />
          <img src="lock.svg" alt="lock_image" className="bg_image" style={{

            position: 'absolute',
            left: '-200px',
            opacity: '1',
            zIndex: '-1'

          }} />

          <img src="whitelogo.svg" alt="whitelogo" className="bg_image" style={{
            opacity: '0.5',
            position: 'absolute',
            top: '0',
            right: '-250px',
            zIndex: -1,
          }} />
          <img src="whitelogo.svg" alt="whitelogo" className="bg_image" style={{
            opacity: '0.5',
            position: 'absolute',
            zIndex: -1,
            bottom: 0,
            left: '-220px'
          }} />
          <section style={{
            maxWidth: '50%'
          }}>
            <img src="s_color_lock.svg" alt="small_logo" />
          </section>
          <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '90%'
          }}>
            <h1 style={{
              margin: '20px 0',
              fontSize: '3rem',
              textAlign: 'center',
            }}>
              Write/Store seed phrase
            </h1>

            <div style={{
              width:'100%',
              border:'2px solid #458C66',
              borderRadius :'17px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '1rem',
              marginBottom: '20px',
              backgroundColor: isRevelead ? '#B66DFF0A' : 'rgba(182, 109, 255, 0.06)',
              position:'relative',
              filter : isRevelead ? 'none' : 'blur(8px)',
              transition: 'background-color 0.5s ease, filter 0.5s ease'
            }}>

                <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-evenly'}}>
                    <div style={{fontSize:'1.25rem'}}>

                        <p>1.orange</p>
                        <p>2.umbrella</p>
                        <p>3.spaceship</p>
                        <p>4.mountain</p>
                        <p>5.laptop</p>
                        <p>6.moon</p>

                    </div>
                    <div style={{fontSize:'1.25rem'}}>
                        <p>7.elephant</p>
                        <p>8.banana</p>
                        <p>9.river</p>
                        <p>10.chair</p>
                        <p>11.galaxy</p>
                        <p>12.apple</p>
                    </div>
                </div>
                <div style={{cursor:'pointer'}}>
                    <img src='copy.svg' alt='copy_clipboard'/>
                </div>


            </div>
               <div style={{position:'absolute' , zIndex:'1' , top:'50%' , left:'50%'  , transform:'translate(-50%, -50%)' , }} >
                {
                    !isRevelead && (
                <button style={buttonStyle} onClick={handleReveal}>REVEAL</button>
                    )
                }

                </div> 
            <section style={{
              margin: '10px',
              textAlign:'center'
            }}>
                <div>
                    <p style={{color:'#6f6f6f'}}>
                        Please record these phrases in a correct order using the corresponding numbers.
                        <span style={{color:'black'}}>NOTE:they are case sensitive</span>
                    </p>
                </div>
            </section>
            <section
              style={{
                width: '100%',
                margin: '20px 0',

              }}
            >
              <button
                style={{
                  color: 'white',
                  background: '#458C66',
                  border: 'none',
                  padding: '15px',
                  width: '100%',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <p style={{
                  margin: '6px'
                }}>NEXT</p>
              </button>

            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default SeedStore;
