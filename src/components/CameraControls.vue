<template>
  <div class="cameraControls">
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <div id="cameraControls">
      <div>
        <div>
          <label>Camera X position</label>
          <input type="range" v-model="camXdeg" min="0" max="359">
          <span>{{camXdeg}}</span>
        </div>
        <div>
          <label>Camera Y position</label>
          <input type="range" v-model="camYdeg" min="0" max="359">
          <span>{{camYdeg}}</span>
        </div>
        <div>
          <label>Camera Z position</label>
          <input type="range" v-model="camZdeg" min="0" max="359">
          <span>{{camZdeg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  export default {
    name: 'cameraControls',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App - Camera Controls',
        camXdeg: 0,
        camYdeg: 0,
        camZdeg: 0,
      };
    },
    watch: {
      camXdeg(nDeg) {
        this.$events.emit('cameraDeltaX', nDeg);
      },
      camYdeg(nDeg) {
        this.$events.emit('cameraDeltaX', nDeg);
      },
      camZdeg(nDeg) {
        this.$events.emit('cameraDeltaX', nDeg);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
</style>
