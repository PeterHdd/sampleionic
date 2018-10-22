import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListPage } from '../../postlogin/list/list';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formgroup:FormGroup; //groups multiple form control
  title : string = "Login";
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder,
    public translate:TranslateService) {

      this.formgroup = this.formbuilder.group({ // is a helper class that creates FormGroup, FormControl and FormArray instances for us
        firstname:new FormControl('', Validators.required), //takes value and validity
        password:new FormControl('', Validators.required)
      });

      translate.use('fr');
    }

    onSubmit(){ 
      this.navCtrl.setRoot(ListPage);
    }
}
