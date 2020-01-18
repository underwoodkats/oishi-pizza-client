<template>
  <div>
    <form @submit.prevent="proceedOrder" class="order-form-container">
      <label for="order-customer-name">
        Name:
      </label>
      <input id="order-customer-name" v-model="customerName" type="text" />

      <label for="order-customer-phone-number">
        Phone number:
      </label>
      <input
        id="order-customer-phone-number"
        v-model="customerPhoneNumber"
        type="text"
      />

      <label for="order-customer-address">
        Address:
      </label>
      <input
        id="order-customer-address"
        v-model="customerAddress"
        type="text"
      />

      <label for="order-customer-comment">
        Comment:
      </label>
      <textarea
        id="order-customer-comment"
        v-model="customerComment"
        type="text"
      ></textarea>

      <div class="order-form__button-container">
        <button type="submit" name="button" class="order-form__submit-button">
          Order
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OrderForm',
  data() {
    return {
      customerName: '',
      customerPhoneNumber: '',
      customerAddress: '',
      customerComment: ''
    }
  },
  methods: {
    proceedOrder() {
      console.log('proceed')
      console.log(this.customerName)
      console.log(this.customerPhoneNumber)
      console.log(this.customerAddress)
      console.log(this.customerComment)
    }
  }
}
</script>

<style scoped>
.order-form-container {
  display: flex;
  flex-direction: column;
  width: 150%;
}
.order-form__button-container {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.order-form__submit-button {
  flex-grow: 1;
  border-radius: 1px;
  margin: 0;
  height: 50px;
  font-size: 20px;
}
</style>
