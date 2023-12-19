  <template>
    <div class="message" v-html="formattedMsg">
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div></div>
  </template>

  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    computed: {
      formattedMsg() {
        // msgをHTMLとして解釈するために改行を<br>に変換
        return this.msg.replace(/\n/g, '<br>');
      }
    },
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .message {
  font-size: 0.75em;
  width: 50%; /* コンテンツの幅を50%に設定 */
  margin: 0 auto; /* 上下にはマージンなし、左右に自動マージンを設定して中央寄せ */
  text-align: center; /* テキストを中央揃えに設定 */
  line-height: 1.5; /* 行間を広げる */
  }
  </style>
