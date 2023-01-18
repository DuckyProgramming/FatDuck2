class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,30,60)
        this.offset={position:{x:0,y:0}}
        this.anim={direction:0,rate:0,weight:1}
        this.movement={speed:0.2,jump:12.5}
        this.base.movement={jump:this.movement.jump}
        this.reload=0
        this.jumps=0
        this.jumped=false
    }
    display(){
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.noStroke()
            this.layer.fill(230,230,50,this.fade)
            this.layer.ellipse(sin(this.anim.rate*3)*-(12-this.anim.weight*2)-2,24,20-this.anim.weight*4,20)
            this.layer.ellipse(sin(this.anim.rate*3)*(12-this.anim.weight*2)+2,24,20-this.anim.weight*4,20)
            this.layer.ellipse(sin(this.anim.rate*4)*-(16-this.anim.weight*4),8,20-this.anim.weight*4,20)
            this.layer.fill(235,235,55,this.fade)
            this.layer.ellipse(0,4,36-this.anim.weight*20,32)
            this.layer.fill(240,240,60,this.fade)
            this.layer.ellipse(sin(this.anim.rate*4)*(16-this.anim.weight*4),8,20-this.anim.weight*4,20)
            this.layer.fill(245,245,65,this.fade)
            this.layer.ellipse(0,-20,42-this.anim.weight*4,40)
            this.layer.fill(240,160,20,this.fade)
            this.layer.ellipse(this.anim.direction*12,-14,22,14)
            this.layer.stroke(0,this.fade)
            this.layer.strokeWeight(1)
            this.layer.arc(this.anim.direction*12,-14,22,3,0,180)
            this.layer.line(this.anim.direction*15-3,-16,this.anim.direction*15-3,-17)
            this.layer.line(this.anim.direction*15+3,-16,this.anim.direction*15+3,-17)
            this.layer.strokeWeight(3)
            this.layer.point(this.anim.direction*9-6,-26)
            this.layer.point(this.anim.direction*9+6,-26)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
        }
    }
    update(){
        if(this.dead&&this.fade<=0){
            transition.trigger=true
            transition.scene='level'
        }
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            this.velocity.x-=this.movement.speed
            if(this.anim.direction>-1){
                this.anim.direction-=0.1
            }
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            this.velocity.x+=this.movement.speed
            if(this.anim.direction<1){
                this.anim.direction+=0.1
            }
        }
        if(!inputs.keys[0][0]&&!inputs.keys[1][0]&&!inputs.keys[0][1]&&!inputs.keys[1][1]){
            this.anim.direction*=0.95
        }
        if((inputs.keys[0][2]||inputs.keys[1][2])&&(this.timers[0]>0||this.jumps>0&&!this.jumped)){
            if(this.timers[0]>0){
                this.timers[0]=0
            }else{
                this.jumps--
            }
            this.jumped=true
            this.velocity.y=-this.movement.jump
            this.timers[1]=1
        }
        this.movement.jump=this.base.movement.jump
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
        super.update()
    }
}