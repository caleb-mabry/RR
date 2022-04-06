<template>
  <div>
    <div>
      <router-link to="/">Back</router-link>
    </div>
    <div class="container" style="text-align: center" v-if="hasError">
      <h1>Looks like we had an error accepting your submission</h1>
      <p style="color: white; padding: 25px">{{ errorMessage }}</p>
    </div>
    <div class="container" v-if="notSubmitted">
      <form onsubmit="return false">
        <div class="question" id="question_1">
          <label
            >What would you like to be credited as on the site? (e.g. Jay
            Faraday) Discriminator (e.g. #3065) is optional.</label
          ><br />
          <input type="text" v-model="credit" />
        </div>
        <div class="question" id="question_2">
          <label>What character have you ripped, and from what game?</label
          ><br />
          <input type="text" v-model="char" />
        </div>
        <div class="question" id="question_3">
          <label
            >Please provide a link to the rip (Google Drive, Mega, etc.)</label
          ><br />
          <input type="text" v-model="ripLink" />
        </div>
        <div class="submit">
          <button v-on:click="submit">Submit</button>
        </div>
      </form>
    </div>
    <div class="container" v-else>
      <h1>Thank you for submitting your rip. We will get back to you soon</h1>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      credit: "",
      char: "",
      ripLink: "",
      ip: "",
      errorMessage: "",
      hasError: false,
      notSubmitted: true,
    };
  },
  created() {
    axios
      .get(
        `https://api.ipdata.co?api-key=d1768b77ff54a58adff020b2f0451a5a182be7941cb777030aa01d29`
      )
      .then((data) => {
        this.ip = data.data.ip;
      })
      .catch((error) => (this.ip = ""));
  },
  methods: {
    submit: function () {
      let output = "";
      this.hasError = false;
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios
        .post(
          "https://slblvzpv4d3lunoamgslxjqwvm0bcxor.lambda-url.us-east-1.on.aws/form-submit",
          {
            credit: this.credit,
            char: this.char,
            ripLink: this.ripLink,
            ip: this.ip,
          }
        )
        .then((res) => {
          output = res;
          this.notSubmitted = false;
        })
        .catch((err) => {
          this.errorMessage = err;
          this.hasError = true;
          output = err;
        });
    },
  },
};
</script>
<style scoped>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
h1 {
  padding: 5px;
  color: white;
}
.submit {
  display: flex;
  padding: 10px;
}
input {
  margin-top: 20px;
}

.container {
  width: 65%;
  margin: auto;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
}
.question {
  margin: 10px;
  background-color: whitesmoke;
  padding: 10px;
  width: 100%;
}
form {
  display: flex;
  flex-wrap: wrap;
}
button {
  text-decoration: none;
  text-align: center;
  padding: 5px 16px;
  background-color: #3c4667;
  border-radius: 3px;
  color: #edf0f3;
  transition: all 0.2s;
  font-size: 1.2vw;
}
button:hover {
  padding: 8px 16px;
  background-color: #567aab;
}
</style>