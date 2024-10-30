<!-- <template>
  <h1 :class="{'checked':!isChecked,'checked1':isChecked,'checked12':!isChecked}" >{{ title.name }}</h1>
  
  <button @click="clicked">Click</button>

  <ul>
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
  }, -->
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
  
<!-- }; -->

<!-- </script>

<style scoped>
.checked{
  color: red;
  font-size: 60px;
}
</style> -->

<!-- 
<template>
    <h2  @click="RemoveData(index)"  v-for="(key,index) in keys" :key="key">
 {{ key }}:{{person[index]}}
    </h2>
    <button>Remove</button>
</template>
<script>
export default{
  data(){
    return{
      keys:['name','age','sur'],
      person:['satya',43,'polu']
    };
  },
  methods : {
  RemoveData(index){
    this.keys.splice(index,1)
    // this.person.splice(index,1)
    this.person.split('')
   }
 }
};
</script> -->
<!-- <template> -->
  <!-- <div>
    <h2 v-for="(key, index) in keys" :key="key" @click="splitData(index)">
      {{ key }}: {{ person[index] }}
    </h2>
    <button @click="removeLast()">Remove Last</button>
  </div> -->
  <!-- <li v-for="n in evenNumbers">{{ n }}</li> -->
  <!-- <ul v-for="numbers in sets" :key="numbers">
  <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
</ul> -->
<!-- using $event special variable -->
<!-- <button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button> -->

<!-- using inline arrow function -->
<!-- <button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button> -->
<!-- </template>

<script> -->
// export default {
//   data() {
//     return {
//       keys: ['name', 'age', 'sur'],
//       person: ['satya', 43, 'polu']
//     };
//   },
//   methods: {
//     splitData(index) {
//       // Split the corresponding value into an array of characters (if it's a string)
//       if (typeof this.person[index] === 'string') {
//         this.person[index] = this.person[index].split('');
//       }
//       // if (typeof this.key[index] === 'string') {
//       //   this.key[index] = this.key[index].split('');
//       // }as
//     },
//     removeLast() {
//       // Remove the last key-value pair
//       // this.keys.pop();
//       this.person.pop();
//     }
//   }
// };
// export default { 
// data() {
//   return {
//     numbers: [1, 2, 3, 4, 5,6,7,8,975,,33,3,434,67,45,56,672,12,58,7,54,1,4,5,6,57,324,34,67,23]
//   }
// },
// computed: {
//   evenNumbers() {
//     return this.numbers.filter(n => n % 2 === 0)
//   }
// }
// }
// export default { 
// data() {
//   return {
//     sets: [[ 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]]
//   }
// },
// methods: {
//   even(numbers) {
//     return numbers.filter(number => number % 2 === 0)
//   }
// }
// }
// export default{ 
// methods: {
//   warn(message, event) {
//     // now we have access to the native event
//     if (event) {
//       event.preventDefault()
//     }
//     alert(message)
//   }
// }
// }
<!-- // </script> -->


<!-- <script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.inputValue);
    },
    doSomething() {
      console.log('Button clicked, but default form action is stopped.');
    },
    handleDivClick() {
      console.log('Div clicked.');
    }
  }
};
</script>  -->

<template>
  <div>
    <h1>Custom Focus Directive Example</h1>
    <input v-focus placeholder="I will be focused automatically">
  </div>
</template>

<script>
export default {
  name: 'FocusExample',
};
// main.js or your Vue component file
Vue.directive('focus', {
  // When the element is inserted into the DOM
  inserted: function (el) {
    el.focus(); // Automatically focus the element
  }
});

</script>

<style>
/* Add any necessary styles here */
</style>
