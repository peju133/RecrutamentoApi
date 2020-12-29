import express from 'express';
import bodyParser from 'body-parser';

class App {
    
  public app: express.Application;
  public port: number;

  constructor(controllers:any, port:number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }



  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended:true}));
  }
 
  private initializeControllers(controllers:any) {
    controllers.forEach((controller:any) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
   return this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
    
  }

}
 
export default App;