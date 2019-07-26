<template>
  <div class="home">
    <div class="box-1">
      <div class="inner">
        <img src="../assets/md_01.png" alt />
      </div>
    </div>
    <div class="box-2">
      <div class="inner">
        <img src="../assets/md_02.png" alt />
      </div>
    </div>
    <div class="box-3">
      <div class="inner">
        <img src="../assets/md_03.png" alt />
      </div>
    </div>
    <div class="box-4">
      <div class="inner">
        <img src="../assets/md_04.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped lang="less">
.home {
  width: ;
}
.box-1 {
  min-width: 1000px;
  height: 626px;
  background: url("../assets/bg_01.jpg") center 0 no-repeat;
  .inner {
    height: 626px;
  }
}
.box-2 {
  min-width: 1000px;
  height: 789px;
  background: url("../assets/bg_02.jpg") center 0 no-repeat;
  .inner {
    height: 789px;
  }
}
.box-3 {
  min-width: 1000px;
  height: 653px;
  background: url("../assets/bg_03.jpg") center 0 no-repeat;
  .inner {
    height: 653px;
  }
}
.box-4 {
  min-width: 1000px;
  height: 541px;
  background: url("../assets/bg_04.jpg") center 0 no-repeat;
  .inner {
    height: 541px;
  }
}
.inner {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
