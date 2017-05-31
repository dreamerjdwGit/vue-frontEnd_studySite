<template>
  <div class="detailOption">
	<div class="title-section">
		<h3 class="flexTitle">{{title}}</h3>
		<div class="flexBtn">
			<button class="btn btn-info" @click="toggle">
				<span>{{btnContent}}</span>
				<span :class="objectClass"></span>
			</button>
		</div>
	</div>
	<transition name="fade">
	<div v-show="isShow" class="list-section">
		<div class="flexList">
			<ul>
				<li v-for="item in items.data">
					<span>{{item.testName}}</span>
					<span>共{{item.testNum}}问</span>
				</li>
			</ul>
		</div>
		<div class="flexEnter">
			<ul>
				<li v-for="(value, key) in items.data">
					<button @click="startTest(key)" class="btn btn-primary">开始</button>
				</li>
			</ul>
		</div>
	</div>
	</transition>
  </div>
</template>

<script>

export default {
  name: 'detail-option',
  props: ['title', 'items'],
  data () {
    return {
      isShow: false,
      btnContent: '展开',
      down: true,
      up: false
    }
  },
  computed: {
    objectClass: function () {
      return {
        triangle: this.down,
        triangleUp: this.up
      }
    }
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
      this.btnContent = (this.btnContent === '展开') ? '收起' : '展开'
      this.down = !this.down
      this.up = !this.up
    },
    startTest: function (key) {
      var paper = 'paper00' + (key + 1)
      this.$router.push({path: '/Test/' + this.items.type + '/' + paper})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	font-family: '幼圆';
	font-weight: bold;
	color: #4D4D4D;
}
.detailOption {
	margin-top: 1rem;
	border-radius: 1%;
	background-color: #ece8e8;
}
.title-section {
	padding: 0.5rem;
	display: flex;
}
.flexTitle {
	flex: 5;
	margin: 0;
	padding-top: 0.7rem;
	text-align: center;
}
.flexBtn {
	flex: 2;
	text-align: center;
	position: relative;
}
.flexBtn button{
	width: 100%;
	height: 100%;
	font-size: 2rem;
}
.list-section {
	border-top: 0.1rem dashed grey;
	display: flex;
	font-size: 2rem;
}
.flexList {
	flex: 4;
	margin: 0;
	text-align: right;
}
.flexList ul, .flexEnter ul {
	list-style-type: none;
}
.flexList li, .flexEnter li {
	height: 4rem;
	line-height: 4rem;
}
.flexList ul li span{
	margin-left: 2rem;
}
.flexEnter {
	flex: 2;
	text-align: center;
}
.flexEnter button {
	height: 80%;
	width: 80%;
	line-height: 1rem;
	font-size: 1.8rem;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}

</style>
