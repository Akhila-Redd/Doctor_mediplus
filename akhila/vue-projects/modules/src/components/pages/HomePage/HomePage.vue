<template>
  <h1>this is home page</h1>
  <span><router-link to="/about">about</router-link></span>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <ul>
          <li><router-link to="/first-comp1">comp1</router-link></li>
          <li><router-link to="/first-comp2">comp2</router-link></li>
          <li><router-link to="/first-comp3">comp3</router-link></li>
        </ul>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
