const qrCode= require('./assets/image-qr-code.png')
export const App = () =>
        <div role={'application'} className="App">
            <section className={'card'}>
                <img src={qrCode} alt="qr-code"/>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </section>
        </div>




