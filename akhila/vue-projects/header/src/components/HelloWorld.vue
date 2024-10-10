<template>
  <h1 :class="{'checked':!isChecked,'checked1':isChecked,'checked12':!isChecked}" >{{ title.name }}</h1>
  
  <button @click="clicked">Click</button>

  <ul>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <li @click="clickedItem(index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
    <button v-on:click="goUp" style="float: inline-end;">Click here to go Up ^</button>
  
  </ul>

  <h1 v-for="item in clickedNames" :key="item">{{ item }}</h1>

</template>

<script>
export default {
  data() {
    return {
      title: { name: "Welcome " },
      isChecked:false,
      names:['akhila','venkat','venkat','vivek','satya','lucky'],
      clickedNames:[]
    };
  },
  methods: {
    clicked() {
      console.log("Clicked !!!!", );
      this.anotherCallFunction()
    },
    anotherCallFunction(){
      console.log("sdfknkjdsnk");
    },
    clickedItem(idx){
     let res =  this.names.filter((name,index)=>index===idx)
    //  if(!this.clickedNames.includes(...res)){
       this.clickedNames.push(...res)
    //  }
     console.log(this.clickedNames);
    },
    goUp(){
      window.scrollTo({top:0,behavior:'smooth'})
    }
  },
  // mounted(){
  //   this.clicked()
  //   console.log("I am Mounted Hook");
  // },
  // beforeMount(){
  //   this.clicked()

  //   console.log("I am before Mounted Hook");
  // },
  // created(){
  //   this.clicked()
  //   console.log('I am create Hook');
  // },
  // beforeCreate(){
  //   console.log('I am before create Hook');
  // }
  
};
// Life cycle Hookssssss
</script>

<style scoped>
.checked{
  color: red;
  font-size: 60px;
}
</style>
