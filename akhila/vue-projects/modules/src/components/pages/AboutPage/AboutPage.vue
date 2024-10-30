<template>
    <h1>this is about page</h1> <span><router-link to="/">home</router-link></span> <span><router-link to="/about"></router-link></span>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ul>
            <li><router-link to="/about/second-comp1">comp134</router-link></li>
            <li><router-link to="/about/second-comp2">comp234</router-link></li>
            <li><router-link to="/about/second-comp3">comp323</router-link></li>
          </ul>
        </div>
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>