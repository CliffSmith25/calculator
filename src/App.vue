<template>
  <div id="app">
    <div id="display" class="row">
      <h1>{{ msg }}</h1>
    </div>
    <div class="row btn-row container">
      <button v-on:click="stackUpdate('1')" class="btn">1</button>
      <button v-on:click="stackUpdate('2')" class="btn">2</button>
      <button v-on:click="stackUpdate('3')" class="btn">3</button>
      <button v-on:click="stackUpdate('+')" class="btn">+</button>
      <button v-on:click="stackUpdate('C')" class="btn">C</button>
    </div>
    <div class="row btn-row container">
      <button v-on:click="stackUpdate('4')" class="btn">4</button>
      <button v-on:click="stackUpdate('5')" class="btn">5</button>
      <button v-on:click="stackUpdate('6')" class="btn">6</button>
      <button v-on:click="stackUpdate('-')" class="btn">-</button>
      <button v-on:click="stackUpdate('backsp')" class="btn"><-</button>
    </div>
    <div class="row btn-row container">
      <button v-on:click="stackUpdate('7')" class="btn">7</button>
      <button v-on:click="stackUpdate('8')" class="btn">8</button>
      <button v-on:click="stackUpdate('9')" class="btn">9</button>
      <button v-on:click="stackUpdate('*')" class="btn">*</button>
      <button v-on:click="stackUpdate('.')" class="btn">.</button>
    </div>
    <div class="row btn-row container">
      <button v-on:click="stackUpdate('(')" class="btn">(</button>
      <button v-on:click="stackUpdate('0')" class="btn">0</button>
      <button v-on:click="stackUpdate(')')" class="btn">)</button>
      <button v-on:click="stackUpdate('/')" class="btn">/</button>
      <button v-on:click="stackUpdate('=')" class="btn">=</button>
    </div>
    <div id="source">
      <a href="https://github.com/CliffSmith25/calculator">View the source code here</a>
    </div>
  </div>
</template>

<script>
  import calc from './calc.js'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Start Adding!'
      }
    },
    methods: {
      stackUpdate: function (arg) {
        this.msg = calc(arg, this.msg)
      }
    }
  }
</script>

<style>
#source {
  text-align: center;
  margin-top: 5px;
}
a {
  text-align: center;
  color: white;
}
#app {
  min-width: 320px;
  max-width: 1080px; 
  background-color: #0b0c10;
  padding: 5px;
  margin-top: 50px;
}

.container {
  display: flex;
}

#display {
  background-color: #1f2833;
}

.btn {
  text-align: center;
  width: 16%;
  height: 75px;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 10px;
  font-size: 2em;
  background-color: #45a29e;
  border-color: #66fcf1;
  color: white;
}

.row {
  width: 100%;
}

h1 {
  font-weight: bold;
  text-align: center;
  font-size: 3em;
  color: #66fcf1;
}
</style>
