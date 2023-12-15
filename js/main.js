var quotes=[
   " قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ.",
   "قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.",
"قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.",
"رضيـت بالله ربـا وبالإسلام ديـنا وبمحـمد صلى الله عليه وسلم نبيـا. ",

]
var names=[
    "سبحان الله",
    "الحمدلله",
    " لا اله الا الله",

" الله اكبر"

]
var qut=document.getElementById("qt");
var nam=document.getElementById("nm");

function randomqute()
{
  
    var count= (Math.floor(Math.random()*quotes.length));
qut.innerHTML=quotes[count];
nam.innerHTML=names[count];
    
}

// var but=document.getElementById("btn")



