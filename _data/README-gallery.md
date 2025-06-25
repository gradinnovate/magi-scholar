# Gallery Management System

這個系統使用單一的 `_data/gallery.yml` 檔案來管理所有 gallery 內容，取代了之前硬編碼的方式。

## 檔案結構

```
_data/
└── gallery.yml    # 所有 gallery 照片的資料和設定
```

## 如何添加新照片

在 `_data/gallery.yml` 的 `photos` 區塊中添加新項目：

```yaml
photos:
  - title: "照片標題"
    image: "檔案名稱.jpg"
    caption: "照片說明文字"
    alt: "替代文字 (用於可訪問性)"
    featured: true/false # 是否在 about 頁面顯示
    order: 數字 # 排序順序
    category: "類別名稱" # 照片類別
    layout_class: "large" # 佈局類別: large, wide, tall, normal
    description: "詳細描述文字"
```

## 佈局類別說明

- `large`: 佔用 2x2 的空間
- `wide`: 佔用 2x1 的空間 (橫向)
- `tall`: 佔用 1x2 的空間 (縱向)
- `normal`: 標準 1x1 大小

## 類別系統

目前支援的類別：

- `research`: 研究相關
- `academic`: 學術生活
- `collaboration`: 合作協作
- `personal`: 個人歷程
- `innovation`: 創新實踐

## 功能特色

1. **動態生成**: about 頁面和 gallery 頁面都會自動從 YAML 檔案讀取內容
2. **精選功能**: `featured: true` 的照片會顯示在 about 頁面
3. **自動計數**: gallery 數量會自動更新
4. **響應式佈局**: 支援不同的佈局樣式
5. **分類管理**: 可以按類別組織照片

## 修改步驟

1. 將新照片放到 `assets/img/` 資料夾
2. 在 `_data/gallery.yml` 中添加照片資訊
3. 設定 `featured: true` 如果要在 about 頁面顯示
4. 調整 `order` 來控制顯示順序
5. 選擇適當的 `layout_class` 來控制大小

## 注意事項

- 照片檔案需要放在 `assets/img/` 資料夾中
- `featured` 照片建議不要超過 3 張，以保持 about 頁面的簡潔
- 記得更新 `settings.total_count` 當添加或刪除照片時
