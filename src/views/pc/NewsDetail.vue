<template>
  <div class="news_detail">
    <Top />
    <div class="banner"></div>
    <div class="box">
      <div class="news" v-if="news">
        <header>
          <span>{{news.date}}</span>
          新闻动态 > <em>新闻详情</em>
        </header>
        <div class="centent">
          <h1>{{ news.title.rendered }}</h1>
          <div v-html="news.content.rendered"></div>
        </div>
      </div>
    </div>
    <FooterBox footer-class="relative" />
  </div>
</template>

<script>
import Top from "@/components/pc/Top.vue";
import FooterBox from "@/components/pc/Footer.vue";
import { loadNews } from "@/utils/server";

export default {
  name: 'newsList',
  components: {
    Top,
    FooterBox
  },
  data() {
    return {
      news: null,
    }
  },
  created() {
    loadNews('//api.lkbt.pro/wp-json/wp/v2/posts?categories=4&page=1').then(res => {
      this.news = res.data.find(n => n.id === +this.$route.query.newsId);
      document.title = res.data.title.rendered;
      console.log('---', this.news);
    }).catch(error => console.error(error));
  }
}
</script>

<style lang="less">
@import url('./common.less');
.clear{
  &::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
}
.news_detail {
  .box{
    width: 1202px;
    margin: 0 auto;
  }
  .banner {
    height: 355px;
    margin-top: 90px;
    background: url(../../assets/news/banner.png) no-repeat center;
  }
  .news{
    header{
      text-align: left;
      padding: 14px 0;
      font-style: 20px;
      color: #6c6c6c;
      border-bottom: 2px solid #50d2d0;
      span{float: right;}
      em{
        font-style: normal;
        color: #50d2d0;
      }
    }
    .centent{
      padding: 94px 0;
      color: #6c6c6c;
      h1{
        font-size: 36px;
        color: #5c5b5b;
        font-weight: bold;
        line-height: 40px;
        padding-bottom: 70px;
      }
      h4{
        padding-top: 20px;
        text-align: left;
        font-size: 24px;
      }
      p{
        padding: 10px 0;
        text-align: left;
        font-size: 24px;
        text-indent: 2em;
        line-height: 1.8em;
      }
      h6{
        font-size: 14px;
        
      }
      .img{
        margin: 20px 0;
      }
    }
  }
}
</style>