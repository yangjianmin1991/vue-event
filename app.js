new Vue({
    el: '#vue-event',
    data: {
       
       age:26,
       x:0,
       y:0
    
    },
    methods:{
       
       add:function(inc){
         this.age+=inc;
       },
       
       subtract:function(dec){
         this.age-=dec;
       },
       updateXY:function(event){
           console.log(event);
           this.x=event.offsetX;
           this.y=event.offsetY
       },
       myAlert: function(){
         alert('Hello Vue.js!');
       },
       logName: function(){
          console.log("你正在填写姓名。");
       },
       logAge: function(){
          console.log("你正在填写年龄。");
       }
    }
});
