<template>
  <div class="order-form">
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
        v-model="phoneNumber"
        type="text"
      />

      <label for="order-customer-address">
        Address:
      </label>
      <input id="order-customer-address" v-model="address" type="text" />

      <label for="order-customer-comment">
        Comment:
      </label>
      <textarea
        id="order-customer-comment"
        v-model="comment"
        type="text"
      ></textarea>

      <div class="order-form__button-container">
        <button
          :class="{ clicked: isClick }"
          type="submit"
          name="button"
          class="order-form__submit-button"
        >
          Order
        </button>
      </div>
    </form>
    <div class="order-form__text-and-image">
      <img
        src="@/static/pizza-order.jpg"
        alt="japan"
        class="order-form-image"
      />
      <h6 v-if="isClick">Your order is being processed. Please wait.</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderForm',
  data() {
    return {
      customerName: '',
      phoneNumber: '',
      address: '',
      comment: '',
      isClick: false
    }
  },
  methods: {
    proceedOrder() {
      this.$emit(
        'send-order',
        this.customerName,
        this.phoneNumber,
        this.address,
        this.comment
      )
    }
  }
}
</script>

<style scoped>
.order-form {
  margin-left: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
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
  cursor: pointer;
}
.order-form-image {
}
.order-form__text-and-image {
  margin-left: 10%;
}
.clicked {
  color: black;
  background: white;
}
</style>
