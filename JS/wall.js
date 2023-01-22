class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
        this.calc={int:[]}
        switch(this.type){
            case 2:
                for(let a=0,la=this.width/10;a<la;a++){
                    this.calc.int.push([random(0,10),random(15,25)])
                }
            break
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 1:
				this.layer.fill(50,200,50,this.fade)
				this.layer.rect(0,0,this.width+6,this.height+6,6)
			break
            case 2:
				this.layer.fill(50,200,50,this.fade)
				this.layer.rect(0,0,this.width+6,this.height+6,6)
                for(let a=0,la=this.width/10;a<la;a++){
                    this.layer.triangle(-this.width/2+this.width*a/la+2,-this.height/2,-this.width/2+this.width*a/la+8,-this.height/2,-this.width/2+this.width*a/la+this.calc.int[a][0],-this.height/2-this.calc.int[a][1])
                }
			break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!(a==1&&this.type==1)&&!(this.type==5&&this.timers[0]>30)&&!(this.type==6&&this.z<0.5)&&!((this.type==10||this.type==24)&&this.z<0.9)&&!(this.type==59&&this.timers[0]>0)&&this.type!=62&&!this.collide[a][b].dead){
                    switch(this.type){
                    }
                    if(!this.collide[a][b].dead){
                       if(false){
                       }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&this.collide[a][b].velocity.y<0){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&this.collide[a][b].velocity.y>0){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                this.collide[a][b].timers[0]=5
                                this.collide[a][b].jumps=1
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&this.collide[a][b].velocity.x<0){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&this.collide[a][b].velocity.x>0){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}