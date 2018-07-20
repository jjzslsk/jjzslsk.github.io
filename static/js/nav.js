$(function () {
var numnav=$('.mainmenu ul li').length;
var navarr=Array();
var conarr=Array();
var cur_i;
var con_i;
		for(i=0;i<numnav;i++){
		navarr[i]=$('.mainmenu ul li').get(i);

     $(navarr[i]).click(function(){
     
     cur_i=$(navarr).index($(this))    
           
           for(con_i=0;con_i<numnav;con_i++){
               if(con_i==cur_i){
                $(navarr[con_i]).addClass('curnav')

               }else{
                $(navarr[con_i]).removeClass('curnav')


               }

           }
    
  })
  
}



var liarr=Array()
var numli=$('ul.cp li').length;

     for(p=0;p<numli;p++){
     	liarr[p]=$('ul.cp li').get(p)
		 if(p%4==3){
			$(liarr[p]).addClass('ullast')
			 
		 
		 }
	 }

})