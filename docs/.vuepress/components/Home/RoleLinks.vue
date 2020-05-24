<template>
  <div class="role-container">
    <!-- <a
      class="role-item"
      v-bind:href="$withBase(role.link)"
      v-for="role in roles"
      v-bind:key="role.name"
    >{{ role.name }} ></a>-->
    <div
      v-for="role in roles"
      v-bind:key="role.name"
      class="role-item"
      v-bind:style="{'background-image':`url(${role.src})`}"
    >
      <a class="role-link" v-bind:href="$withBase(role.link)">
        <span class="role-name">{{role.name}}</span>
        <span class="border"></span>
      </a>
    </div>
  </div>
</template >

<script>
export default {
  data() {
    return {
      roles: [
        { name: "项目经理", link: "/pm/", src: "/role-images/pm.png" },
        { name: "产品主管", link: "/po/", src: "/role-images/po.png" },
        {
          name: "Scrum Master",
          link: "/sm/",
          src: "/role-images/scrum-master.png"
        },
        { name: "设计", link: "/ui/", src: "/role-images/ui.jpg" },
        {
          name: "开发",
          link: "/developer/",
          src: "/role-images/developer.jpg"
        },
        { name: "测试", link: "/qa/", src: "/role-images/qa.png" }
      ]
    };
  }
};
</script>

<style>
.role-container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.role-item {
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 20vh;
  min-height: 180px;
  background-size: cover;
  background-position: center;
  display: flex;
}

.role-link {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.role-link:hover {
  text-decoration: none !important;
  background-color: rgba(0, 0, 0, 0.2);
}

.role-link:hover .border {
  display: none;
}
.role-link:hover .role-name {
  border-color: white;
}
.role-link .role-name {
  padding: 12px 20px;
  border: 4px solid transparent;
}
.role-link .border {
  position: absolute;
  margin-top: 30px;
  display: inline-block;
  width: 25px;
  height: 4px;
  background-color: white;
}

@media only screen and (max-width: 767px) {
  .role-container {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>