<template>
  <div id="app">
    <header>
      <img alt="LKBT logo" src="./assets/logo.png" />
    </header>
    <router-view />
    <footer>
      <div class="footer-1">contact@lebenkredit.pro</div>
      <div class="footer-2">
        <a href="javascript:;">
          <img src="./assets/icon_logo_1.png" alt />
        </a>
        <a href="javascript:;">
          <img src="./assets/icon_logo_2.png" alt />
        </a>
        <a href="javascript:;">
          <img src="./assets/icon_logo_3.png" alt />
        </a>
        <a href="javascript:;">
          <img src="./assets/icon_logo_4.png" alt />
        </a>
        <a href="javascript:;">
          <img src="./assets/icon_logo_5.png" alt />
        </a>
        <a href="javascript:;">
          <img src="./assets/icon_logo_6.png" alt />
        </a>
      </div>
      <div class="footer-3">Copyright © 2019 the LebenKredit Team</div>
    </footer>
  </div>
</template>

<style lang="less">
@import "css/reset";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
}
header {
  width: 1000px;
  height: 96px;
  margin: 0 auto;
}
footer {
  min-width: 1000px;
  .footer-1 {
    height: 63px;
    line-height: 63px;
    color: #6f6f6f;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #ababab;
  }
  .footer-2 {
    width: 600px;
    height: 108px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-3 {
    color: #6f6f6f;
    font-size: 16px;
    text-align: center;
    padding-bottom: 30px;
  }
}
</style>
