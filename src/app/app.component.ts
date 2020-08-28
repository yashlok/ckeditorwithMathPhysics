import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '../assets/js/ck-editor-math-type/ckeditor.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ckeditorwithMath';
 public Editor = ClassicEditor;

    public model = {
        editorData: '<p>Hello, world!</p>'
    };

}
