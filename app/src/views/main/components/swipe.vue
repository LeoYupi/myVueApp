<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>公告</van-swipe-item>
        <van-swipe-item>通知</van-swipe-item>
    </van-swipe>
</template>
  
  <style>
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 250px;
      text-align: center;
      background-color: #39a9ed;
    }
  </style>