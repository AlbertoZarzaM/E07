/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 */
import express from 'express';

// import { validateLoginSchema } from '../../login/login-model.js';
// import { loginInterface } from '../../login/login.js';
// import { LoginModel } from '../../login/login-model.js';
import { UserModel } from '../../users/users-model.js';


export const loginRouter = express.Router();


 loginRouter.post('/login/authenticate', async (req, res) => {
  
    try {
  
      console.log('Petición POST a /login');
      console.log(req.body.userName);
      if(req.body.userName && req.body.password) {
        // const login: loginInterface = {
        //   userName: req.body.userName,
        //   password: req.body.password,
        // }
          //const loginSchemaValidation = await validateLoginSchema(login);
          const user = await UserModel.findOne({userName: req.body.userName});
          // if (loginSchemaValidation.code !== 0) {
          //   return res.status(400).send(loginSchemaValidation);
          // }
          console.log(user);
          if(user && user.password === req.body.password){
            // const newLogin = new LoginModel(login);
            // const loginMessage = await newLogin.save();
            return res.status(201).send({code: 0, message: user});
          } else{
            console.log("Contraseña incorrecta");
            return res.status(404).send({code: 4, message: "Contraseña incorrecta"});
          }
  
      } else {
        return res.status(400).send({code: 1, message: "Faltan campos obligatorios"});
      }
      //return res.status(201).send({user: "usuario", message: "mensaje"});
    }
    catch(error) {
      return res.status(500).send(
        {
          error: error.message,
          stack: error.stack
        }
      );
    }
  
 });


