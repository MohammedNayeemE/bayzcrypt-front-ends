import './Verifyseed.css';
import { useReducer, useState } from 'react';

const reducer = (state ,action)=>{
    switch(action.type){
        case 'update':
            return {...state , [action.name]:action.value};
        default:
            return state;
    }
}

const VerifySeed = () => {
const [isCorrect , setisCorrect] = useState(false);
const initState = {
    first: '',
    second: '',
    third: '',
    four: '',
    five: '',
    six: '' ,
    seven:'',
    eight:'' ,
    nine :'' ,
}

const [state , dispatch] = useReducer(reducer , initState);

const handleChange = (e) =>{
    dispatch({type:'update' , name:e.target.name , value:e.target.value})
}

const handleSubmimt = () =>{
    if(Object.keys(state).length !== 9) {
        setisCorrect(true);
    }
    else {
        setisCorrect(false);
    }
} 
  return (
    <>

      <section className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
              margin: '10px 0',
              fontSize: '2rem',
              textAlign: 'center',
              fontFamily:'Plus Jakarta Sans'
            }}>
                Verify recovery passphrase
            </h1>

            <div style={{
              maxWidth: '90%',
              padding: '10px',
              textAlign: 'center',
              fontSize: '1rem',
              marginBottom: '5px'
            }}>
              <p style={{fontFamily:'Plus Jakarta Sans'}}>
                Click on the input or press enter to navigate
              </p>
            </div>
            <section style={{
              margin: '10px',
              display:'flex',
              flexDirection:'column',
              fontFamily:'Plus Jakarta Sans'

            }}>
                <div>
                    <p>Input phrase #1 , #2 , #3</p>
                </div>
                <div style={{display:'flex' , flexDirection:'row'}}>
                    <div style={{margin:'5px'}}>
                   <input type="text" name='first' value={state.first} placeholder='1.' style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                   { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" name='second' value={state.second} placeholder='2.' style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                   { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" name='third' value={state.third} placeholder='3.' style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange}/> 
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                </div>
            </section>
            <section style={{
              margin: '10px',
              display:'flex',
              flexDirection:'column'
            }}>
                <div>
                    <p>Input phrase #8 , #7 , #6</p>
                </div>
                <div style={{display:'flex' , flexDirection:'row'}}>
                    <div style={{margin:'5px'}}>
                   <input type="text" name='eight' value={state.eight} placeholder='8.' style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" name='seven' value={state.seven} placeholder='7.'  style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" name='six' value={state.six} placeholder='6.' style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange}/> 
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                </div>
            </section>
            <section style={{
              margin: '10px',
              display:'flex',
              flexDirection:'column'
            }}>
                <div>
                    <p>Input phrase #6 , #4 , #5</p>
                </div>
                <div style={{display:'flex' , flexDirection:'row'}}>
                    <div style={{margin:'5px'}}>
                   <input type="text" placeholder='5.' name='five' value={state.five} style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                                     { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" placeholder='4.' name='four' value={state.four} style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange} />
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
                   <div style={{margin:'5px'}}>
                   <input type="text" placeholder='9.' name='nine' value={state.nine} style={{padding:'8px' , border:'2px solid #458C66' , borderRadius:'6px' , width:'95px'}} onChange={handleChange}/> 
                                      { isCorrect && (<p style={{color:'red'}}>incorrect</p>)}
                   </div>
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
                }} onClick={handleSubmimt}>
                <p style={{
                  margin: '6px'
                }}>Verify my seed phrase</p>
                <img src="eye.svg" alt="eye_icon" />
              </button>

            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default VerifySeed;
