import express from 'express';

class PostsController {
    public path = '/posts';
    public router = express.Router();
    
    constructor() {
      this.intializeRoutes();
    }
   
    public intializeRoutes() {
      this.router.post(this.path, this.getPosts);
    }

    getPosts = async (request: express.Request, response: express.Response) => {
        try {

          //Aqui buscariamos os posts no banco de dados
          const { category } = request.body;
          const posts = [
            {"title": "O Papel do novo centro da juventude para todos", "category": "messages", "content": "..."},
            {"title": "Mensagem de Natal 2020", "category": "messages", "content": "..."},
            {"title": "Obras na avenida 25 de Abril finalizadas atempadamente", "category": "news", "content": "..."},
            {"title": "Piscinas municipais abrem portas as cidadãos carenciados", "category": "news", "content": "..."},
            {"title": "Horários dos serviços municipais", "category": "schedules", "content": "..."},
            {"title": "Horários das instalações desportivas", "category": "schedules", "content": "..."},
            {"title": "Atendimento ao cliente no serviço de águas", "category": "schedules", "content": "..."},
            {"title": "Tarifas de licenciamento", "category": "taxes", "content": "..."},
            {"title": "Tarifários de água do concelho", "category": "taxes", "content": "..."},
            {"title": "Taxas de saneamento", "category": "taxes", "content": "..."},
            {"title": "Acão da covid em Mato Grosso", "category": "action covid", "content": [
              { "details":"Imagem do covid 1","link":"https://s2.glbimg.com/6_yEZHLF4-tdhRngMi1U_DxslRM=/0x0:1024x683/1080x0/smart/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/i/l/AdDYKKRDavyn1ZBUnaOg/tch5376.jpg"},
              { "details":"Imagem do covid 2","link":"https://s2.glbimg.com/0P_n_-cvRgcRAGeDzHRiJz3zCAk=/0x0:1024x768/1080x0/smart/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/3/q/UjJxE0SeCnq8i23XUNcA/whatsapp-image-2020-10-07-at-16.11.19.jpeg"}
            ]}
          ];

          const result = posts.filter(e => category.includes(e.category));
            
            response.status(200).send(result);
        } catch (error) {
            response.status(400).send(error);
        }
          

    }

   
  }
   
  export default PostsController;