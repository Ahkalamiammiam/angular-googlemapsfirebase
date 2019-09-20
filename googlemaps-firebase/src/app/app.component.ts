import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB6QdxSqtn_E5m6_7g4cZnnZymYhZgzKFU',
  authDomain: 'studious-stack-253514.firebaseapp.com',
  databaseURL: 'https://studious-stack-253514.firebaseio.com',
  projectId: 'studious-stack-253514',
  storageBucket: 'studious-stack-253514.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'googlemaps-firebase';

  constructor() {
    firebase.initializeApp(config);
  }
  
}
