new Vue({
    el:'#todo',
  data:{
    firstSelected: 'Choose a blood type',
    types:[
        {value:'Choose a blood type'},
        {value:'A',checked:false},
      {value:'B',checked:false},
      {value:'O',checked:false},
      {value:'AB',checked:false}
    ],
    secondSelected: 'Choose a percentage',
    pers:[
        {value:'Choose a percentage'},
        {value:'0%',checked:false},
      {value:'10%',checked:false},
      {value:'20%',checked:false},
      {value:'30%',checked:false},
      {value:'40%',checked:false},
      {value:'50%',checked:false},
      {value:'60%',checked:false},
      {value:'70%',checked:false},
      {value:'80%',checked:false},
      {value:'90%',checked:false},
      {value:'100%',checked:false}
    ]
  }
});
