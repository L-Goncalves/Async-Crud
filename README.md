Instalar JSON SERVER com:

        npm install -g json-server

E instalar browsersync com:
      
       npm install -g browser-sync
        
Executar o Json Server na Pasta Raiz: 

      json-server --watch db.json


Executar para inicializar no browser: 
       
       browser-sync start --server --file . --host --port 5000 --startPath ./telas/lista_cliente.html
