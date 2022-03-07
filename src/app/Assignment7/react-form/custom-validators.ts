import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


export class customValidators{
    static InvalidProjectName(control:FormControl):{[s:string] : boolean}{
        if (control.value=== 'test'){
            return {'invalidProjectName':true};
        }
        return {'invalidProjectName':false};
    }
    static asycInvalidProjectName(control:FormControl): Promise<any> | Observable<any> {
        const promise =new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value === 'TestProject'){
                    resolve({'invalidProjevtName' : true});
                }
                else{
                    resolve(null);
                }
            },
                2000);
        })
        return promise;
    }
}