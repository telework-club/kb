<template>
  <div class="role-container">
    <a
      class="role-item"
      v-bind:href="$withBase(role.link)"
      v-for="role in roles"
      v-bind:key="role.name"
    >{{ role.name }} ></a>
  </div>
</template >

<script>
export default {
  data() {
    return {
      roles: [
        { name: "项目经理", link: "/pm/" },
        { name: "产品主管", link: "/po/" },
        { name: "Scrum Master", link: "/sm/" },
        { name: "设计", link: "/ui/" },
        { name: "开发", link: "/developer/" },
        { name: "测试", link: "/qa/" }
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