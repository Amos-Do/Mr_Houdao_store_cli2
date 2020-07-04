# Mr. Houdao 厚道先生果醬電商

![](https://i.imgur.com/B9UZguP.jpg)


## Demo
https://amos-do.github.io/Mr_Houdao_store_cli2/

## 簡介
> 完整電商前後台網站，後台能讓店家自行上架商品、查看訂單以及設定優惠券等功能，前台電商網站能讓消費者享受瀏覽網站，了解厚道先生對商品的用心，凸顯厚道先生的特色，並且完整的購物流程，能讓消費者買到健康又美味的果醬。  
> 
> 本專案選擇開發者非常喜歡的品牌與形象，自行接洽厚道先生進行合作，取得厚道先生之品牌授權，才能順利完成果醬電商。

此作品的功能有:

* 前台
    * 首頁：介紹與導覽
    * 購物商場：多項商品分類以及單一商品細節、商品列表、加入購物車
    * 購物車：使用優惠券、調整商品（數量增減、刪除）、查看購物車商品項目，無產品時引導至購物商場
    * 下單購買 / 訂單結帳
    * 後台登入（登入頁） / 進入後台
* 後台
    * 商品管理：商品的管理（新增/刪除/修改產品）
    * 訂單管理：查看訂單狀況
    * 優惠券管理：優惠券的管理（新增/刪除/修改優惠券）

## 主要練習

* Vue.js
* VueCLI (2)
* Vuex 管理
* VueRouter
* VeeValidate 驗證
* 元件概念
* Webpack
* Ajax串接API、ES6
* Bootstrap 4 + 搭配手刻前台SCSS（後台使用 [SB Admin 2](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)）
* RWD（支援 iphone 5）

## 使用的 Plugin

* [Vue-router](https://router.vuejs.org/zh/)
* [Vue-axios](https://github.com/imcvampire/vue-axios#readme)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [VeeValidate ](https://logaretm.github.io/vee-validate/)
* [Font Awesome 5](https://fontawesome.com/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Animate.css](https://animate.style/)

## 前台介紹
### loading 動畫
厚道先生圖像動畫，凸顯品牌特色

![](https://i.imgur.com/lNpHa0n.png)

### 首頁
使用 Carousel 輪播 banner 展現厚道先生健康清晰特色
![](https://i.imgur.com/buIiUAH.jpg)

品牌與產品特色
![](https://i.imgur.com/SmupbBt.png)

透過不同色塊呈現厚道先生介紹產品與來源，與顧客拉近距離
![](https://i.imgur.com/gYHqlIw.png)

呈現最新上架的商品
![](https://i.imgur.com/vG3k21e.png)

### 購物商場

* 可透過**分類連結**選取特定分類
* 滑鼠滑入商品照片時，可進入詳細商品介紹
![](https://i.imgur.com/03oh6WP.jpg)

### 詳細商品介紹

點擊增減想要購買數量，並且計算出金額
![](https://i.imgur.com/SVMYl6F.png)

### 購物車

* 小型簡易購物車（每按下加入購物車按鈕後，會彈跳購物車，表示已加入）
![](https://i.imgur.com/S9JEYHy.png)

* 購物車頁面
    1. 可以增減數量，並且會同步金額
    2. 直接按刪除按鈕，會直接刪除該商品
    3. 優惠券輸入：houdao 或 code (已過期)
    4. 套用優惠券後，會顯示折購金額

    ![](https://i.imgur.com/3Y6jhGf.png)

* 如果購物車為空，會引導至購物商場購物
![](https://i.imgur.com/cMTpuL8.jpg)

### 建立訂單頁面

![](https://i.imgur.com/z6IgMhB.png)

如果回到上一頁，導航守衛會做出判斷，減少訂單尚未完成而退出
![](https://i.imgur.com/EbQgPs1.png)

### 付款頁面

![](https://i.imgur.com/VYbJi5f.png)


### 結帳完成

![](https://i.imgur.com/01WicWQ.png)


## 後台介紹

### 登入
![](https://i.imgur.com/NAWisgw.jpg)

### 商品管理
![](https://i.imgur.com/GYjrYjd.png)

### 訂單管理
![](https://i.imgur.com/DNlENMu.png)

### 優惠券管理
![](https://i.imgur.com/3sSgpe3.png)

## 過濾功能
* [金額符號與千分位](https://github.com/Amos-Do/Mr_Houdao_store_cli2/blob/master/src/filters/currency.js)
* [日期格式轉換](https://github.com/Amos-Do/Mr_Houdao_store_cli2/blob/master/src/filters/turnTimestamp.js)

## 聲明
* 圖片和資料來源皆來自於[厚道先生](https://www.facebook.com/mr.houdao)
* 本作品內的圖片與內容，純粹為個人練習技術使用，不做任何商業用途。

###### tags: `GitHub README`