class Drop{
    constructor(x,y){
        var options = {
            restitution:0.1,
            friction:0.001
        }
        this.rain = Matter.Bodies.circle(x, y, 10, options);
        this.radius = 10

        World.add(world, this.rain);
    }
    updateY(){
        if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain,{x:random(0, 400), y:random(0, 400)});
        }
      }
    showDrop(){
        push();
        strokeWeight(1);
        stroke("blue");
        fill("blue");
        ellipseMode(CENTER);
        ellipse( this.rain.position.x, this.rain.position.y, this.radius, this.radius);
        pop();
    }
}