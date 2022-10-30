import {ShopType, SourceType} from './index'

export const headers: Record<ShopType, Partial<Record<SourceType, string[]>>> = {
  YAHOO: {
    BILLING: [
      '利用日',
      '注文ID',
      '利用項目',
      '備考',
      '金額（税抜き）',
      '消費税',
      '金額（税込）',
    ],
    RECEIPT: [
      '利用日',
      '注文ID',
      '利用項目',
      '備考',
      '金額（税抜き）',
      '消費税',
      '金額（税込）',
    ],
    ORDER: [
      'Order ID',
      'Line ID',
      'Quantity',
      'Product Code',
      'Description',
      'Option Name',
      'Option Value',
      'Unit Price',
      'Unit Get Point',
      'Line Sub Total',
      'Line Get Point',
    ],
    AD_PERFORMANCE: [
      'ストアアカウント',
      'カテゴリ',
      '商品コード',
      '商品名',
      '表示回数',
      'クリック数',
      'CTR',
      'CPC',
      '利用金額',
      '注文数',
      '注文個数',
      '売上金額',
      'CVR',
      'ROAS',
    ],
    COMPANY: [
      'id',
      'name',
      'billingHandleRate',
      'receiptHandleRate',
    ],
    BRAND: [
      'id',
      'name',
      'companyId',
    ],
    PRODUCT: [
      'id',
      'brandId',
    ],
  },
  RAKUTEN: {
    BILLING: [
      '連番',
      '受注番号',
      '注文確認日',
      'クーポン名',
      'クーポン利用額',
      'クーポン利用確定日',
    ],
    RECEIPT: [
      '連番',
      '注文確認日',
      '受注番号',
      '決済番号',
      '決済機関連携番号',
      'お問合せ番号',
      '決済確定日',
      '楽天ﾍﾟｲ_決済金',
      '決済手段',
      '摘要',
    ],
    ORDER: [
      '受注番号',
      '商品コード',
      '個数',
    ],
    COMPANY: [
      'id',
      'name',
      'billingHandleRate',
      'receiptHandleRate',
    ],
    BRAND: [
      'id',
      'name',
      'companyId',
    ],
    PRODUCT: [
      'id',
      'brandId',
    ],
  },
}