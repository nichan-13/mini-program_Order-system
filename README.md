# mini-program_Order-System
微信小程序-点餐系统

## 小程序简介
这是一个由 `微信小程序` 开发的一个点餐小程序，用户可通过小程序完成加购食物、结算、支付订单完成点单流程并通过订单号取餐；用户可查看订单记录、订单状态及订单详情，还可看到所有的消费记录。

## 项目目录说明
```
  "pages": [
    "pages/index/index",               // 首页，通过开始点餐按钮进入加购页面及展示商品
    "pages/list/list",                 // 加购页面，可添加、减少、删除商品及清空购物车，加购购物车图标变亮，角标显示数量，可参与满减
    "pages/order/checkout/checkout",   // 确认订单页（支付订单），显示所有加购商品，可备注并支付订单（仅显示支付成功）
    "pages/order/detail/detail",       // 订单详情页面，显示所有加购商品，未取餐显示取餐号，取餐后显示已取餐
    "pages/order/list/list",           // 订单页，展示所有订单记录及订单状态（已取餐、未取餐），可查看订单详情
    "pages/record/record"              // 我的页面，展示授权登录后的个人信息及消费记录
  ]

  /utils  小程序客户端与服务器端交互的接口文件

```

##  项目展示
1. 首页   
    [![index.png](https://z4a.net/images/2020/06/12/index.png)](https://z4a.net/image/Tws3Uj)  

2. 加购   
    [![cart.png](https://z4a.net/images/2020/06/12/cart.png)](https://z4a.net/image/Twso30)  

3. 确认订单   
    [![chechout.png](https://z4a.net/images/2020/06/12/chechout.png)](https://z4a.net/image/TwsSjO)  

4. 订单详情  
    - 未取餐  
        [![detail1.png](https://z4a.net/images/2020/06/12/detail1.png)](https://z4a.net/image/Tws8FJ)  

    - 已取餐  
        [![detail2.png](https://z4a.net/images/2020/06/12/detail2.png)](https://z4a.net/image/TwsfPK)  

5. 订单  
    [![list.png](https://z4a.net/images/2020/06/12/list.png)](https://z4a.net/image/TwsZ8P)  

6. 我的  
    [![recode.png](https://z4a.net/images/2020/06/12/recode.png)](https://z4a.net/image/TwsGEa)  


## 开发注意

- 导入项目填写**测试号**即可
 
- 除了小程序客户端外还需要服务端，服务端由**Wampserver**集成包及**ThinkPHP**框架搭建，源码见


## 参考文档  

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)  