function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ICHNrNGJc/model.json',modelReady);

}



    function modelReady()
{
    classifier.classify(gotResult);
}

sheep=0;
horse=0;
lion=0;
backgroundnoise=0;
chicken=0;
dog=0;
cat=0;
cow=0;

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);

    }
    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("animal").innerHTML="I can hear: "+results[0].label;
        document.getElementById("animal").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
       
        img=document.getElementById("image");
      

        if(results[0].label=="Baaing")
        {
            img.src="sheep.gif";
            sheep=sheep+1
           document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
           document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        }
        else if(results[0].label=="Meowing")
        {
            img.src="cat.gif";
           cat=cat+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
            
        }

        else if(results[0].label=="Clucking")
        {
            img.src="chicken.gif";
            chicken=chicken+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        }

        else if(results[0].label=="Mooing")
        {
            img.src="cow.gif";
            cow=cow+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        
        }

        else if(results[0].label=="Barking")
        {
            img.src="dog.gif";
            dog=dog+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        }
        else if(results[0].label=="Neighing")
        {
            img.src="horse.gif";
            horse=horse+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        }

        else if(results[0].label=="Roaring")
        {
            img.src="lion.gif";
            lion=lion+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        }
        else 
        {
            img.src="ear.png";
            backgroundnoise=backgroundnoise+1
            document.getElementById("counter").innerHTML="Counter: Sheep-"+sheep+" Cow-"+cow+" Cat-"+cat+" Chicken"+chicken+" Lion-"+lion+" Dog-"+dog+" Horse-"+horse+" Background Noise-"+backgroundnoise;
            document.getElementById("counter").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
        }
    }
}




