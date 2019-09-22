import { Result } from '../../models/result.model';
import { DatabaseUtil } from './database.util';
import { UserUtil } from './user.util';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/data.service';

// Classe para simular validações e banco de dados
export class ServiceUtil {

  public static createCustomerUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    promise.subscribe(
        (res: any) => { 
          const result = new Result(true, 'Usuário criado com sucesso!', res);
          //DatabaseUtil.insertUser(value);

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static authUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    //const users = DatabaseUtil.selectUsers();
    let dataUser = new User();
    let isValid = false;

    promise.subscribe(
        (res: any) => {
          for (let index = 0; index < res.length; index++) {
            const user = res[index];
            if (user.username === value.username
            && user.password === value.password) {
              dataUser = user;
              isValid = true;
              break;
            }
          }

          const result = new Result(isValid, '', dataUser);

          if (isValid) {
            dataUser.token = res.token;
            dataUser.password = null;
            UserUtil.set(dataUser);
          
            if(successCallback) {
              result.message = `Bem-vindo ${dataUser.name}`;
              result.data.name = dataUser.name;
              result.data.username = dataUser.username;
              successCallback(result);
            }
          } else if (successCallback) {
            result.success = false;
            result.message = "Usuário não cadastrado ou dados informados inválidos!";
            successCallback(result);
          }
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static resetPasswordUtil(
    service: DataService,
    promise: any, 
    user: any,
    newPassword: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    this.authUtil(
      service.auth(user),
      user,
      (res: Result) => {
        if (res.success) {
          promise.subscribe(
            (res: Result) => { 
              DatabaseUtil.updateUser(user, newPassword);

              if(successCallback)
                successCallback(res);
            },
            (err: any) => { 
              if (errorCallback)
                errorCallback(err);
            }
          );
        } else {
          res.message = 'Senha atual inválida!';
          if (successCallback)
            successCallback(res);
        }
      },
      (err: any) => {
        if (errorCallback)
          errorCallback(err);
      }
    );
  }

  public static createContactUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    const result = new Result();

    promise.subscribe(
        (res: Result) => { 
          result.success = true;
          result.message = 'Contato criado com sucesso!';
          result.data = res;
          // DatabaseUtil.insertContact(value);

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static removeContactUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    const result = new Result();

    promise.subscribe(
        (res: Result) => { 
          // DatabaseUtil.removeContact(value);

          result.message = 'Contato removido com sucesso!';
          result.success = true;
          result.data = res;

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static updateContactUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    promise.subscribe(
        (res: Result) => { 
          //DatabaseUtil.updateContact(value);

          const result = new Result();
          result.message = 'Contato alterado com sucesso!';
          result.success = true;
          result.data = res;

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static getContactsUtil(
    promise: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    const result = new Result();

    promise.subscribe(
        (res: Result) => { 
          //res.data = DatabaseUtil.selectContacts();
          result.message = 'Contatos recuperados com sucesso!';
          result.success = true;
          result.data = res;

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

  public static getContactUtil(
    promise: any, 
    value: any,
    successCallback: (res: Result) => void = null, 
    errorCallback: (err: any) => void = null
  ): void {
    promise.subscribe(
        (res: Result) => { 
          //res.data = DatabaseUtil.selectContact(value);

          const result = new Result();
          result.message = 'Contato recuperado com sucesso!';
          result.success = true;
          result.data = res;

          if(successCallback)
            successCallback(result);
        },
        (err: any) => { 
          if (errorCallback)
            errorCallback(err);
        }
      );
  }

}