

class testService{

    public async dataFilteringService(user:any):Promise<any>{
        try{
            let data:any= user
              for (let clave in data){
                if(typeof data[clave] === 'object'){
                    if(Object.keys(data[clave]).length === 0 ){
                        delete data[clave]     
                    }
                }
                if(!data[clave]){
                        delete data[clave]
                }
              }
              return [201, data];
        }catch(err){
            console.log(err);
            
            return [500, err];
        }
    }
    
    public async getStringCtrl(llave : string):Promise<any>{
        try{            
            let data: any = {
            length_string : llave? llave.length : 0,
            old_string : llave ? llave : '',
            new_string : llave ? llave.split("").reverse().join("") :'' 
            };
            return [201, data];   
        }catch(err){
            return [500, err]; 
        }

    }

}

export default new testService();