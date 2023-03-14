import { Component , OnInit} from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phototrpism';
  canvas: any;
  counter: number;
  sun: any;
  pot: any;
  stem:any;
  leaf1:any;
  leaf2:any;
  leaf3:any;
  leaf4:any;
  document: any;
  deltaAngle: number | undefined;
  checkbox: any;
  checked = false;
  
  constructor(){
  this.counter= 0;
  this.checkbox = document.querySelector('input[type="checkbox"]');
  }
ngOnInit(): void{
  this.canvas = new fabric.Canvas('c', {
    width: 280,
    height: 280,
    backgroundColor: 'black',
  });
  this.canvas.renderAll();
  
  this.sun = new fabric.Circle({
  left: 100, 
  top: 30,
  fill: "yellow", 
  radius: 18,
  selectable: true, 
  hasControls: false, 
  hasBorders: false
  });
  this.sun.on("moved",this.handleSun),
  this.sun.on("moving",this.boundry),
  this.canvas.add(this.sun);
  
  this.pot = new fabric.Rect({
    height: 50,
    width: 30,
    top: 230,
    left: 120,
    fill: 'orange',
    selectable: false,
    });
  this.canvas.add(this.pot);
  
  this.stem = new fabric.Line(
  [135, 230, 135, 180],   
  {
  strokeWidth: 3,
  stroke: 'green',
  fill: "green",
  selectable: false
  });
  this.canvas.add(this.stem);
  
  this.leaf1 = new fabric.Ellipse(
  { 
  left: 133, 
  top: 210, 
  strokeWidth: .5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center", 
  rx: 5, 
  ry: 1, 
  angle: 45 }
  );
  this.canvas.add(this.leaf1);
  
 this.leaf2 = new fabric.Ellipse(
  { left: 140, 
    top: 210, 
  strokeWidth: .5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center", 
  rx: 5, 
  ry: 1, 
  angle: 135 });
  this.canvas.add(this.leaf2);
  
  this.leaf3 = new fabric.Ellipse({
  left: 133, 
  top: 180, 
  strokeWidth: .5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center", 
  rx: 5, 
  ry: 1, 
  angle: 45
  });
  this.canvas.add(this.leaf3);
  
  this.leaf4 = new fabric.Ellipse({
  left: 140, 
  top: 180, 
  strokeWidth: .5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center", 
  rx: 5, 
  ry: 1, 
  angle: 135
  });
  this.canvas.add(this.leaf4);
   this.counter = 0;
 
}
  
toggle(event:any) {
  this.checkbox = document.querySelector('input[type="checkbox"]');
  console.log(this.checkbox.checked);
  
  if (this.checkbox.checked) {
    
   this.cloudySun();
  console.log('Checked');
  } else {
   
   this.sunnySun();
  console.log('Not checked');
  }
}

// toggle(){
//   this.sunnySun();
// }

 sunnySun(){
  var sun = this.canvas.getObjects("circle")[0];
  sun.animate({radius: 18},
   {onChange: this.canvas.renderAll.bind(this.canvas) });
}

 cloudySun(){
  var sun = this.canvas.getObjects("circle")[0];
 sun.animate({radius: 15},
  {onChange: this.canvas.renderAll.bind(this.canvas) });
}
 boundry() {
var sun = this.canvas.getObjects("circle")[0];
sun.get("top") >= 30 && sun.set("top", 30) } 
 
 handleSun() { 
var sun = this.canvas.getObjects("circle")[0];
sun.get("top") >= 30 && sun.set("top", 30) } 

 addWeek(){
if (this.checkbox?.checked) {
 this.cloudy();
 
} else {
  this.sunny();
  }
}       

 cloudy(){
  
  

  var sun, pot = this.canvas.getObjects("circle")[0],
  stem = (sun = this.canvas.getObjects("line"))[sun.length - 1]; 
  this.deltaAngle = Math.atan((stem.get("y2") - pot.get("top")) / (stem.get("x2") - pot.get("left"))),
  console.log("Inside AddWeek: ", stem.get("x2"), stem.get("y2"), this.deltaAngle);
  var leaf1= 15 * Math.cos(this.deltaAngle), leaf2 = 15 * Math.sin(this.deltaAngle); 
  console.log("proposed delta: ", leaf1, leaf2); 
  var leaf3 = 0, leaf4 = 0; 
  if (this.deltaAngle >= 0 ? (leaf3 = stem.get("x2") - 0.5*leaf1, leaf4 = stem.get("y2") - 0.5*leaf2,
  console.log("New coordinates: ", leaf3, leaf4)) : (leaf3 = stem.get("x2") + 0.5*leaf1,leaf4 = stem.get("y2") - 0.5*Math.abs(leaf2), 
  console.log("New coordinates: ", leaf3, leaf4)), leaf4 <= 20)
  { var text = new fabric.Text("Plant has grown! Start again.",
  { 
   left: 20, 
   top: 110, 
   fill: "white",
   fontSize: 15 }); 
   this.canvas.add(text)} 
   
var branch = new fabric.Line([stem.get("x2"), stem.get("y2"), stem.get("x2"), stem.get("y2")],
 { stroke: "green", 
  strokeWidth: 2, 
  selectable: false, 
  evented: false,
  fill: "green" }); 
  this.canvas.add(branch), 
  this.canvas.renderAll(), 

branch.animate({ x2: leaf3, y2: leaf4 }, { 
 onChange: this.canvas.renderAll.bind(this.canvas),duration: 1000 }),
 Math; 

var leaf = new fabric.Ellipse({
  left: stem.get("x2"), 
  top: stem.get("y2"), 
  strokeWidth: 0.5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center",
  rx: 5, 
  ry: 1 }); 
this.canvas.add(leaf),
this.canvas.renderAll(), 

leaf.animate({left: leaf3,
 top: leaf4  },
 {onChange: this.canvas.renderAll.bind(this.canvas), duration: 1000});
 
 this.counter += 1;
  
}

sunny(){
  var sun = this.canvas.getObjects("circle")[0];
  sun.radius=18;
  var sun, pot = this.canvas.getObjects("circle")[0],
  stem = (sun = this.canvas.getObjects("line"))[sun.length - 1]; 
  this.deltaAngle = Math.atan((stem.get("y2") - pot.get("top")) / (stem.get("x2") - pot.get("left"))),
   console.log("Inside AddWeek: ", stem.get("x2"), stem.get("y2"), this.deltaAngle);
  var leaf1= 15 * Math.cos(this.deltaAngle), leaf2 = 15 * Math.sin(this.deltaAngle); 
   console.log("proposed delta: ", leaf1, leaf2); 
  var leaf3 = 0, leaf4 = 0; 
   if (this.deltaAngle >= 0 ? (leaf3 = stem.get("x2") - leaf1, leaf4 = stem.get("y2") - leaf2,
  console.log("New coordinates: ", leaf3, leaf4)) : (leaf3 = stem.get("x2") + leaf1,leaf4 = stem.get("y2") - Math.abs(leaf2), 
  console.log("New coordinates: ", leaf3, leaf4)), leaf4 <= 20)
   { var text = new fabric.Text("Plant has grown! Start again.",
    { 
     left: 20, 
     top: 110, 
     fill: "white",
     fontSize: 15 }); 
   this.canvas.add(text) } 
    var branch = new fabric.Line([stem.get("x2"), stem.get("y2"), stem.get("x2"), stem.get("y2")],
 { stroke: "green", 
 strokeWidth: 2, 
 selectable: false, 
 evented: false,
 fill: "green" }); 
this.canvas.add(branch); 
this.canvas.renderAll(); 

branch.animate({ x2: leaf3, y2: leaf4 }, { 
 onChange: this.canvas.renderAll.bind(this.canvas)}),
 Math; 

var leaf = new fabric.Ellipse({
  left: stem.get("x2"), 
  top: stem.get("y2"), 
  strokeWidth: 0.5, 
  stroke: "grey", 
  fill: "green", 
  selectable: false, 
  originX: "center", 
  originY: "center",
   rx: 5, 
   ry: 1 }); 
this.canvas.add(leaf);
this.canvas.renderAll(); 

leaf.animate({left: leaf3,
 top: leaf4  },
 {onChange: this.canvas.renderAll.bind(this.canvas) });
 var sun = this.canvas.getObjects("circle")[0];
 sun.animate({radius: 18},
  {onChange: this.canvas.renderAll.bind(this.canvas) });
 this.counter += 1;
}


 restart(){
  if(this.canvas)
  this.canvas.clear();
  this.canvas.set({width: 280,
    height: 280,
    backgroundColor: 'black',})
  
  this.canvas.renderAll();
  this.canvas.add(this.sun);
  this.sun.set({left: 100, 
    top: 30,})
  this.canvas.add(this.pot);
  this.canvas.add(this.stem);
  this.canvas.add(this.leaf1);
  this.canvas.add(this.leaf2);
  this.canvas.add(this.leaf3);
  this.canvas.add(this.leaf4);
  this.counter = 0;
 console.clear();
  }

}
