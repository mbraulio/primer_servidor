const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor

// Configurar la carpeta de recursos estáticos (tu sitio web HTML y CSS)
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web en ejecución en el puerto ${port}`);
});

app.get('/',(req, res)=> {
    res.sendFile(__dirname + '/public/index.htm')
});
