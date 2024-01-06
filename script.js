        let game = {
            Steps: 0,
            ColorRate: 1,
            CNO: "rgb(219, 219, 220)",
            CNT: "rgb(43, 44, 49)",
            SkinNumber: 2,
            SpawnTop: 0,
            SpawnLeft: 0,
            OnTop: 0,
            OnLeft: 0,
            speed: 20,
        }
        function Spawnpoint(){
            if(game.OnTop == game.SpawnTop && game.OnLeft == game.SpawnLeft){}
            else{
                document.getElementById("Spawnsound").pause();
                document.getElementById("Spawnsound").currentTime = 0;
                document.getElementById("Spawnsound").play();
                game.SpawnLeft = game.OnLeft;
                game.SpawnTop = game.OnTop;
                document.getElementById("Spawnlocation").style.marginTop = game.OnTop+"px";
                document.getElementById("Spawnlocation").style.marginLeft = game.OnLeft+"px";
            }
        }
        function Reset(){
            if(game.SpawnLeft == game.OnLeft && game.SpawnTop == game.OnTop){}
            else{
            document.getElementById("reset-sound").pause();
            document.getElementById("reset-sound").currentTime = 0;
            document.getElementById("reset-sound").play();
            game.OnTop = game.SpawnTop;
            game.OnLeft = game.SpawnLeft;
            document.getElementById("Ball").style.marginTop = game.OnTop+"px";
            document.getElementById("Ball").style.marginLeft = game.OnLeft+"px";
            }
        }
        function Up(){
            if(game.OnTop>0){
            game.Steps++;
            game.OnTop = game.OnTop-game.speed;
            document.getElementById("Ball").style.marginTop = game.OnTop+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Down(){
            if(game.OnTop<window.innerHeight-150){
            game.Steps++;
            game.OnTop = game.OnTop+game.speed;
            document.getElementById("Ball").style.marginTop = game.OnTop+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Left(){
            if(game.OnLeft>0){
            game.Steps++;
            game.OnLeft = game.OnLeft-game.speed;
            document.getElementById("Ball").style.marginLeft = game.OnLeft+"px";
            }
            else{
                document.getElementById("WW").pause();
                document.getElementById("WW").currentTime = 0;
                document.getElementById("WW").play();
            }
        }
        function Right(){
            if(game.OnLeft<window.innerWidth-150){
            game.Steps++;
            game.OnLeft = game.OnLeft+game.speed;
            document.getElementById("Ball").style.marginLeft = game.OnLeft+"px";
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
            if(game.ColorRate == 1){
            document.getElementById("BC").play();
            document.getElementById("background").style.backgroundColor = game.CNO;
            game.ColorRate = 0;
            }
            else{
                document.getElementById("BC").play();
                document.getElementById("background").style.backgroundColor = game.CNT;
                game.ColorRate = 1;
            }
        }
         function Skin(){
            document.getElementById("CC").pause();
            document.getElementById("CC").currentTime = 0;
            document.getElementById("CC").play();
            let ImageName = "";
            ImageName = "Ball (" + game.SkinNumber.toString() + ").png";
            document.getElementById("Ball").src = ImageName;
            if (game.SkinNumber > 6) game.SkinNumber = 1;
            else game.SkinNumber++;
        }
        function StepCounter(){
            alert("You walked: "+game.Steps+" Steps")
        }
        function SpecialColor(){
            let MyColorChange = prompt("Your Color.Like that: DarkBlue or that: rgb(0,0,153)");
            if(game.ColorRate == 1){
            document.getElementById("BC").pause();
            document.getElementById("BC").currentTime = 0;
            document.getElementById("BC").play();
            game.CNT = MyColorChange;
            document.body.style.backgroundColor = MyColorChange;
            }
            else{
            document.getElementById("BC").pause();
            document.getElementById("BC").currentTime = 0;
            document.getElementById("BC").play();
            game.CNO = MyColorChange;
            document.body.style.backgroundColor = MyColorChange;
            }
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
