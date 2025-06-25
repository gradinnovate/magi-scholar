---
layout: page
title: Background System Guide
permalink: /background-guide/
description: How to use the new background system
nav: false
---

# 🖼️ Background System Guide

這份指南說明如何使用新的背景視覺系統來創建令人驚豔的頁面。

## 🎯 可用的背景類型

### 1. Hero 背景 (`hero-bg`)
全屏幕的主視覺背景，適合首頁和主要頁面：

```html
<div class="hero-bg">
  <div class="hero-content">
    <h1>Your Title</h1>
    <p class="lead">Your subtitle</p>
    <div class="cta-buttons">
      <a href="#" class="btn-hero btn-primary">Primary Action</a>
      <a href="#" class="btn-hero btn-outline">Secondary Action</a>
    </div>
  </div>
</div>
```

### 2. 區段背景 (`section-bg`)
為特定區段添加背景圖片：

```html
<div class="section-bg bg-1">
  <div class="section-content">
    <h2>Section Title</h2>
    <p>Your content here...</p>
  </div>
</div>
```

可用選項：
- `bg-1` - 使用 1.jpg 作為背景
- `bg-2` - 使用 2.jpg 作為背景  
- `bg-3` - 使用 3.jpg 作為背景
- `bg-4` - 使用 4.jpg 作為背景

### 3. 幾何圖案背景 (`geometric-bg`)
動態幾何圖案背景：

```html
<div class="geometric-bg">
  <div class="content">
    <h2>Content with geometric background</h2>
  </div>
</div>
```

### 4. 漸變網格背景 (`mesh-bg`)
流動的漸變網格背景：

```html
<div class="mesh-bg">
  <div class="content">
    <h2>Content with mesh background</h2>
  </div>
</div>
```

## 🎨 頁面專用背景

系統會根據頁面類型自動選擇背景：

- **About 頁面**: 使用個人照片作為背景
- **Projects 頁面**: 使用 5.jpg 作為背景
- **Publications 頁面**: 使用 8.jpg 作為背景
- **Blog 頁面**: 使用 9.jpg 作為背景

在 `_sass/_background-system.scss` 中修改：

```scss
body.page-projects {
  .hero-bg {
    @include background-image('../img/your-image.jpg');
  }
}
```

## ⚙️ 自定義背景

### 更換背景圖片
1. 將新圖片放在 `assets/img/` 資料夾中
2. 在 `_sass/_background-system.scss` 中更新路徑：

```scss
.hero-bg {
  @include background-image('../img/your-new-image.jpg');
}
```

### 調整漸變覆蓋
修改覆蓋漸變的透明度和方向：

```scss
.hero-bg {
  @include overlay-gradient(0.7, 135deg); // 透明度 0.7，方向 135度
}
```

### 自定義顏色
在 `_sass/_variables.scss` 中修改主題色彩：

```scss
$primary-color: #your-color;
$accent-color: #your-accent;
```

## 📱 響應式注意事項

- 在手機裝置上，`background-attachment: fixed` 會自動改為 `scroll`
- Hero 區域在小螢幕上高度調整為 70vh
- 按鈕會在手機上調整大小和排列

## 🚀 性能優化

背景管理系統包含：

1. **圖片預載**: 自動預載重要背景圖片
2. **延遲載入**: 視需要載入背景圖片
3. **動畫優化**: 使用 CSS transform 而非位置屬性
4. **載入指示器**: 顯示載入進度

## 🎬 動畫效果

### 視差滾動
在桌面裝置上自動啟用視差效果

### 淡入動畫
使用 `animate-fade-in-up` 類別為元素添加動畫：

```html
<div class="card animate-fade-in-up">
  <!-- 內容 -->
</div>
```

### 粒子效果
Hero 背景自動包含動畫粒子效果

## 💡 最佳實踐

1. **圖片優化**: 使用壓縮的 JPEG 圖片（建議 < 500KB）
2. **對比度**: 確保文字與背景有足夠的對比度
3. **載入時間**: 考慮圖片大小對載入時間的影響
4. **可讀性**: 使用適當的覆蓋透明度確保內容可讀

## 🔧 故障排除

### 背景不顯示
1. 檢查圖片路徑是否正確
2. 確認圖片存在於 `assets/img/` 資料夾中
3. 檢查瀏覽器開發者工具的錯誤訊息

### 動畫卡頓
1. 確認使用的是 CSS transform 而非位置屬性
2. 檢查是否有太多同時運行的動畫
3. 考慮在低性能裝置上停用某些效果

---

現在你可以創建具有專業視覺效果的美麗網頁！ 🎨✨ 