import './Seed.css';
const Seed = () => {

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
              margin: '20px 0',
              fontSize: '3rem',
              textAlign: 'center',
            }}>
              Protect Your Assets - Write Down Your Seed Phrase
            </h1>

            <div style={{
              maxWidth: '90%',
              padding: '10px',
              textAlign: 'center',
              fontSize: '1rem',
              marginBottom: '20px'
            }}>
              <p style={{fontFamily:'Plus Jakarta Sans'}}>
                Your seed phrase is the key to accessing your account and funds. The 12-word phrase acts as a backup to recover your account if you forget your password or lose access. Please write down this phrase in a safe and secure place. This is crucial for the security of your assets.
              </p>
            </div>
            <section style={{
              margin: '10px'
            }}>
              <img src="pen.svg" alt="pen_image" />
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
                }}>See Seed Phase</p>
                <img src="eye.svg" alt="eye_icon" />
              </button>

            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Seed;