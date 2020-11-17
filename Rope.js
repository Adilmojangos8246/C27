class rope{
    constructor(bodyA,bodyB){
        var optionS = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
          }
      this.chain = Constraint.create(optionS);
      World.add(world,this.chain);
    }

display(){
strokeWeight(3);
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
line(pointA.x,pointA.y,pointB.x,pointB.y);  

}
} 