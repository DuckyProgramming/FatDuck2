class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
        this.calc={int:[]}
        switch(this.type){
            case 2: case 4:
                for(let a=0,la=this.width/10;a<la;a++){
                    this.calc.int.push([random(0,10),random(15,25)])
                }
            break
            case 5:
                this.width-=10
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
            case 3:
                this.layer.fill(30,120,30,this.fade)
                this.layer.rect(0,3,this.width,this.height-6)
            break
            case 4:
				this.layer.fill(30,120,30,this.fade)
				this.layer.rect(0,3,this.width,this.height-6)
                for(let a=0,la=this.width/10;a<la;a++){
                    this.layer.triangle(-this.width/2+this.width*a/la+2,-this.height/2+6,-this.width/2+this.width*a/la+8,-this.height/2+6,-this.width/2+this.width*a/la+this.calc.int[a][0]*0.6+2,-this.height/2+12-this.calc.int[a][1])
                }
			break
            case 5:
                this.layer.fill(120,this.fade)
                for(let a=0,la=this.width/10+1;a<la;a++){
                    this.layer.triangle(-this.width/2+this.width*a/(la-1)-4,this.height/2,-this.width/2+this.width*a/(la-1)+4,this.height/2,-this.width/2+this.width*a/(la-1),-this.height*3/2)
                }
            break
            case 6: case 7: case 8: case 9:
                this.layer.fill(255,255,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,this.fade)
                this.layer.quad(-this.width/2,-this.height/2,this.width/2,this.height/2,this.width/2,this.height/6,-this.width/6,-this.height/2)
                this.layer.quad(-this.width/2,-this.height/6,this.width/6,this.height/2,-this.width/6,this.height/2,-this.width/2,this.height/6)
                this.layer.triangle(this.width/6,-this.height/2,this.width/2,-this.height/6,this.width/2,-this.height/2)
                this.layer.stroke(75,this.fade)
                this.layer.strokeWeight(2)
                if(this.type==6){
                    this.layer.line(0,this.base.position.y-this.position.y-game.tileSize*3,0,this.base.position.y-this.position.y)
                    this.layer.strokeWeight(6)
                    this.layer.point(0,this.base.position.y-this.position.y-game.tileSize*3)
                    this.layer.point(0,this.base.position.y-this.position.y)
                }else if(this.type==7){
                    this.layer.line(this.base.position.x-this.position.x+game.tileSize*3,0,this.base.position.x-this.position.x,0)
                    this.layer.strokeWeight(6)
                    this.layer.point(this.base.position.x-this.position.x+game.tileSize*3,0)
                    this.layer.point(this.base.position.x-this.position.x,0)
                }else if(this.type==8){
                    this.layer.line(0,this.base.position.y-this.position.y+game.tileSize*3,0,this.base.position.y-this.position.y)
                    this.layer.strokeWeight(6)
                    this.layer.point(0,this.base.position.y-this.position.y+game.tileSize*3)
                    this.layer.point(0,this.base.position.y-this.position.y)
                }else if(this.type==9){
                    this.layer.line(this.base.position.x-this.position.x-game.tileSize*3,0,this.base.position.x-this.position.x,0)
                    this.layer.strokeWeight(6)
                    this.layer.point(this.base.position.x-this.position.x-game.tileSize*3,0)
                    this.layer.point(this.base.position.x-this.position.x,0)
                }
            break
            case 10:
                this.layer.fill(200,150,50,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(100,75,25,this.fade)
                for(let a=0,la=this.height/game.tileSize*4;a<la;a++){
                    this.layer.rect(0,-this.height/2+game.tileSize/8+a*game.tileSize/4,this.width,2)
                }
            break
            case 11:
                this.layer.fill(160,120,40,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(80,60,20,this.fade)
                for(let a=0,la=this.height/game.tileSize*4;a<la;a++){
                    this.layer.rect(0,-this.height/2+game.tileSize/8+a*game.tileSize/4,this.width,2)
                }
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
            case 6:
                if(this.time%240<60){
                    this.position.y-=2
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.y+=2
                }
            break
            case 7:
                if(this.time%240<60){
                    this.position.x+=2
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.x-=2
                }
            break
            case 8:
                if(this.time%240<60){
                    this.position.y+=2
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.y-=2
                }
            break
            case 9:
                if(this.time%240<60){
                    this.position.x-=2
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.x+=2
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!this.collide[a][b].dead&&
                this.type!=3&&this.type!=4){
                    switch(this.type){
                        case 5:
                            this.collide[a][b].dead=true
                        break
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