new Vue({
  el:'#todo',
  data:{
    firstSelected: '',
    types:[
      {text:'A',checked:false},
      {text:'B',checked:false},
      {text:'O',checked:false},
      {text:'AB',checked:false}
    ],
    secondSelected: '',
    pers:[
      {text:'0%',checked:false},
      {text:'10%',checked:false},
      {text:'20%',checked:false},
      {text:'30%',checked:false},
      {text:'40%',checked:false},
      {text:'50%',checked:false},
      {text:'60%',checked:false},
      {text:'70%',checked:false},
      {text:'80%',checked:false},
      {text:'90%',checked:false},
      {text:'100%',checked:false}
    ]
  },
  methods:{
      addList:function(){
          var a = this.firstSelected;
          var b = this.secondSelected;
          if(a && b){

              console.log(a, b);

          }else {
            alert("please insert data")
          }
      }
  }
});
