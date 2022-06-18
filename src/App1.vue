<template>
  <div id="app">
    <!-- 目标: 点击按钮, 改变3个li的顺序, 在头上的就到末尾. -->
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="change">走一走</button>
    <hr />
    <!-- 目标: 点击生成按钮, 新增一个li(随机数字)和删除按钮, 点击删除按钮, 删除对应的li和值 -->
    <ul>
      <li v-for="(item, index) in arr1" :key="index">
        {{ item }}
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: ["帅哥", "美女", "程序猿"],
      arr1: [1, 2, 3],
    };
  },
  methods: {
    change() {
      this.arr.push(this.arr[0]);
      this.arr.shift();
    },
    add() {
      this.arr1.push(Math.floor(Math.random() * 10));
    },
    remove(num) {
      console.log(num);
      this.arr1.splice(num, 1);
    },
  },
};
</script>

<style></style>
