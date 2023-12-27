        let Steps = 0;
        let ColorRate = 1;
        let SkinNumber = 2;
        let SpawnTop = 0;
        let SpawnLeft = 0;
        let OnTop = 0;
        let OnLeft = 0;
        const speed = 20;
        function Spawnpoint(){
            if(OnTop == SpawnTop && OnLeft == SpawnLeft){}
            else{
                document.getElementById("Spawnsound").pause();
                document.getElementById("Spawnsound").currentTime = 0;
                document.getElementById("Spawnsound").play();
                SpawnLeft = OnLeft;
                SpawnTop = OnTop;
            }
        }
        function Reset(){
            if(SpawnLeft == OnLeft && SpawnTop == OnTop){}
            else{
            document.getElementById("reset-sound").pause();
            document.getElementById("reset-sound").currentTime = 0;
            document.getElementById("reset-sound").play();
            OnTop = SpawnTop;
            OnLeft = SpawnLeft;
            document.getElementById("Ball").style.marginTop = OnTop+"px";
            document.getElementById("Ball").style.marginLeft = OnLeft+"px";
            }
        }
        function Up(){
            if(OnTop>0){
            Steps++;
            OnTop = OnTop-speed;
            document.getElementById("Ball").style.marginTop = OnTop+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Down(){
            if(OnTop<window.innerHeight-150){
            Steps++;
            OnTop = OnTop+speed;
            document.getElementById("Ball").style.marginTop = OnTop+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Left(){
            if(OnLeft>0){
            Steps++;
            OnLeft = OnLeft-speed;
            document.getElementById("Ball").style.marginLeft = OnLeft+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Right(){
            if(OnLeft<window.innerWidth-150){
            Steps++;
            OnLeft = OnLeft+speed;
            document.getElementById("Ball").style.marginLeft = OnLeft+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Color(){
            document.getElementById("BC").pause();
            document.getElementById("BC").currentTime = 0;
            if(ColorRate == 1){
            document.getElementById("BC").play();
            document.getElementById("background").style.backgroundColor = "rgb(219, 219, 220)";
            ColorRate = 0;
            }
            else{
                document.getElementById("BC").play();
                document.getElementById("background").style.backgroundColor = "rgb(43, 44, 49)";
                ColorRate = 1;
            }
        }
         function Skin(){
            document.getElementById("CC").pause();
            document.getElementById("CC").currentTime = 0;
            document.getElementById("CC").play();
            let ImageName = "";
            ImageName = "Ball (" + SkinNumber.toString() + ").png";
            document.getElementById("Ball").src = ImageName;
            if (SkinNumber > 6) SkinNumber = 1;
            else SkinNumber++;
        }
        function StepCounter(){
            alert("You walked: "+Steps+" Steps")
        }
        function SpecialColor(){
            let MyColorChange = prompt("Your Color.Like that: DarkBlue or that: rgb(0,0,153)");
            document.getElementById("BC").pause();
            document.getElementById("BC").currentTime = 0;
            document.getElementById("BC").play();
            document.body.style.backgroundColor = MyColorChange;
        }
        function Controll(event){
            let key = event.key;
            key = key.toUpperCase();
            switch(key){
                case 'W':
                    Up();
                    break;
                case 'A':
                    Left();
                    break;
                case 'D':
                    Right();
                    break;
                case 'S':
                    Down();
                    break;
                case 'R':
                    Reset();
                    break;
                case 'F':
                    Spawnpoint();
                    break;
                case 'E':
                    Color();
                    break;
                case 'T':
                    Skin();
                    break;
                case 'Q':
                    StepCounter();
                    break;
                case 'P':
                    SpecialColor();
                    break;
            }
        }