import server from "./server";
import colors from 'colors';
const port = Number(process.env.PORT) || 3700;

server.listen(port, () => console.log(colors.blue.bold(`Servidor funcionando en el puerto: ${port}`)));