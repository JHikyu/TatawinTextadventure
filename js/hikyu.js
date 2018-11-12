//..............................................................................
//.HHHH...HHHH..iiiiikkk.....................................JJJJ...SSSSSSS.....
//.HHHH...HHHH..iiiiikkk.....................................JJJJ..JSSSSSSSS....
//.HHHH...HHHH......ikkk.....................................JJJJ..JSSSSSSSSS...
//.HHHH...HHHH..iiiiikkk..kkkkkky...yyyyyyuu..uuuuu..........JJJJ.JJSSS..SSSS...
//.HHHH...HHHH..iiiiikkk.kkkk.kkyy..yyyyyyuu..uuuuu..........JJJJ.JJSSS.........
//.HHHHHHHHHHH..iiiiikkkkkkk..kkyy..yyyyyyuu..uuuuu..........JJJJ..JSSSSSS......
//.HHHHHHHHHHH..iiiiikkkkkk...kkyy.yyyy.yyuu..uuuuu..........JJJJ...SSSSSSSSS...
//.HHHHHHHHHHH..iiiiikkkkkkk...kyyyyyyy.yyuu..uuuuu..........JJJJ.....SSSSSSS...
//.HHHH...HHHH..iiiiikkkkkkk...kyyyyyy..yyuu..uuuuu..... JJ.JJJJ........SSSSS..
//.HHHH...HHHH..iiiiikkkkkkkk...yyyyyy..yyuu..uuuuu..... JJ.JJJJ.JJSS....SSSS..
//.HHHH...HHHH..iiiiikkk.kkkk...yyyyyy..yyuuu.uuuuu..... JJJJJJJ.JJSSSSSSSSSS..
//.HHHH...HHHH..iiiiikkk..kkkk..yyyyy....yuuuuuuuuu..... JJJJJJ...JSSSSSSSSS...
//.HHHH...HHHH..iiiiikkk..kkkk...yyyy.....uuuuuuuuu...... JJJJJ.....SSSSSSSS....
//...............................yyyy...........................................
//..............................yyyy............................................
//............................kkyyyy............................................
//............................kkyyy.............................................
//..............................................................................


document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

createText(advData.Startup, 1);
function createText(adventure, i){
     if(adventure[i]){

          var temp = adventure[i]["Text"].split('°');
          if(temp.length > 1){
               var text = "";
               for(var b = 0 ; b < temp.length ; b++){
                    if(window[temp[b]]){
                         text += window[temp[b]];
                    }else{
                         text += temp[b];
                    }
               }
          }else{
               text = adventure[i]["Text"];
          }

          var temp = text.split('|||');
          text = temp[Math.floor(temp.length * Math.random())];




          var options = {
               strings: ["", text],
               typeSpeed: 30,
               startDelay: 0,
               backSpeed: 30,
               fadeOut: true,
               smartBackspace: true,
               cursorChar: '',
               onComplete: function(self) {


                    if(adventure[i]["Settings"]["Console"]){
                         var tempSplit = adventure[i]["Settings"]["Console"].split('&&&');
                         for(var b = 0 ; b < tempSplit.length ; b++){
                              console.log(tempSplit[b]);
                         }
                    }



                    if(adventure[i]["Settings"]["Typ"] == "Skip"){
                         document.getElementById("button").onclick = function(){
                                   i = adventure[i]["Settings"]["To"];
                                   createText(adventure, i);
                                   document.getElementById("button").onclick = function(){};
                         };







                    }else if(adventure[i]["Settings"]["Typ"] == "IfNumber"){
                         console.log("");
                         if(adventure[i]["Settings"]["Equal"]){
                              if(window[adventure[i]["Settings"]["Var"]] == adventure[i]["Settings"]["Compare"]){
                                        i = adventure[i]["Settings"]["Equal"]["To"];
                                        createText(adventure, i);
                              }
                         }

                         if(adventure[i]["Settings"]["Greater"]){
                              if(window[adventure[i]["Settings"]["Var"]] > adventure[i]["Settings"]["Compare"]){
                                        i = adventure[i]["Settings"]["Greater"]["To"];
                                        createText(adventure, i);
                              }
                         }

                         if(adventure[i]["Settings"]["Less"]){
                              if(window[adventure[i]["Settings"]["Var"]] < adventure[i]["Settings"]["Compare"]){
                                        i = adventure[i]["Settings"]["Less"]["To"];
                                        createText(adventure, i);
                              }
                         }







                    }else if(adventure[i]["Settings"]["Typ"] == "Bool"){

                         document.getElementById("button").onclick = function(){

                              var temp = document.getElementById("input").value;
                              document.getElementById("input").value = "";

                              if(temp.toLowerCase().includes("ja") == true || temp.toLowerCase().includes("sicher") == true || temp.toLowerCase().includes("ziemlich") == true){
                                   i = adventure[i]["Settings"]["True"]["To"];
                                   createText(adventure, i);
                                   document.getElementById("button").onclick = function(){};
                              }else{
                                   i = adventure[i]["Settings"]["False"]["To"];
                                   createText(adventure, i);
                                   document.getElementById("button").onclick = function(){};
                              }


                         }


                         // WARNING:
                    }else if(adventure[i]["Settings"]["Typ"] == "WriteVar"){

                         document.getElementById("button").onclick = function(){

                              window[adventure[i]["Settings"]["Var"]] = document.getElementById("input").value;
                              document.getElementById("input").value = "";

                              if(adventure[i]["Settings"]["Not"]){
                                   if(window[adventure[i]["Settings"]["Var"]].includes(adventure[i]["Settings"]["Not"]) == false){

                                        i = adventure[i]["Settings"]["To"];
                                        createText(adventure, i);
                                        document.getElementById("button").onclick = function(){};

                                   }
                              }






                         };






                    }else if(adventure[i]["Settings"]["Typ"] == "SetVar"){
                         var temp = adventure[i]["Settings"]["Set"].split('°');
                         if(temp.length > 1){
                              var text = "";
                              for(var b = 0 ; b < temp.length ; b++){
                                   if(window[temp[b]]){
                                        text += window[temp[b]];
                                   }else{
                                        text += temp[b];
                                   }
                              }
                         }else{
                              text = adventure[i]["Settings"]["What"];
                         }



                         document.getElementById("button").onclick = function(){
                              window[adventure[i]["Settings"]["Var"]] = text;
                              i = adventure[i]["Settings"]["To"];
                              createText(adventure, i);
                              document.getElementById("button").onclick = function(){};
                         };







                    }else if(adventure[i]["Settings"]["Typ"] == "Choice"){
                         document.getElementById("button").onclick = function(){
                              document.getElementById("button").onclick = function(){};
                              var tempi = i;
                              var temp = document.getElementById("input").value;
                              document.getElementById("input").value = "";
                              if(temp == null){
                                   createText(adventure, i);
                                   document.getElementById("button").onclick = function(){};
                              }else{
                                   for(var b = 1 ; b < adventure[tempi]["Settings"]["Choices"]["Menge"]+1 ; b++){
                                        if(adventure[i]["Settings"]["Choices"]){
                                             temp1 = adventure[i]["Settings"]["Choices"][b].split('|||');
                                             if(temp1.length > 1){
                                                  for(var c = 0 ; c < temp1.length ; c++){
                                                       if(temp.toLowerCase().includes(temp1[c]) == true){
                                                            i = adventure[i]["Settings"][b]["To"];
                                                            createText(adventure, i);
                                                            document.getElementById("button").onclick = function(){};
                                                       }
                                                  }
                                             }
                                        }
                                        if(adventure[i]["Settings"]["Choices"]){
                                             if(temp.toLowerCase().includes(adventure[i]["Settings"]["Choices"][b]) == true){
                                                  i = adventure[i]["Settings"][b]["To"];
                                                  createText(adventure, i);
                                                  document.getElementById("button").onclick = function(){};
                                             }
                                        }
                                   }
                              }
                         }











                    }else if(adventure[i]["Settings"]["Typ"] == "DBExists"){
                         var temp = adventure[i]["Settings"]["What"].split('°');
                         if(temp.length > 1){
                              var text = "";
                              for(var b = 0 ; b < temp.length ; b++){
                                   if(window[temp[b]]){
                                        text += window[temp[b]];
                                   }else{
                                        text += temp[b];
                                   }
                              }
                         }else{
                              text = adventure[i]["Settings"]["What"];
                         }


                         var ref = firebase.database().ref(text);
                         ref.once("value", function(snapshot) {
                              var data = snapshot.val();

                              console.log(data);

                              if(data != null){
                                   if(data[window[adventure[i]["Settings"]["Var"]]]){
                                        i = adventure[i]["Settings"]["True"]["To"];
                                        createText(adventure, i);
                                   }else{
                                        i = adventure[i]["Settings"]["False"]["To"];
                                        createText(adventure, i);
                                   }
                              }else{
                                   i = adventure[i]["Settings"]["False"]["To"];
                                   createText(adventure, i);
                              }
                         }, function (error) {
                            console.log("Error: " + error.code);
                         });







                    }else if(adventure[i]["Settings"]["Typ"] == "DBWrite"){
                         var temp = adventure[i]["Settings"]["What"].split('°');
                         if(temp.length > 1){
                              var text = "";
                              for(var b = 0 ; b < temp.length ; b++){
                                   if(window[temp[b]]){
                                        text += window[temp[b]];
                                   }else{
                                        text += temp[b];
                                   }
                              }
                         }else{
                              text = adventure[i]["Settings"]["What"];
                         }
                         for(var b = 1 ; b < adventure[i]["Settings"]["Write"]["Menge"]+1 ; b++){
                              var tempSplit = adventure[i]["Settings"]["Write"][b].split(':::');
                              var ref = firebase.database().ref();
                              firebase.database().ref(text).update({
                                 [tempSplit[0]]: tempSplit[1]
                              });
                         }

                         i = adventure[i]["Settings"]["To"];
                         createText(adventure, i);







                    }else if(adventure[i]["Settings"]["Typ"] == "DBGetAll"){
                         var temp = adventure[i]["Settings"]["What"].split('°');
                         if(temp.length > 1){
                              var text = "";
                              for(var b = 0 ; b < temp.length ; b++){
                                   if(window[temp[b]]){
                                        text += window[temp[b]];
                                   }else{
                                        text += temp[b];
                                   }
                              }
                         }else{
                              text = adventure[i]["Settings"]["What"];
                         }


                         var tempi = i;
                         window[adventure[tempi]["Settings"]["Var"]] = [];

                         var ref = firebase.database().ref();
                         var urlRef = ref.child(text);
                         urlRef.once("value", function(snapshot) {
                              snapshot.forEach(function(child) {
                                   window[adventure[tempi]["Settings"]["Var"]].push([child.key, child.val()]);
                              });
                         });
                         document.getElementById("button").onclick = function(){
                                   i = adventure[i]["Settings"]["To"];
                                   createText(adventure, i);
                                   document.getElementById("button").onclick = function(){};
                         };





                    }else if(adventure[i]["Settings"]["Typ"] == "DBGet"){
                         console.log("");
                         var temp = adventure[i]["Settings"]["What"].split('°');
                         if(temp.length > 1){
                              var text = "";
                              for(var b = 0 ; b < temp.length ; b++){
                                   if(window[temp[b]]){
                                        text += window[temp[b]];
                                   }else{
                                        text += temp[b];
                                   }
                              }
                         }else{
                              text = adventure[i]["Settings"]["What"];
                         }
                         var tempi = i;
                         var ref = firebase.database().ref(text);
                         ref.once("value", function(snapshot) {
                              var data = snapshot.val();
                              if(data[adventure[tempi]["Settings"]["Get"]]){
                                   window[adventure[tempi]["Settings"]["Var"]] = data[adventure[tempi]["Settings"]["Get"]];
                              }
                         }, function (error) {
                           console.log("Error: " + error.code);
                         });
                         i = adventure[tempi]["Settings"]["To"];
                         createText(adventure, i);







                    }else if(adventure[i]["Settings"]["Typ"] == "Adventure"){

                         if(adventure[i]["Settings"]["Adventure"] && adventure[i]["Settings"]["To"]){

                              createText(advData[adventure[i]["Settings"]["Adventure"]], adventure[i]["Settings"]["To"]);



                         }





                    }








               }
          }

          var typed = new Typed("#text", options);

     }
}
