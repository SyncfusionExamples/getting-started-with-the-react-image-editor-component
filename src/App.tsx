import React from 'react';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class App extends React.Component {
  public editorObject !: ImageEditorComponent;
  public openImage() : void {
    this.editorObject.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
  }
  public saveImage() : void {
    this.editorObject.export('PNG', 'Syncfusion');
  }

  render() {
    return(
    <div>
      <div style={{width:'700px', height:'500px'}}>
        <ImageEditorComponent created={this.openImage.bind(this)} 
        ref={imageEditor=>{ this.editorObject = imageEditor as ImageEditorComponent }}>
        </ImageEditorComponent>
      </div>
      <div style={{paddingTop:'20px'}}>
        <ButtonComponent content='Save' cssClass='e-primary' onClick={this.saveImage.bind(this)} >
        </ButtonComponent>
      </div>
    </div>
  );
}
  
}

export default App;
