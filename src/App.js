import React from 'react';
import ImageMasonry from 'react-image-masonry';
import logo from './LOGO/logo.svg';

var listOfImages =[];

class App extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../UPLOAD_IMAGES/', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(
            <div>
                <img class="logo" src={logo} />
                <h1 className="product-intro">recent projects<span style={{color: "red"}}>.</span></h1>
                <p>This is where you put a little blurb about why you're sharing these images.</p>
                <br></br><br></br>

                <div className="product-container">
                        <ImageMasonry numCols={3} forceOrder={false} className="image-container">
                        {
                                listOfImages.map(
                                (image, index) =>    <img className="tile" key={index} src={image} alt="info"></img>
                                )
                        }
                        </ImageMasonry>
                        </div>
                        <div>
                        <h6 class="right">Made by <a href="https://github.com/printerscanner">printer_scanner</a>.</h6></div>

                </div>
        )
    }
}

export default App;
