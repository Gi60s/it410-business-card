const app = new Vue({
  el: '#app',
  data: {
    Name: 'Trevor',
    Email: 'email@email.com',
    Address: '1234 street',
    Phone: '1-800-123-4567',
    options: [
      { text: 'You are poor', value: '100' },
      { text: 'Getting warmer', value: '200' },
      { text: 'Almost cool', value: '300' },
      { text: 'You are the boss', value: '1000000'}
    ],
    colors: [
      "red", "blue", "green", "white", "black", "orange"
    ],
    text_color: "black",
    background: "white",
    selected: '1000000'
  },
  methods: {
    setTextColor (color) {
      this.text_color = color
    },

    setBackgroundColor (color) {
      this.background = color
    }
  },
  computed: {
    price () {
      const chars = this.Name.length + this.Email.length + this.Phone.length + this.Address.length
      return +this.selected * chars
    }
  }
})