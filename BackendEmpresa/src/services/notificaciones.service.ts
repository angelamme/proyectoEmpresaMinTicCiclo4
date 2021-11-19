import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB
  // POR FAVOR QUITAR EL TOKEN CUANDO SE VAYA A SUBIR EL CÓDIGO A GITHUB

  EnviarNotifiacionesPorSMS(message: string, receiver: string):void{
    console.log("INGRESO AL MÉTODO")

    const accountSid = 'ACdbb427d4e1267732aef393562bc25867'; // Your Account SID from www.twilio.com/console
    const authToken = ''; // Your Auth Token from www.twilio.com/console
    const toNumber = receiver // Receiver - You can add more than one in Twilio
    const fromNumber = '+14706194311' // // Sender - From a valid Twilio number

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: message,
        to: toNumber,
        from: fromNumber, 
      })
      .then((message:any) => console.log(message.sid));
  }
}