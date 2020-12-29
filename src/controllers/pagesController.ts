import express from 'express';

class PagesController {
    public path = '/pages';
    public router = express.Router();
    
    constructor() {
      this.intializeRoutes();
    }
   
    public intializeRoutes() {
      this.router.get(this.path, this.getRoutes);
    }

    getRoutes = async (request: express.Request, response: express.Response) => {
        try {


          //Aqui buscariamos as rotas/pages no banco de dados
          
          const routes = [
              {"title": "Home", "icon": "home", "url": "page://home", "content": [
                { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} }] },
              {"title": "Camera","icon": "bank","url": "page://camera","content": [
                { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
                { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
                { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
                { "type": "post", "title": "Taxas e Tarifários", "properties": {"categories": ["taxes"]} }]
              },
              {"title": "Comunicar", "icon": "forum", "url": "page://comunicar", "content": []},
              {"title": "Proteção civil", "icon": "alert", "url": "page://protecao-civil", "content": [] },
              {"title": "Covid", "icon": "bandage", "url": "page://covid", "content": [
                { "type": "image", "title": "Acão em Mato Grosso", "properties": {"categories": ["action covid"]} },
              ] }, 
              {"title": "Agenda", "icon": "calendar", "url": "page://agenda", "content": [] }
            ];
  
            response.status(200).send(routes);
        } catch (error) {
            response.status(400).send(error);
        }
          

    }

   
  }
   
  export default PagesController;