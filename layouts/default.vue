<template>
  <div id="app">
    <pizza-header />
    <nuxt class="pizza-content" />
    <pizza-footer class="pizza-footer" />
  </div>
</template>

<script>
import PizzaHeader from '~/components/PizzaHeader.vue'
import PizzaFooter from '~/components/PizzaFooter.vue'

export default {
  components: {
    PizzaHeader,
    PizzaFooter
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  text-align: center;
  color: black;
  font-size: 16px;
  line-height: 1.5;
}
.pizza-content {
  flex: 1 0 auto;
}
.pizza-footer {
  flex-shrink: 0;
}
#app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  min-height: 100vh;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  font-weight: 600;
  background-color: transparent;
}
img {
  border-style: none;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='text'],
[type='number'] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
}
[type='text']:focus,
[type='number']:focus {
  border-color: black;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: black;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  background: black;
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
</style>
