const EventEmitter = require('events');


class FileProcessingError extends Error {
  constructor(message) {
    super(message);
    this.name = "FileProcessingError";
  }
}


class FileUploadProcessor extends EventEmitter {
  startUpload() {
  
    this.emit('upload-started');
    
    
    const randomNumber = Math.random();
    if (randomNumber > 0.8) {
  
      this.emit('error', new FileProcessingError('Random number exceeded threshold'));
    } else {
      
      this.emit('upload-completed');
      this.processFile(); 
    }
  }

  processFile() {
    
    this.emit('processing-started');
    
    
    setTimeout(() => {

      this.emit('processing-completed');
    }, 3000); 
  }
}


const fileUploader = new FileUploadProcessor();


fileUploader.on('upload-started', () => console.log('File upload has started.'));
fileUploader.on('upload-completed', () => console.log('File upload is complete.'));
fileUploader.on('processing-started', () => console.log('File processing has started.'));
fileUploader.on('processing-completed', () => console.log('File processing is complete.'));
fileUploader.on('error', (error) => console.error(`Error: ${error.message}`));

fileUploader.startUpload();
