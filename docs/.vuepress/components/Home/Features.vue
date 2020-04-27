<template>
  <div class="features">
    <div class="feature" v-for="feature in features">
      <h2>{{feature.title}}</h2>
      <p>{{feature.details}}</p>
    </div>
  </div>
</template >

<script>
export default {
  data() {
    return {
      features: [
        { title: "敏捷驱动", details: "以 敏捷 为核心的工作方式。" },
        { title: "效率至上", details: "以 提高效率，提高性价比 为工作理念。" },
        { title: "新视角", details: "站在 开发人员，客户，用户的角度 拓展工作视野。" },
      ]
    };
  }
};
</script>

<style>
.role-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
}
.role-item {
  display: inline-block;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  text-align: center;
  color: white;
  margin: 1rem 2rem 1rem 0;
  background-color: #46bd87;
}
</style>